import React from "react";
import * as Components from './LoginComponent';
import logo from '../../Assets/Garment-Industry.png';
import StyleSheet  from './stylelogin.css';
import { divide } from "lodash";
import { useHistory } from 'react-router-dom';





function Login() {
    const [signIn, toggle] = React.useState(true);
     return(
        <div class="login">
    
         <Components.Container>
             {/* <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' placeholder='Name' />
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Components.Button>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer> */}

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Anchor href='/overview'>Forgot your password?</Components.Anchor>
                      <Components.Button onClick='/overview'>Sign In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Apparel Management System</Components.Title>
                       <img src={logo} alt="Apparel Management System Logo" width={500}/>
              </Components.RightOverlayPanel>

             {/* <Components.OverlayContainer signinIn={signIn}>
                {/* <Components.Image></Components.Image> */}
                 {/*<Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Apparel Management System</Components.Title>
                   
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Apparel Management System</Components.Title>
                       
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sigin Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer> */}

         </Components.Container>
         </div>
     )
}

export default Login;