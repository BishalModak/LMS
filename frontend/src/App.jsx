import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import Home from "./pages/Home/Home";

import AdminDashboard from "./pages/Admin/Dashboard";
import InstructorDashboard from "./pages/Instructor/Dashboard";
import StudentDashboard from "./pages/Student/Dashboard";

import CourseList from "./pages/Courses/CourseList";
import CourseDetails from "./pages/Courses/CourseDetails";

import MyCourses from "./pages/Student/MyCourses";

import Profile from "./pages/Profile/Profile";
import ChangePassword
from "./pages/Profile/ChangePassword";
import ProtectedRoute from "./routes/ProtectedRoute";
import Categories from "./pages/Admin/Categories";
import MainLayout from "./layouts/MainLayout";
import CreateCourse from "./pages/Courses/CreateCourse";
import InstructorMyCourses from "./pages/Instructor/MyCourses";
import EditCourse from "./pages/Courses/EditCourse";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}

        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Admin Dashboard */}

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <AdminDashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Instructor Dashboard */}

        <Route
          path="/instructor-dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <InstructorDashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Student Dashboard */}

        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <StudentDashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Courses */}

        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <MainLayout>
                <CourseList />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/course/:id"
          element={
            <ProtectedRoute>
              <MainLayout>
                <CourseDetails />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Student Courses */}

        <Route
          path="/my-courses"
          element={
            <ProtectedRoute>
              <MainLayout>
                <MyCourses />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Profile */}

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Profile />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-course"
          element={
            <ProtectedRoute>
              <MainLayout>
                <CreateCourse />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/instructor-courses"
          element={
            <ProtectedRoute>
              <MainLayout>
                <InstructorMyCourses />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-course/:id"
          element={
            <ProtectedRoute>
              <MainLayout>
                <EditCourse />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Categories />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

<Route
  path="/reset-password"
  element={<ResetPassword />}
/>
<Route
  path="/change-password"
  element={
    <ProtectedRoute>
      <MainLayout>
        <ChangePassword />
      </MainLayout>
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
