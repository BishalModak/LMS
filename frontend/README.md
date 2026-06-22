# LMS Assignment Project

## Learning Management System (LMS)

A Full Stack Web Application built using **Django REST Framework**, **React.js**, **JWT Authentication**, and **SQLite/PostgreSQL** for managing online courses, users, enrollments, and learning activities.

---

# Project Overview

The Learning Management System (LMS) is a role-based educational platform that allows administrators, instructors, and students to interact through a centralized system.

The platform provides secure authentication, course management, enrollment management, profile management, and dashboard functionalities. The system follows a modern client-server architecture where the frontend is developed using React.js and the backend is powered by Django REST Framework.

---

# Features

## Authentication & Authorization

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Logout Functionality
* Role-Based Access Control
* Forgot Password
* Reset Password
* Secure Password Hashing

---

## User Roles

### Admin

* Manage System Users
* View Dashboard
* Manage Categories
* Monitor Courses
* View Enrollment Information

### Instructor

* Create Courses
* Edit Courses
* Delete Courses
* Manage Own Courses
* View Course Information

### Student

* Browse Courses
* Search Courses
* Filter Courses
* View Course Details
* Enroll in Courses
* Manage Enrolled Courses

---

## Profile Management

* View Profile
* Update Profile Information
* Upload Profile Image
* Role-Based Profile Access

---

## Course Management

* Create Course
* Edit Course
* Delete Course
* Course Details Page
* Course Thumbnail Support
* Course Categories
* Search Courses
* Filter Courses

---

## Enrollment Management

* Student Enrollment
* Enrolled Course List
* Instructor Course Tracking

---

# Technology Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Bootstrap 5
* JavaScript (ES6+)
* HTML5
* CSS3

## Backend

* Python
* Django
* Django REST Framework
* JWT Authentication (Simple JWT)

## Database

* SQLite3 (Development)
* PostgreSQL (Production Ready)

## Tools

* VS Code
* Postman
* Git & GitHub

---

# System Architecture

Frontend (React.js)
↓
REST API Communication
↓
Django REST Framework
↓
Database (SQLite/PostgreSQL)

---

# Project Structure

```text
LMS_Project/
│
├── backend/
│   ├── accounts/
│   ├── courses/
│   ├── enrollments/
│   ├── dashboard/
│   ├── config/
│   ├── media/
│   ├── static/
│   └── manage.py
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── styles/
│   │   └── utils/
│   │
│   └── package.json
│
└── README.md
```

---

# API Endpoints

## Authentication

```http
POST /api/auth/register/
POST /api/auth/login/
POST /api/auth/token/refresh/
POST /api/auth/forgot-password/
POST /api/auth/reset-password/
GET  /api/auth/profile/
PUT  /api/auth/profile/update/
```

---

## Categories

```http
GET    /api/categories/
POST   /api/categories/create/
PUT    /api/categories/update/<id>/
DELETE /api/categories/delete/<id>/
```

---

## Courses

```http
GET    /api/courses/
GET    /api/courses/<id>/
POST   /api/courses/create/
PUT    /api/courses/update/<id>/
DELETE /api/courses/delete/<id>/
```

---

## Enrollments

```http
POST /api/enrollments/enroll/
GET  /api/enrollments/my-courses/
```

---

# Security Features

* JWT Access Token Authentication
* Refresh Token Authentication
* Protected API Endpoints
* Password Hashing
* Role-Based Permissions
* Secure User Sessions

---

# Frontend Pages

## Public Pages

* Home Page
* Login Page
* Registration Page
* Forgot Password Page
* Reset Password Page

## Student Pages

* Student Dashboard
* Course List
* Course Details
* My Courses
* Profile

## Instructor Pages

* Instructor Dashboard
* Create Course
* Edit Course
* My Courses
* Profile

## Admin Pages

* Admin Dashboard
* Category Management
* User Monitoring
* Profile

---

# Installation Guide

## Backend Setup

```bash
git clone <repository-url>

cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py makemigrations

python manage.py migrate

python manage.py runserver
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# Testing

The application APIs were tested using Postman.

### Tested Modules

* Registration
* Login
* JWT Authentication
* Profile Management
* Category Management
* Course CRUD
* Enrollment System
* Forgot Password
* Reset Password

---

# Learning Outcomes

Through this project, the following concepts were implemented and practiced:

* Full Stack Development
* REST API Development
* JWT Authentication
* Role-Based Authorization
* React State Management
* API Integration
* Database Design
* Django REST Framework
* Frontend and Backend Communication

---

# Future Improvements

* Video Lecture Upload
* Quiz & Assessment Module
* Certificate Generation
* Payment Gateway Integration
* Progress Tracking
* Email Verification
* Live Classes
* Discussion Forums
* Analytics Dashboard

---

# Author

**Bishal Chandro Modak**

B.Sc. in Computer Science & Engineering

Full Stack Web Developer

Leading University

---

# License

This project was developed as an academic assignment for educational purposes.
