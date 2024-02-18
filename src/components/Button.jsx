function Button({ value, className, onButtonClick }) {
  return (
    <>
      <button
        className={`col-span-1 p-3 border-2 border-black ${className}`}
        onClick={(e) => {
          onButtonClick && onButtonClick(value);
        }}
      >
        {value}
      </button>
    </>
  );
}

export default Button;
