import React from "react";
import "../styles/AuthForm.css";

const Alert = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="alert">
      <span>{message}</span>
      <button onClick={onClose}>&times;</button>
    </div>
  );
};

export default Alert;