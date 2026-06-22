import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4">Learning Management System</h1>

        <p className="lead mt-3">Learn, Teach and Grow with LMS</p>

        <div className="mt-4">
          <Link to="/courses" className="btn btn-primary me-3">
            Browse Courses
          </Link>

          <Link to="/login" className="btn btn-success me-3">
            Login
          </Link>

          <Link to="/register" className="btn btn-outline-primary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
