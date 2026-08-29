"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { auth, googleProvider, facebookProvider, db } from "@/lib/firebase";
import { signInWithPopup, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail, User as FirebaseUser } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { ADMIN_EMAILS } from "@/config/admins";

interface User {
    uid: string;
    email: string | null;
    name?: string | null;
    photoURL?: string | null;
    emailVerified?: boolean;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (email: string, password: string, name: string) => Promise<boolean>;
    logout: () => void;
    googleLogin: () => void;
    facebookLogin: () => void;
    isLoading: boolean;
    refreshUser: () => Promise<void>;
    updateName: (name: string) => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

    const syncUserToFirestore = async (user: FirebaseUser) => {
        try {
            const userRef = doc(db, "users", user.uid);
            await setDoc(userRef, {
                uid: user.uid,
                email: user.email,
                name: user.displayName || "Anonymous",
                photoURL: user.photoURL,
                emailVerified: user.emailVerified,
                lastLogin: serverTimestamp(),
                role: ADMIN_EMAILS.includes(user.email || "") ? "admin" : "client"
            }, { merge: true });
        } catch (error) {
            console.error("Error syncing user to Firestore:", error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser({
                    uid: currentUser.uid,
                    email: currentUser.email,
                    name: currentUser.displayName,
                    photoURL: currentUser.photoURL,
                    emailVerified: currentUser.emailVerified
                });
                // Sync to Firestore on every auth state change (login/refresh)
                await syncUserToFirestore(currentUser);
            } else {
                setUser(null);
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const showToast = (msg: string, type: "success" | "error") => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 3000);
    };

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            showToast("Successfully logged in!", "success");
        } catch (error: any) {
            console.error(error);
            let msg = "Failed to login.";
            if (error.code === 'auth/invalid-credential') msg = "Invalid email or password.";
            if (error.code === 'auth/user-not-found') msg = "No account found with this email.";
            if (error.code === 'auth/wrong-password') msg = "Incorrect password.";
            showToast(msg, "error");
        } finally {
            setIsLoading(false);
        }
    };

    const signup = async (email: string, password: string, name: string): Promise<boolean> => {
        setIsLoading(true);
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(result.user, { displayName: name });
            await sendEmailVerification(result.user);

            // Manually sync with the provided name since result.user.displayName might be stale
            const userRef = doc(db, "users", result.user.uid);
            await setDoc(userRef, {
                uid: result.user.uid,
                email: result.user.email,
                name: name, // Use the name from arguments
                photoURL: result.user.photoURL,
                emailVerified: result.user.emailVerified,
                lastLogin: serverTimestamp(),
                role: ADMIN_EMAILS.includes(result.user.email || "") ? "admin" : "client"
            }, { merge: true });

            showToast("Account created! Verify your email to access all features.", "success");
            return true;
        } catch (error: any) {
            console.error(error);
            let msg = "Failed to create account.";
            if (error.code === 'auth/email-already-in-use') msg = "This email is already registered. Please login.";
            if (error.code === 'auth/weak-password') msg = "Password should be at least 6 characters.";
            showToast(msg, "error");
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            showToast("Logged out successfully.", "success");
        } catch (error) {
            showToast("Failed to logout.", "error");
        }
    };

    const googleLogin = async () => {
        setIsLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            await syncUserToFirestore(result.user); // Sync Google user
            showToast(`Welcome back, ${result.user.displayName}!`, "success");
        } catch (error: any) {
            console.error(error);
            const errorMessage = error.code === 'auth/popup-closed-by-user'
                ? "Login cancelled."
                : "Google Login Failed. Check API Config.";
            showToast(errorMessage, "error");
        } finally {
            setIsLoading(false);
        }
    };

    const refreshUser = async () => {
        if (auth.currentUser) {
            await auth.currentUser.reload();
            setUser({
                uid: auth.currentUser.uid,
                email: auth.currentUser.email,
                name: auth.currentUser.displayName,
                photoURL: auth.currentUser.photoURL,
                emailVerified: auth.currentUser.emailVerified
            });
            await syncUserToFirestore(auth.currentUser);
        }
    };

    const facebookLogin = async () => {
        setIsLoading(true);
        try {
            const result = await signInWithPopup(auth, facebookProvider);
            await syncUserToFirestore(result.user); // Sync Facebook user
            showToast(`Welcome back, ${result.user.displayName}!`, "success");
        } catch (error: any) {
            console.error(error);
            let errorMessage = "Facebook Login Failed.";
            if (error.code === 'auth/account-exists-with-different-credential') {
                errorMessage = "Email already used. Sign in with Google or Email.";
            } else if (error.code === 'auth/popup-closed-by-user') {
                errorMessage = "Login cancelled.";
            }
            showToast(errorMessage, "error");
        } finally {
            setIsLoading(false);
        }
    };

    const updateName = async (name: string) => {
        setIsLoading(true);
        try {
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, { displayName: name });
                setUser({ ...auth.currentUser, name }); // Update local state immediately
                await syncUserToFirestore(auth.currentUser); // Sync updated name
                showToast("Profile name updated successfully!", "success");
            }
        } catch (error) {
            console.error(error);
            showToast("Failed to update profile name.", "error");
        } finally {
            setIsLoading(false);
        }
    };

    const resetPassword = async (email: string) => {
        setIsLoading(true);
        try {
            await sendPasswordResetEmail(auth, email);
            showToast("Password reset link sent to your email.", "success");
        } catch (error: any) {
            console.error(error);
            let msg = "Failed to send reset email.";
            if (error.code === 'auth/user-not-found') msg = "No account found with this email.";
            if (error.code === 'auth/invalid-email') msg = "Invalid email address.";
            showToast(msg, "error");
            throw error; // Re-throw to handle in component
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, googleLogin, facebookLogin, isLoading, refreshUser, updateName, resetPassword }}>
            {children}
            {toast && (
                <div className="fixed top-24 right-6 z-[10001] animate-in slide-in-from-right fade-in duration-300">
                    <div className={`glass border ${toast.type === "success" ? "border-green-500/50" : "border-red-500/50"} p-4 rounded-xl flex items-center gap-4 shadow-2xl min-w-[300px] bg-black/80 backdrop-blur-xl`}>
                        <div className={`p-2 rounded-full ${toast.type === "success" ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"}`}>
                            {toast.type === "success" ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
                            )}
                        </div>
                        <div className="flex-1">
                            <h4 className={`font-bold ${toast.type === "success" ? "text-green-500" : "text-red-500"}`}>
                                {toast.type === "success" ? "Success" : "Error"}
                            </h4>
                            <p className="text-sm text-gray-300">{toast.msg}</p>
                        </div>
                    </div>
                </div>
            )}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
