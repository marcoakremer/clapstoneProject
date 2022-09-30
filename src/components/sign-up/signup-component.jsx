import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/utils.firebase";

import FormInput from "../form-input/component.form-input";
import Button from "../button/component.button";
import "./signup.scss";
import { UserContext } from "../../context/context";

const State = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const { setCurrentUser } = useContext(UserContext);

  const [values, setValues] = useState(State);
  const { name, email, password, confirmPassword } = values;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const resetFormFields = () => {
    setValues(State);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      user.displayName = name;
      const userDocRef = await createUserDocumentFromAuth(user);
      setCurrentUser(user);
      resetFormFields();
    } else return;
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up right now!</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          required
          onChange={onChangeHandler}
          name="name"
          value={name}
        />

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

        <FormInput
          label="confirm password"
          type="password"
          required
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button onClick={handleSubmit} type="submit">
          submit
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
