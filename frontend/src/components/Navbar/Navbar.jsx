import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          LMS
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto align-items-center">
            {/* Public Menu */}

            <Link className="nav-link" to="/courses">
              Courses
            </Link>

            {!user ? (
              <>
                <Link className="nav-link" to="/login">
                  Login
                </Link>

                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </>
            ) : (
              <>
                {/* Admin Menu */}

                {user.role === "ADMIN" && (
                  <>
                    <Link className="nav-link" to="/admin-dashboard">
                      Dashboard
                    </Link>
                    <Link className="nav-link" to="/categories">
                      Categories
                    </Link>
                  </>
                )}

                {/* Instructor Menu */}

                {user.role === "INSTRUCTOR" && (
                  <>
                    <Link className="nav-link" to="/instructor-dashboard">
                      Dashboard
                    </Link>

                    <Link className="nav-link" to="/create-course">
                      Create Course
                    </Link>
                    <Link className="nav-link" to="/change-password">
                      Change Password
                    </Link>
                  </>
                )}

                {/* Student Menu */}

                {user.role === "STUDENT" && (
                  <>
                    <Link className="nav-link" to="/student-dashboard">
                      Dashboard
                    </Link>
                    <Link className="nav-link" to="/change-password">
                      Change Password
                    </Link>
                  </>
                )}

                {/* Common Menu */}

                {user?.role === "INSTRUCTOR" && (
                  <Link className="nav-link" to="/instructor-courses">
                    My Courses
                  </Link>
                )}

                {user?.role === "STUDENT" && (
                  <Link className="nav-link" to="/my-courses">
                    My Courses
                  </Link>
                )}

                <Link className="nav-link" to="/profile">
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="btn btn-danger btn-sm ms-3"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
