import React, { useState, useEffect } from "react";
import * as Components from "../../components/Login/LoginComponent";
import logo from "../../Assets/Garment-Industry.png";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [Position, setPosition] = useState(""); // State to store user's position
  const navigate = useNavigate(); // Use useNavigate hook for navigation 

  // Function to handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Simulated API call (replace with actual fetch call)
      const response = await fetch("http://localhost:8080/employee/view");
      const data = await response.json();

      // Check if the email and password match any user in the JSON content
      const employee = data.content.find(
        (employee) => employee.email === email && employee.password === password
      );

      if (employee) {
        // Perform successful login actions
        console.log("Login successful!");
        setPosition(employee.position); // Save user's position
        setLoggedIn(true); // Set isLoggedIn state to true
      } else {
        // Display error if login credentials are invalid
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
      alert("Error occurred while logging in. Please try again later.");
    }
  };

  // Use useEffect to log the updated Position state and navigate accordingly
  useEffect(() => {
    console.log("Updated Position:", Position);
    if (Position === "admin") {
      navigate('/overview');
    }
  }, [Position, navigate]);

  return (
    <div className="login">
      <Components.Container>
        <Components.SignInContainer signinIn={true}>
          <Components.Form onSubmit={handleLogin}>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Components.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Components.Anchor href="/forgotpassword">
              Forgot your password?
            </Components.Anchor>
            <Components.Button type="submit">Sign In</Components.Button>
            {error && <p className="error-message">{error}</p>}
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

export default Login;
