import  { useState } from "react";

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
}

function Dropdown({ label, options, onSelect }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null); // Track which option is hovered

  const handleSelect = (option: string) => {
    onSelect(option);
    setOpen(false);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          padding: "8px 12px",
          cursor: "pointer",
          background: "#fff",
          border: "none",
        }}
      >
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <div
            style={{
              textTransform: "uppercase",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            {label}
          </div>
          <div style={{ fontSize: "10px" }}>
            <img src="/arrowdown.png" width={16} height={16} />
          </div>
        </div>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            marginTop: "4px",
            minWidth: "150px",
            zIndex: 1,
            textTransform: "uppercase",
            fontSize: "10px",
            fontWeight: "500",
          }}
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              onMouseEnter={() => setHoveredOption(option)}
              onMouseLeave={() => setHoveredOption(null)}
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
                backgroundColor: hoveredOption === option ? "#f9f9f9" : "#fff",
                fontWeight: hoveredOption === option ? "bold" : "normal",
              }}
            >
              <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
                <div style={{marginTop:"3px"}}>
                  {" "}
                  {hoveredOption === option ? (
                    <img src="/material-symbols_check-small-rounded.png" width={12} height={12} />
                  ) : (
                    ""
                  )}
                </div>
                <div> {option}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
