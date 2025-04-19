
const CustomButton = ({
  text = "Click",
  outline = true,
  color = "#fff",
  borderColor = "#999",
}) => {
  return (
    <button
      className="custom-button"
      style={{
        backgroundColor: outline ? "transparent" : color,
        color: outline ? color : "#ffffff",
        border: `1px solid ${borderColor}`,
        padding: "11px 16px",
        fontSize: "14px",
        cursor: "pointer",
        borderRadius: "4px",
      }}
    >
      {text}
    </button>
  );
};

export default CustomButton;