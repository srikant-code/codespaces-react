export const Container = ({ children, style }) => {
  return (
    <div
      style={{
        padding: 10,
        margin: 4,
        ...style,
      }}>
      {children}
    </div>
  );
};
