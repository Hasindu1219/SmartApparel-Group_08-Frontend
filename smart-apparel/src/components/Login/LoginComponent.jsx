import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(to top left, #ccffff 0%, #ffffff 100%);
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 1200px;
  max-width: 100%;
  min-height: 500px;
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${props => props.signinIn !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  ` 
  : null}
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 20px;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

export const ForgotPasswordContainer = styled.div`
  position: absolute;
  top: 20px;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${props => (props.ForgotPassword !== true ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
  background: linear-gradient(95deg, #003554, #004e89, #1a659e);
  padding: 70px;
  margin: 1.5rem auto 2rem auto;
  width: 65%;
  border-radius: 20px;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.3);
`;

export const FormBodyContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FormBox = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  /* gap: 2rem; */
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 5;
`;

export const Title1 = styled.h2`
  font-weight: bold;
  margin: 5;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #0f58f5;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  margin-top: 10px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 8px; /* Adjust as needed */
`;

export const ErrorMessage = ({ message }) => {
  return <ErrorText>{message}</ErrorText>;
};

export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
  margin: 30px;
`;

export const Anchor = styled.a`
  color: #ffff;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  background-image: url(./images/Garment-Industry.png);
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${props =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
  text-align: center;
  color: #C8C1BF;
  font-size: 20px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 35px 0 30px;
`;
