import STRINGS from "../../utilities/constants";

export const Button = ({ children, style, ...props }) => {
  return (
    <button
      style={{
        // margin: 10,
        padding: 10,
        background: STRINGS.COLORS.WHITE,
        border: `1px solid ${STRINGS.COLORS.GREY}`,
        borderRadius: 5,
        cursor: "pointer",
        ...style,
      }}
      {...props}>
      {children}
    </button>
  );
};

export const DeleteButton = ({ ...props }) => {
  return (
    <Button
      children={"x"}
      style={{ borderRadius: 100, padding: 3, width: 25, height: 25 }}
      {...props}
    />
  );
};
