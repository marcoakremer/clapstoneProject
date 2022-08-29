import { useState } from "react"

const State = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUp = () => {
    const [ values, setValues ] = useState(State)
    const { name, email, password, confirmPassword } = values
    
    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value})
    }

    return (
        <div>
            <h1>SignUP PAGE</h1>
            <form onSubmit={() => {} }>
                <label>Name</label>
                <input type='text' required onChange={onChangeHandler} name='name' value={name}/>

                <label>Email</label>
                <input type='email' required onChange={onChangeHandler} name='email' value={email}/>

                <label>Password</label>
                <input type='password' required onChange={onChangeHandler} name='password' value={password}/>

                <label>confirm password</label>
                <input type='password' required onChange={onChangeHandler} name='confirmPassword' value={confirmPassword}/>
                <button type="submit" >submit</button>
            </form>
        </div>
    )
}

export default SignUp