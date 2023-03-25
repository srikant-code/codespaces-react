export const Row = ({ children, style }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        ...style,
      }}>
      {children}
    </div>
  );
};
