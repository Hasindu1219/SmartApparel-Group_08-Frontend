import React from "react";
import * as Components from "./LoginComponent";
import logo from "../../Assets/Garment-Industry.png";
import { Link } from 'react-router-dom';

function Login() {
  const [signIn, toggle] = React.useState(true);
  return (
    <div class="login">
      <Components.Container>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Anchor href="/forgotpassword">
              Forgot your password?
            </Components.Anchor>
            <Link to="/overview">
              <Components.Button>Sign In</Components.Button>
            </Link>
          </Components.Form>
        </Components.SignInContainer>

        <Components.RightOverlayPanel signinIn={signIn}>
          <Components.Title>Apparel Management System</Components.Title>
          <img src={logo} alt="Apparel Management System Logo" width={500} />
        </Components.RightOverlayPanel>
        
      </Components.Container>
    </div>
  );
}

export default Login;
