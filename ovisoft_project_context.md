# OviSoft Project Context & Development Handoff

**Last Updated:** December 21, 2024
**Project:** OviSoft (Premium IT Solutions Website)
**Status:** Alpha Release (Frontend Complete + Real Firebase Auth)

---

## 1. Project Philosophy & Goals
- **Objective:** Build a "Masterpiece" level website for an IT firm.
- **Aesthetic:** Futurism, Cybernetic, Dark Mode, Glassmorphism.
- **Core Requirement:** The site must look "Premium". No generic white backgrounds or standard Bootstrap look.
- **Animations:** High-performance animations using GSAP and Lenis Scroll.

## 2. Technical Stack
- **Framework:** Next.js 15 (App Router).
- **Language:** TypeScript.
- **Styling:** Tailwind CSS (v4 configuration), Custom Fonts (Outfit, Oswald).
- **State Management:** React Context (`AuthContext.tsx`).
- **Authentication:** Firebase v10 (Google, Facebook, Email/Password).
- **Animations:** 
  - `GSAP` (GreenSock) for timelines.
  - `@studio-freight/lenis` for smooth scrolling.
  - Custom Magnetic Buttons & Cursor.

## 3. Current Implementation Status

### A. Core Pages & Sections
- **Hero**: Uses `AI_Brain_Video_Generation.mp4` as background. text reveal animations.
- **Services**: Horizontal scrolling section. Includes "BSc/MSc Thesis & Research" card.
- **Work/Portfolio**: Project showcase with hover effects.
- **Team**: Circular profile cards.
- **About**: "Who We Are" section uses `Cybernetic_Code_Screen` video background.

### B. Authentication System (Major Feature)
- **Status:** Fully Integrated with Real Firebase (Google Popup).
- **Components:**
  - `AuthContext.tsx`: Manages user state, login/logout functions using `firebase/auth`. `User` type includes `photoURL`.
  - `navbar.tsx`: 
    - **Layout:** Standard 3-column (Logo - Menu - Auth).
    - **Guest:** Shows a `Gradient Login Button` on the far right.
    - **User:** Shows a `3-Dot Menu Icon` on the far right. Click -> Dropdown shows Avatar, Info, Logout.
  - `login/page.tsx`, `signup/page.tsx`: Premium Glass UI with Brand Color Social Buttons.
- **Logic:** `ContactForm` (SRS Generation) is **Gated**. Users must login to access it.

### C. Known Configurations
- **Hydration:** `suppressHydrationWarning={true}` is set in `layout.tsx` to prevent extension-related errors.
- **Scrolling:** `LenisScroll` component handles global smooth scrolling.
- **Cursor:** `CustomCursor` component hides system cursor and replaces it with a magnetic dot.

## 4. How to Resume Work (For Future AI Agent)
If you are picking up this project, follow these steps:

1. **Check Environment**:
   - The user has created `.env.local` manually with Firebase keys.
   - Verify specific keys in `src/lib/firebase.ts`.

2. **Immediate Roadmap**:
   - **Database**: Connect Firestore or a SQL DB to save the "Project Briefs" submitted in the `ContactForm`. Currently, it might just log or simulate submission.
   - **User Dashboard**: Create a `/dashboard` page where logged-in users can see their submitted project status.
   - **Admin Panel**: Internal view for OviSoft team to manage requests.

## 5. Code Structure Highlights
- `/src/components`: Contains modular UI parts (`Navbar`, `Footer`, `NoiseOverlay`, `Toast`).
- `/src/lib/firebase.ts`: Singleton Firebase initialization.
- `/src/context`: Global state providers.

## 6. User Preferences
- **Language:** Prefers communication in **Bangla**.
- **Feedback Loop:** Likes "Toast" notifications.
- **Layout:** Strict about "Login/Menu" placement. Auth button is separate from navigation links.

---
*End of Context Handoff*
