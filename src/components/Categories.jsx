import CategoryItem from "./CategoryItem";

const Categories = ({ data }) => {
  return (
    <>
      <h1>Categories</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          paddingTop: 50,
          paddingBottom: 50,
          justifyContent: "space-between",
          alignItems: "center",
          // backgroundColor: "var(--background)",
          overflow: "scroll",
          transition: "all 1.5s ease",
        }}
      >
        {data.map((item) => (
          <div key={item.id}>
            <CategoryItem item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
