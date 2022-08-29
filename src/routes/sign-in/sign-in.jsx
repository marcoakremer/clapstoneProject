import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/utils.firebase"
import SignUp from "../../components/sign-up/signup-component"


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
            <button onClick={UserLogWithGoogle}>SignIn With Google</button>
            <SignUp />
        </div>
    )
}

export default SignIn