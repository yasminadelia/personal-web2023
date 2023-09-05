const ButtonSys = ({ onClick, className, children, bgColor }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-full border-b-2 border-r-2 border-transparent
      bg-transparent text-center text-lg 
      transition duration-300 ease-in-out 
      hover:scale-110 
      hover:border-b-black hover:border-r-black
      `}
    >
      <div
        className={`rounded-full border py-1 px-2 
        ${bgColor ? bgColor : "bg-theme1"}`}
      >
        {children}
      </div>
    </button>
  );
};

export { ButtonSys };
