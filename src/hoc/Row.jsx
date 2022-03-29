const Row = ({
  children,
  align,
  gap,
  flex,
  justifyContent,
  flexWrap = "wrap",
  verticalMargin = 0,
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
        marginTop: verticalMargin,
        marginBottom: verticalMargin,
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};
export default Row;
