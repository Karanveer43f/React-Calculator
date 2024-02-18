function Button({ value, className, onButtonClick }) {
  function animateButton(e) {
    const button = e.target;
    button.classList.add("clicked"); // Add a class to trigger the animation
    setTimeout(() => {
      button.classList.remove("clicked"); // Remove the class after a short delay
    }, 300); // Adjust the delay as needed
  }
  let logo = null;
  if (value == "Result") logo = <i className="fa-solid fa-equals"></i>;
  else if (value == "/") logo = <i className="fa-solid fa-divide"></i>;
  else if (value == "*") logo = <i className="fa-solid fa-xmark"></i>;
  else if (value == "clear") logo = <i className="fa-solid fa-trash"></i>;
  else if (value == "Erase")
    logo = <i className="fa-solid fa-delete-left "></i>;
  return (
    <>
      <button
        className={`col-span-1 p-3 ${className}`}
        onClick={(e) => {
          onButtonClick && onButtonClick(value);
          animateButton(e);
        }}
      >
        {logo ? logo : value}
      </button>
    </>
  );
}

export default Button;
