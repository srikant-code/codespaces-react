const Heading = ({ children, size = 1 }) => {
  if (size === 1) return <h1>{children}</h1>;
  else if (size === 2) return <h2>{children}</h2>;
  else if (size === 3) return <h3>{children}</h3>;
  else if (size === 4) return <h4>{children}</h4>;
  else if (size === 5) return <h5>{children}</h5>;
  else if (size === 6) return <h6>{children}</h6>;
};

export default Heading;
