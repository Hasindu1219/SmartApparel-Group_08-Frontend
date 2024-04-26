import React, { useState } from "react";
import * as Components from "./LoginComponent";
import logo from "../../Assets/Garment-Industry.png";
import "./stylelogin.css"; // Assuming stylelogin.css contains the necessary styles
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState(""); // State for email input value
  const [isValidEmail, setIsValidEmail] = useState(false); // State to track email validation
  const [otpSent, setOtpSent] = useState(false); // State to track whether OTP has been sent

  const validateEmail = () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsValidEmail(isValid);
    if (!isValid) {
      alert("Please enter a valid email address.");
    }
    if (isValid && otpSent) {
      setOtpSent(false);
    }
  };

  const sendOTP = () => {
    if (!isValidEmail) {
      alert("Please enter a valid email address before sending OTP.");
      return;
    }
    // Simulating OTP sending (replace with actual OTP sending logic)
    console.log("Valid Email");
    setOtpSent(true);
  };

  return (
    <div className="login">
      <Components.Container>
        <Components.SignInContainer>
          <Components.Form>
            <Components.Title1>Forgot Password</Components.Title1>
            <Components.Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
            {!isValidEmail && email && (
              <Components.ErrorMessage>
                Please enter a valid email address
              </Components.ErrorMessage>
            )}
            <Components.Anchor onClick={sendOTP} disabled={!isValidEmail || otpSent}>
              Send Code
            </Components.Anchor>
            {otpSent && (
              <Components.Input type="password" placeholder="OTP" />
            )}
            {otpSent && ( // Render submit button only if OTP is sent
              <Link to="/overview">
                <Components.Button>Submit</Components.Button>
              </Link>
            )}
            <Components.Anchor href="/login">
              Back to Login
            </Components.Anchor>
          </Components.Form>
        </Components.SignInContainer>

        <Components.LeftOverlayPanel>
          <Components.Title>Apparel Management System</Components.Title>
          <img src={logo} alt="Apparel Management System Logo" width={500} />
        </Components.LeftOverlayPanel>
      </Components.Container>
    </div>
  );
}

export default ForgotPassword;
