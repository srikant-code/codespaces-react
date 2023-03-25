import { useState } from "react";
const Input = ({
  id,
  value = "",
  setValue,
  type = "text",
  divStyle = {
    padding: 10,
    margin: 10,
  },
  style = {
    padding: 10,
    outline: "none",
    border: "1px solid #ccc",
    borderRadius: 5,
  },
  onChange = () => console.log("Give a onchange handler"),
}) => {
  const [valueLocal, setValueLocal] = useState(value);
  return (
    <div style={divStyle}>
      <input
        type={type}
        id={id}
        style={style}
        value={valueLocal}
        onChange={(e) => {
          onChange(e);
          setValueLocal(e.target.value);
          if (setValue) setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
