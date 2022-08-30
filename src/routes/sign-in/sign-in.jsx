import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/utils.firebase"
import SignUp from "../../components/sign-up/signup-component"
 import Button from "../../components/button/component.button"

const SignIn = () => {
    const UserLogWithGoogle = async () => {
        try {
            const {user} = await signInWithGooglePopup()
            const userDocRef = await createUserDocumentFromAuth(user)
        } catch (err) {
            console.log(err.code);
        }
    }
    return (
        <div>
            <h1>signin page</h1>
            <Button buttonType='google' onClick={UserLogWithGoogle}>Sign in with Google</Button>
            <SignUp />
        </div>
    )
}

export default SignIn