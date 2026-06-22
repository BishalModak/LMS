import { useState } from "react";

import {
  resetPassword
}
from "../../services/authService";

const ResetPassword = () => {

  const [formData, setFormData] =
    useState({
      email: "",
      token: "",
      password: "",
    });

  const handleChange =
    (e) => {

      setFormData({
        ...formData,
        [e.target.name]:
          e.target.value,
      });
  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await resetPassword(
          formData
        );

        alert(
          "Password Updated"
        );

      } catch (error) {

        console.log(error);

      }
  };

  return (
    <div className="container mt-5">

      <h2>
        Reset Password
      </h2>

      <form
        onSubmit={handleSubmit}
      >

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="text"
          name="token"
          placeholder="Token"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="New Password"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <button
          className="btn btn-success"
        >
          Reset Password
        </button>

      </form>

    </div>
  );
};

export default ResetPassword;