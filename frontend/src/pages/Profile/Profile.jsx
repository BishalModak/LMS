import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../../services/authService";

const Profile = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getProfile();

      setFormData({
        username: data.username || "",
        email: data.email || "",
        phone: data.phone || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(formData);

      alert("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="mb-4">My Profile</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Username</label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label>Phone</label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <button className="btn btn-primary">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
