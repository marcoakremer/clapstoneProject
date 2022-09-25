import "./button.scss";

const buttonTypeClasses = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType, onClick, to }) => {
  return (
    <button
      onClick={onClick}
      to={to}
      className={`button-container ${buttonTypeClasses[buttonType]}`}
    >
      {children}
    </button>
  );
};
export default Button;
