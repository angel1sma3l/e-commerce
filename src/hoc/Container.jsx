const Container = ({
  children,
  align = "center",
  gap,
  justifyContent,
  flexWrap,
}) => {
  return (
    <div
      style={{
        alignItems: align,
        justifyContent: justifyContent,
        display: "flex",
        flexDirection: "column",
        flexWrap: flexWrap,
        gap: gap,
        // flexFlow: "row wrap", // both togueter flexdirection and flexwrap
        margin: 0,
        width: "100vw",
        overflow: "hidden",
        minHeight: "100vh",
        scrollSnapType: "y madatory",
      }}
    >
      {children}
    </div>
  );
};
export default Container;
