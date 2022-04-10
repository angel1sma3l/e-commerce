const Container = ({
  children,
  align = "center",
  gap,
  justifyContent = "center",
  flexWrap = "wrap",
}) => {
  return (
    <div
      style={{
        alignItems: align,
        justifyContent: justifyContent,
        display: "flex",
        flexWrap: flexWrap,
        gap: gap,
        // flexFlow: "row wrap", // both togueter flexdirection and flexwrap
        marginTop: 0,
        marginBottom: 0,
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};
export default Container;
