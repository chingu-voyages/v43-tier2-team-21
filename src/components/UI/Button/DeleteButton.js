const DeleteButton = (props) => {
  return (
    <button
      className="absolute right-10 top-4 cursor-pointer color-black hover:opacity-70"
      onClick={props.onClick}
      aria-label="Close modal"
    >
      <i className="fa-regular fa-circle-xmark"></i>
    </button>
  );
};

export default DeleteButton;
