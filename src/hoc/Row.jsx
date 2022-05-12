const Row = ({
  children,
  align,
  gap,
  flex,
  justifyContent,
  flexWrap = "wrap",
  mt,
  mb,
  width = "100%",
  minHeight,
}) => {
  return (
    <div
      style={{
        alignItems: align,
        justifyContent: justifyContent,
        display: "flex",
        flexDirection: "row",
        flexWrap: flexWrap,
        flex: flex,
        gap: gap,
        // flexFlow: "row wrap", // both togueter flexdirection and flexwrap
        marginTop: mt,
        marginBottom: mb,
        minHeight: minHeight,
        width: width,
      }}
    >
      {children}
    </div>
  );
};
export default Row;
