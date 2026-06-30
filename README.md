# 🚀 Jobify — Smart Job Platform

> A full-featured, role-based job portal built as a graduation project. Jobify connects **Employees**, **Companies**, and **Admins** through an intelligent, modern web platform — complete with AI assistance, subscription plans, interview scheduling, and real-time analytics.

🌍 **Live Demo:** [https://graduation-project-sigma-pink.vercel.app/](https://graduation-project-sigma-pink.vercel.app/)

## ⚠️ Important Note

The backend is currently hosted on a free hosting service that only supports **HTTP** (not **HTTPS**).

Because the frontend is deployed over **HTTPS**, browsers block requests between the frontend and backend due to **Mixed Content** security restrictions.

As a result, some features that depend on API communication may not work correctly in the live deployed version.

Please refer to the demo video for a complete overview of the project's functionality.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [User Roles](#user-roles)
  - [👤 Employee (Job Seeker)](#-employee-job-seeker)
  - [🏢 Company (Recruiter)](#-company-recruiter)
  - [🛡️ Admin (Platform Manager)](#️-admin-platform-manager)
- [Public Pages](#public-pages)
- [Authentication System](#authentication-system)
- [Getting Started](#getting-started)

---

## Overview

**Jobify** is a graduation project built with **Next.js 16** and **React 19**. It is a fully role-based job recruitment platform that supports three distinct user types — each with a dedicated dashboard, tailored features, and access controls. The platform includes:

- 🔍 Advanced job search and filtering
- 🤖 Integrated AI Chat Assistant
- 📅 Interview scheduling and management
- 💳 Subscription plans with coupon system
- ✅ Company verification workflow
- 📊 Analytics dashboards with charts
- 🌐 Public company and candidate profiles

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **State Management** | Zustand |
| **Server State** | TanStack React Query v5 |
| **Forms & Validation** | React Hook Form + Zod v4 |
| **Animations** | Framer Motion + GSAP (with ScrollTrigger) |
| **Charts** | Recharts + Visx |
| **3D** | React Three Fiber + Three.js |
| **Rich Text Editor** | TipTap |
| **HTTP Client** | Axios |
| **UI Components** | Radix UI + custom components |
| **Icons** | HugeIcons + Lucide React |
| **Font** | Outfit (Google Fonts) |
| **Date Utilities** | date-fns + date-fns-tz |

---

## Project Architecture

```
graduation-project/
├── app/
│   ├── (Auth)/               # Login & Register pages
│   ├── (Main)/               # Public-facing pages
│   │   ├── (Home-With-Smooth-Scroll)/  # Landing page with GSAP animations
│   │   ├── jobs/             # Job search & job detail pages
│   │   ├── profile/[id]/     # Public user profiles
│   │   ├── subscription/     # Subscription payment result page
│   │   ├── forget-password/
│   │   ├── reset-password/
│   │   └── confirm-email-change/
│   ├── (Dashboard)/          # Role-gated dashboards
│   │   ├── dashboard/admin/  # Admin panel
│   │   ├── dashboard/company/ # Company recruiter panel
│   │   └── dashboard/employee/ # Job seeker panel
│   └── api/                  # Next.js API routes (auth, user-details)
├── components/               # Shared UI components
├── hooks/                    # Custom React hooks
├── lib/                      # Utilities, constants, Zustand store
└── validations/              # Zod validation schemas
```

---

## User Roles

---

### 👤 Employee (Job Seeker)

The Employee role is designed for job seekers who want to find, apply for, and track jobs.

#### 🏠 Dashboard Overview
- **Personalized welcome screen** with first name greeting
- **Statistics cards** showing:
  - Total applied jobs count
  - Saved jobs count
  - Upcoming interviews count
  - Profile views count (how many recruiters viewed the profile)
- **Monthly Applications Chart** — an area chart comparing applications and interviews per month
- **Recently Applied Jobs** — a quick list of the most recent job applications
- **AI Chat shortcut card** for instant access to the AI Assistant

#### 🔖 Saved Jobs
- Browse and manage all jobs the employee has bookmarked
- Remove saved jobs from the list
- Direct links to job detail pages

#### 📋 Job Applications
- Full list of all submitted applications
- Application status badges: `Pending` | `Reviewed` | `Accepted` | `Rejected`
- View company name, job title, and application date for each entry

#### 📅 Interviews
- View all scheduled, upcoming, completed, or cancelled interviews
- Filter interviews by:
  - Status (`Upcoming`, `Completed`, `Cancelled`, `All`)
  - Date (show only today's interviews)
- Interview cards display:
  - Company name and logo
  - Job title applied for
  - Scheduled date and time slot (with GMT timezone)
  - Interview status badge
  - Meeting link / notes

#### 👤 My Public Profile
View how the public profile looks to recruiters, including:
- Profile photo and cover
- Bio and job title
- Skills list
- Work experience timeline
- Personal projects with links
- Contact information (LinkedIn, phone, etc.)

#### ⚙️ Settings
A multi-tab settings panel:

| Tab | Features |
|---|---|
| **Profile** | Edit name, job title, bio, country, industry, profile photo, and CV upload |
| **Experience** | Add, edit, or delete work experience entries |
| **Skills** | Add or remove skill tags |
| **Projects** | Add, edit, or delete personal projects with URLs |
| **Contact** | Update LinkedIn, phone, social links |
| **Security** | Change email address and change password |

#### 🤖 AI Chat Assistant
- Dedicated AI chat page with suggested prompts tailored for job seekers:
  - *"What jobs match my profile?"*
  - *"How can I improve my CV?"*
  - *"Prepare me for an interview"*
  - *"What skills are in demand?"*
- Animated floating AI avatar
- Text input with file attachment support

---

### 🏢 Company (Recruiter)

The Company role is designed for recruiters and HR teams to post jobs, manage applicants, schedule interviews, and track hiring analytics.

#### 🏠 Dashboard Overview
- **Company-specific welcome screen**
- **Statistics cards** showing:
  - Total active job posts
  - Total applicants received
  - Upcoming interviews count
  - New applicants (recent period)
- **Analytics Chart** — an area chart comparing *Jobs Posted vs Applicants* per month
- **Latest Job Posts** panel with quick access to recent postings
- **New Applicants Card** showing recent applications
- **AI Chat** floating icon for quick access

#### 📝 Create Job Post
A multi-step job creation wizard with animated step transitions:

**Step 1 — Basic Information:**
| Field | Description |
|---|---|
| Job Title | Text input |
| Job Category | Searchable dropdown (37 categories: Software, Design, Marketing, Healthcare, etc.) |
| Location | Country selector |
| Employment Type | FullTime / PartTime (multi-select pill buttons) |
| Work Approach | OnSite / Remote / Hybrid (multi-select pill buttons) |
| Experience Required | Min & Max years of experience selectors |
| Salary Range (USD) | Min & Max salary inputs |
| Featured Job | Toggle switch (featured jobs appear at the top of listings) |

**Step 2 — Job Description (Rich Text Editor):**
- Full TipTap rich text editor
- Job description, responsibilities, and required skills sections

**Step 3 — Preview & Submit:**
- Full preview of the job post before submission
- Submit for admin approval

#### 📂 My Job Posts
- Paginated table of all created job posts
- **Status badges**: `Pending` | `Approved` | `Rejected`
- **Active/Inactive** status for each post

**Per Job Post Detail Page (tabs):**

| Tab | Features |
|---|---|
| **Details** | Full job description, responsibilities, and required skills |
| **Applicants** | List of all applicants with filter by status; mark as Reviewed, Accept, Reject |
| **Interviews** | All scheduled interviews for this job with status and reschedule options |

**Applicant management actions:**
- ✅ Mark as Reviewed
- ✅ Accept applicant
- ❌ Reject applicant
- 📅 Schedule Interview — pick date, start time, end time, and generate a meeting link

**Edit Job Post** — update any field in the existing job post via a modal form.

**Delete Job Post** — permanently delete a job post with confirmation dialog.

#### 👥 Candidates Search
Browse all registered job seekers on the platform (requires subscription with candidate search access):
- Search by **name**, **country**, and **industry**
- Paginated results grid
- Candidate cards showing profile photo, job title, industry, and location
- Direct link to each candidate's public profile

#### 📅 Interviews Management
A full company-wide interviews view:
- Table display with candidate name, email, job position, date & time, status
- Filters: Search by candidate name / email / job title, filter by status, show only today's interviews
- **View Interview Details** — full sheet panel with:
  - Candidate and job info
  - Scheduled time with copy-to-clipboard meeting link
- **Edit Interview** — reschedule date and time
- **Cancel Interview** option

#### 👤 Company Public Profile
View how the company profile appears to job seekers:
- Company logo and cover image
- Company name, industry, size, founded year
- Social links (LinkedIn, Facebook, Instagram, Twitter, Website)
- Statistics (job posts, applicants, etc.)
- List of open job vacancies

#### ⚙️ Company Settings
A multi-tab settings panel:

| Tab | Features |
|---|---|
| **Profile** | Edit company name, logo, cover image, industry, country, size, founded year, bio, description |
| **Socials** | Update LinkedIn, Instagram, Facebook, Twitter, Website URL, phone number, headquarters address |
| **Subscription** | View current plan, billing history, upgrade plan |
| **Verification** | Submit company verification request with documents |
| **Security** | Change email address and change password |

#### 💳 Subscription Management
- View current active plan with features and expiry
- **Upgrade Plan** — view available plans and subscribe
- **Billing History** — table of all past payments
- Apply **Discount Coupons** during checkout
- Payment integration via payment link generation

#### 🤖 AI Chat Assistant
Dedicated AI chat page with company-specific suggested prompts:
- *"Analyze our company profile"*
- *"How can we attract better candidates?"*
- *"Review our job postings"*
- *"Suggest improvements for this job description"*
- *"Find candidates that match this role"*
- *"Show hiring insights and trends"*

---

### 🛡️ Admin (Platform Manager)

The Admin role provides full control over the entire platform — users, companies, jobs, and subscriptions.

#### 🏠 Dashboard Overview
- **Platform-wide statistics cards:**
  - Total registered users
  - Total registered companies
  - Active job posts
  - Pending jobs (awaiting approval)
- **Monthly Analytics Chart** — line/area chart of job posts and applications per month
- **Latest Job Posts** table — most recently posted jobs across the platform
- **Pending Approvals** panel — quick action cards for jobs awaiting review
- Quick link button to **Manage Subscriptions**

#### 👤 Users Management
- Full paginated list of all registered users (employees)
- Filter by status: `Active` | `Blocked`
- Search by name or email
- **User Detail Page** (per user):
  - Full profile data, industry, country, job title
  - Social links
  - Account status badge
  - **Block / Unblock** user toggle action

#### 🏢 Companies Management
Two views in one page:

**All Companies Tab:**
- Paginated list of all registered companies
- Status badges: `Active` | `Blocked` | `Pending`
- Subscription badge per company
- **View Company Details** — full company info sheet with:
  - Company profile data
  - Subscription details
  - Block / Unblock company action

**Verification Requests Tab:**
- List of all company verification requests
- Verification status badges: `Pending` | `Approved` | `Rejected`
- **View Verification Request** — detailed panel showing:
  - Company info and submitted documents
  - Document preview (files uploaded by company)
  - Actions: **Approve**, **Reject**, or **Ask for More Details** (with custom message)

#### 💼 Jobs Management
- Full list of all job posts across all companies
- Job status badges: `Pending` | `Approved` | `Rejected`
- Filter and search capabilities
- **Approve** or **Reject** job posts with one click
- **View Job Details** — full job info panel

#### 💳 Subscriptions Management
A comprehensive subscription control center with statistics and three tabs:

**Statistics:**
- Total subscribers
- New subscriptions this month
- Currently active subscriptions
- Expired/cancelled plans

**Plans Tab:**
- View all available subscription plans
- **Create New Plan** — form with:
  - Plan name, short description
  - Monthly price & yearly price
  - Max job posts per month
  - Featured job posts per month
  - Feature toggles: AI Tools Access, Candidate Search, Priority Support
  - Publish/unpublish toggle
- **Edit Plan** — update any plan detail
- **Delete Plan** — with confirmation

**Subscriptions Tab:**
- Full table of all company subscriptions
- Filter by plan name and status
- Subscription status badges: `Active` | `Expired` | `Cancelled`

**Coupons Tab:**
- List of all discount coupon codes
- Coupon status badges: `Active` | `Expired` | `Used`
- **Create Coupon** — with coupon code, discount percentage, expiry date, and plan selection
- **Delete Coupon**

#### ⚙️ Admin Settings
| Tab | Features |
|---|---|
| **Profile & Social Links** | Edit name and platform social links |
| **Email** | Update admin email address |
| **Password** | Change admin password securely |

---

## Public Pages

### 🏠 Landing Page
A premium-designed landing page with GSAP-powered scroll animations:
- **Hero Section** — full-screen animated hero with job search prompt
- **Partner Companies** — logo carousel of featured companies
- **Who We Are** — platform mission and value proposition section
- **How It Works** — step-by-step guide for both job seekers and companies
- **Start Career Today** — CTA section

### 🔍 Jobs Search Page
- Real-time job search by keyword
- Location-based filtering
- **Filter Sidebar:**
  - Job Type (Full Time / Part Time)
  - Work Type (On Site / Remote / Hybrid)
  - Experience Range (Min & Max years)
- Reset filters button
- Paginated results with job cards
- Skeleton loading states

### 📄 Job Detail Page
Public job listing with:
- Job title, company name, location, salary range
- Posted date and employment type badges
- Full job description, responsibilities, and required skills
- **Apply Now** button (employees only)
- **Save Job** button (employees only)

### 👤 Public Profile Page
- Viewable by any logged-in user
- Displays employee's full profile information (skills, experience, projects)

### 📄 About Page
Platform information and team details.

### 📬 Contact Page
Contact form for platform inquiries.

### 💳 Subscription Page
- Pricing plans overview
- Payment result message after subscription checkout

---

## Authentication System

- **Register** — separate tabbed forms for Employee and Company registration
- **Login** — unified login with role-based redirect after authentication
- **Forget Password** — email-based password reset flow
- **Reset Password** — secure token-based password update
- **Confirm Email Change** — email change verification flow
- JWT-based authentication stored and initialized via Zustand global store
- Route guards for all dashboard pages (role-aware redirect)

---

## Getting Started

### Prerequisites
- Node.js >= 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd graduation-project

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_BACKEND_URL=http://your-backend-api-url
```

### Running Locally

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Key Directories Reference

| Path | Description |
|---|---|
| `app/(Auth)/` | Login and Register pages |
| `app/(Main)/jobs/` | Public job listing and search |
| `app/(Dashboard)/dashboard/employee/` | Employee dashboard and sub-pages |
| `app/(Dashboard)/dashboard/company/` | Company dashboard and sub-pages |
| `app/(Dashboard)/dashboard/admin/` | Admin dashboard and sub-pages |
| `components/forms/` | Reusable form components |
| `components/ui/` | Base UI component library |
| `components/charts/` | Chart components |
| `lib/` | Constants, utilities, Zustand store |
| `validations/` | Zod validation schemas |
| `hooks/` | Custom React hooks |

---

## 🎯 Feature Highlights

| Feature | Employee | Company | Admin |
|---|:---:|:---:|:---:|
| Job Search & Filtering | ✅ | — | — |
| Apply for Jobs | ✅ | — | — |
| Save Jobs | ✅ | — | — |
| Interview Scheduling | ✅ (view) | ✅ (manage) | — |
| AI Chat Assistant | ✅ | ✅ | — |
| Profile Management | ✅ | ✅ | ✅ |
| Create & Manage Job Posts | — | ✅ | — |
| Applicant Management | — | ✅ | — |
| Candidate Search | — | ✅ (paid) | — |
| Subscription Plans | — | ✅ | — |
| Company Verification | — | ✅ (request) | ✅ (review) |
| Approve/Reject Jobs | — | — | ✅ |
| Manage Users | — | — | ✅ |
| Manage Companies | — | — | ✅ |
| Subscription Plan CRUD | — | — | ✅ |
| Coupon Code Management | — | — | ✅ |
| Platform Analytics | — | ✅ (own) | ✅ (all) |

---

*Built as a Graduation Project — Jobify connects talent with opportunity.*
