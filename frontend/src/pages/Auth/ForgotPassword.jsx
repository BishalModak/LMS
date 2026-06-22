import { useState } from "react";

import {
  forgotPassword
}
from "../../services/authService";

const ForgotPassword = () => {

  const [email, setEmail] =
    useState("");

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const data =
          await forgotPassword({
            email
          });

        alert(
          `Token: ${data.token}`
        );

      } catch (error) {

        console.log(error);

      }
  };

  return (
    <div className="container mt-5">

      <h2>
        Forgot Password
      </h2>

      <form
        onSubmit={handleSubmit}
      >

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <button
          className="btn btn-primary"
        >
          Generate Token
        </button>

      </form>

    </div>
  );
};

export default ForgotPassword;