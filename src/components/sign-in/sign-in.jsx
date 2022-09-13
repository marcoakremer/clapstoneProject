import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/utils.firebase";

import FormInput from "../form-input/component.form-input";
import Button from "../button/component.button";
import "./sign-in.scss";

const State = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [values, setValues] = useState(State);
  const { email, password } = values;

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const res = await createUserDocumentFromAuth(user);
      console.log(res);
    } catch (err) {
      console.log(err.code);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await signInUserWithEmailAndPassword(email, password);
      console.log(res);
    } catch (err) {
      if (err.code === "auth/wrong-password") alert("wrong password");
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Have an account alreary?</h2>
      <span>Sign in right now!</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
        />
        <div className="btn-container">
          <Button type="submit">sign in</Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
