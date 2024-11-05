import React, { useState } from "react";
import { useRouter } from "next/router";
import "../styles/AuthForm.css";
import Alert from "./Alert";

const AuthForm = ({ isSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignup ? "/api/auth/signup" : "/api/auth/signin";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    setAlertMessage(data.message);

    if (response.ok) {
      router.push("/");
    }
  };

  const closeAlert = () => setAlertMessage("");

  return (
    <div>
      <Alert message={alertMessage} onClose={closeAlert} />
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{isSignup ? "Sign Up" : "Sign In"}</h2>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignup ? "Sign Up" : "Sign In"}</button>
      </form>
    </div>
  );
};

export default AuthForm;
