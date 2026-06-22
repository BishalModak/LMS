import { useState } from "react";

const ChangePassword = () => {

  const [formData, setFormData] =
    useState({
      old_password: "",
      new_password: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      console.log(formData);

      alert(
        "Connect API Here"
      );
  };

  return (
    <div className="container mt-4">

      <div className="card shadow">

        <div className="card-body">

          <h2>
            Change Password
          </h2>

          <form
            onSubmit={handleSubmit}
          >

            <div className="mb-3">

              <label>
                Old Password
              </label>

              <input
                type="password"
                name="old_password"
                className="form-control"
                onChange={handleChange}
              />

            </div>

            <div className="mb-3">

              <label>
                New Password
              </label>

              <input
                type="password"
                name="new_password"
                className="form-control"
                onChange={handleChange}
              />

            </div>

            <button
              className="btn btn-primary"
            >
              Change Password
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default ChangePassword;