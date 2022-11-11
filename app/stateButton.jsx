const StateButton = ({ children, up, down }) => {
  return (
    <div className="flex flex-row self-center gap-10 w-wide h-32   place-content-center relative text-4xl ">
      <button
        className=" w-16 h-16 shadow-sm shadow-slate-800 self-center absolute left-0"
        onClick={up}
      >
        {" "}
        +
      </button>
      {children}
      <button
        className="w-16 h-16 self-center absolute right-0 shadow-sm shadow-slate-800"
        onClick={down}
      >
        -
      </button>
    </div>
  );
};
export default StateButton;
