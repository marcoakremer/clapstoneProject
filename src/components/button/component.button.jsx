
import './button.scss'


    const buttonTypeClasses = {
        google: 'google-sign-in',
        inverted: 'inverted'
    }
const Button = ({children, buttonType}) => {
    return (
        <button className={`button-container ${buttonTypeClasses[buttonType]}`}>{children}</button>
    )
}
export default Button