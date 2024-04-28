import React, { useState } from "react";
import * as Components from "../../components/Login/LoginComponent";
import logo from "../../Assets/Garment-Industry.png";
import "./stylelogin.css"; // Assuming stylelogin.css contains the necessary styles
import { Link, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com"; // Import EmailJS library

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isValiedPerson, setIsValiedPerson] = useState(false);

  const validateEmail = () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsValidEmail(isValid);
    if (!isValid) {
      alert("Please enter a valid email address.");
    }
  };

  const generateOTP = () => {
    const randomOTP = Math.floor(100000 + Math.random() * 900000);
    setOtp(randomOTP.toString());
    return randomOTP;
  };

  const ValiedPerson = async () => {
    try {
      const response = await fetch("http://localhost:8080/employee/view");
      const data = await response.json();
      const employee = data.content.find(
        (employee) => employee.email === email
      );
      setIsValiedPerson(!!employee); // Check if user exists
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  };

  const sendOTP = () => {
    if (!isValidEmail) {
      alert("Please enter a valid email address before sending OTP.");
      return;
    }

    ValiedPerson(); // Check if the email is valid

    if (isValiedPerson) {
      const randomOTP = generateOTP(); // Generate OTP

      emailjs
        .send(
          "service_v4ergee", // Your EmailJS service ID
          "template_i8h5zti", // Your EmailJS template ID
          {
            to_email: email,
            message: `You recently requested to reset your password for Smart Apparel International(PVT)LTD. Please use the following OTP (One-Time Password) to reset your password:
            
            OTP: ${randomOTP}

            If you didn't request this, you can safely ignore this email. Your account is secure.
            Please note that this OTP is valid for a limited time period only. Do not share this OTP with anyone for security reasons.`,
          },
          "Cjas4KXTuyo3EXwTS" // Your EmailJS user ID
        )
        .then(
          (response) => {
            alert("OTP sent successfully");
            console.log("Email sent successfully:", response);
            setOtpSent(true);
          },
          (error) => {
            console.error("Email send error:", error);
            alert("Failed to send OTP. Please try again.");
          }
        );
    }
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
            <Components.Anchor
              onClick={sendOTP}
              disabled={!isValidEmail || otpSent}
            >
              Send Code
            </Components.Anchor>
            {otpSent && (
              <Components.Input type="password" placeholder="OTP" value={otp} />
            )}
            {otpSent && (
              <Link to="/overview">
                <Components.Button>Submit</Components.Button>
              </Link>
            )}
            <Components.Anchor href="/login">Back to Login</Components.Anchor>
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
