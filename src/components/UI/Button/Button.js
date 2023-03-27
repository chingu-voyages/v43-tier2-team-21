const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`mx-2 p-3 rounded-md hover:opacity-80 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
