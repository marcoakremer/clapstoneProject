import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/utils.firebase";
import SignUp from "../../components/sign-up/signup-component";
import Button from "../../components/button/component.button";
import SignIn from "../../components/sign-in/sign-in";
import "./auth.scss";

const Auth = () => {
  return (
    <div className="auth-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
