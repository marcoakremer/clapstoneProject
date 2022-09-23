import "./button.scss";

const buttonTypeClasses = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`button-container ${buttonTypeClasses[buttonType]}`}
    >
      {children}
    </button>
  );
};
export default Button;
