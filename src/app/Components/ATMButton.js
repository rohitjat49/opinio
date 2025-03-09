const ATMButton = ({ text, color }) => {
    return (
      <button
        className={`w-[120px] h-[40px] rounded-[12px] text-[16px] font-medium flex items-center justify-center
          ${color === "blue" ? "bg-[#3A82F7] text-white" : "bg-[#E53835] text-white"}
        `}
        style={{
          boxShadow: "0px -2px 3.1px rgba(119, 119, 119, 0.5)", // Proper Grey Shadow
        }}
      >
        {text}
      </button>
    );
  };
  
  export default ATMButton;
  