import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "STUDENT",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register/", formData);

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Register</h2>

              <form onSubmit={handleSubmit}>
                <input
                  className="form-control mb-3"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                />

                <input
                  className="form-control mb-3"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />

                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />

                <input
                  className="form-control mb-3"
                  placeholder="Phone"
                  name="phone"
                  onChange={handleChange}
                />

                <select
                  className="form-control mb-3"
                  name="role"
                  onChange={handleChange}
                >
                  <option value="STUDENT">Student</option>

                  <option value="INSTRUCTOR">Instructor</option>
                </select>

                <button className="btn btn-success w-100" type="submit">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
