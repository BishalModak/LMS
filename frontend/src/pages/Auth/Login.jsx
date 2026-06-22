import { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await api.post("/auth/login/", formData);

      localStorage.setItem("access_token", loginResponse.data.access);

      localStorage.setItem("refresh_token", loginResponse.data.refresh);

      const profileResponse = await api.get("/auth/profile/");

      const user = profileResponse.data;

      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "ADMIN") {
        navigate("/admin-dashboard");
      } else if (user.role === "INSTRUCTOR") {
        navigate("/instructor-dashboard");
      } else {
        navigate("/student-dashboard");
      }
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>

              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>Username</label>

                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>

                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>

                <div className="mt-3 text-center">
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      className="btn btn-link p-0"
                      onClick={() => navigate("/register")}
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
                <div className="mt-3 text-center">
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
