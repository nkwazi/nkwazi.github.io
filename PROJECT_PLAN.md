# Project Plan: Personal Website with Admin Interface

This document outlines the plan for building a personal website with a login interface, an admin page for access management, and role-based modules.

## 1. Core Architecture

*   **Frontend:** React (with Vite and TypeScript)
*   **Styling:** Tailwind CSS
*   **Backend/Authentication/Database:** Firebase (Authentication, Firestore, Hosting)
*   **Routing:** `react-router-dom`

This stack is chosen for its modern development experience, scalability, and generous free tiers, making it ideal for a personal project.

## 2. Development Phases

### Phase 1: Base Project Setup & Authentication

1.  **Project Scaffolding:**
    *   Initialize a new React project using Vite and TypeScript.
    *   Remove existing static files.
    *   Install and configure Tailwind CSS for styling.
    *   Set up a basic project structure with folders for components, pages, etc.

2.  **Firebase Integration:**
    *   Create a new Firebase project.
    *   Enable Firebase Authentication (with Google provider) and Firestore.
    *   Add Firebase SDK to the React project and initialize it with the project credentials.

3.  **Authentication Flow:**
    *   Create a `LoginPage` with a "Sign in with Google" button.
    *   Implement the Google Sign-In logic using Firebase Authentication.
    *   Create a global state management solution (e.g., React Context) to track the user's authentication status.
    *   Implement a "Sign Out" functionality.

### Phase 2: Routing and Access Control

4.  **Routing Setup:**
    *   Install `react-router-dom`.
    *   Define routes for the application:
        *   `/login`: Publicly accessible login page.
        *   `/`: Home page, accessible to all.
        *   `/dashboard`: Protected page for authenticated users.
        *   `/admin`: Protected page for admin users only.
    *   Implement protected routes that redirect unauthenticated users to the login page.

5.  **Role-Based Access Control (RBAC):**
    *   Define a Firestore data model to store user profiles and roles. Each user document will have a `role` field (e.g., `admin` or `user`).
    *   When a user signs up, assign them a default role of `user`.
    *   Create a process for elevating a user to `admin`. Initially, this will be a manual update in the Firebase Firestore console.
    *   Implement logic in the application to fetch the current user's role and protect routes based on that role (e.g., the `/admin` route).

### Phase 3: Content and Admin Features

6.  **Admin Page:**
    *   Build the UI for the `/admin` page.
    *   Initially, this page will display a list of all users and their roles from Firestore.
    *   (Future) Implement functionality for admins to change user roles directly from this page.

7.  **Modular Content Pages:**
    *   Create a simple system to manage content pages in Firestore.
    *   Each page document could have a `title`, `content`, and `requiredRole` field.
    *   Build a dynamic routing system that renders these pages and enforces access based on the `requiredRole`.

### Phase 4: Verification and Deployment

8.  **Frontend Verification:**
    *   Write end-to-end tests using a framework like Playwright.
    *   The tests will verify:
        *   The Google login and logout flow.
        *   Unauthenticated users are redirected from protected pages.
        *   Non-admin users cannot access the `/admin` page.
        *   Admin users can access the `/admin` page.

9.  **Deployment:**
    *   Configure the project for deployment.
    *   Deploy the application to Firebase Hosting.