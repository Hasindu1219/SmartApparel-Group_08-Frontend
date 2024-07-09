import React, { useState, useEffect } from "react";
import * as Components from "../../components/Login/LoginComponent";
import logo from "../../Assets/Garment-Industry.png";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigationimport Cookies from 'js-cookie'; // Import js-cookie for managing cookies


function ChangePassword() {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook for navigation 


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if passwords match
    if (password !== confirmpassword) {
      alert("Passwords do not match. Please enter matching passwords.");
      return;
    }

    // Perform any additional actions like updating the password in the backend or storing in cookies

    // Redirect to login page
    alert("Password Successfully Changed!");
    navigate('/login');
  };


  return (
    <div className="login">
      <Components.Container>
        <Components.SignInContainer signinIn={true}>
          <Components.Form >
            <Components.Title>Change Password</Components.Title>
            <Components.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Components.Input
              type="password"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Components.Button type="submit" onClick={handleSubmit}>Submit</Components.Button>
            <Components.Paragraph>
                <Components.Anchor href="/login">
                    Back to Login
                </Components.Anchor>
            </Components.Paragraph>
          </Components.Form>
        </Components.SignInContainer>
        <Components.RightOverlayPanel signinIn={true}>
          <Components.Title>Apparel Management System</Components.Title>
          <img src={logo} alt="Apparel Management System Logo" width={500} />
        </Components.RightOverlayPanel>
      </Components.Container>
    </div>
  );
}

export default ChangePassword;
