import Container from "../hoc/Container";
import Products from "../components/Products";
import { CartState } from "../context/CartContext";
import Row from "../hoc/Row";
import Filters from "../components/Filters";
import useIsMobile from "../hooks/useIsMobile";
import Col from "../hoc/Col";

const ProductsPage = () => {
  const {
    state: { products },
    prodState: { byPrice, byStock, byRating, searchQuery },
  } = CartState();
  const isMobile = useIsMobile();

  const transformProducts = () => {
    let sortedProducts = products;

    if (byStock) sortedProducts = products.filter((p) => p.inStock);
    sortedProducts = products.sort((a, b) =>
      byPrice ? a.price - b.price : b.price - a.price
    );
    if (byRating !== 0)
      sortedProducts = products.filter((p) => p.rating >= byRating);

    if (searchQuery !== "")
      sortedProducts = products.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return sortedProducts;
  };

  return (
    <Container>
      <Row flexWrap={isMobile ? "wrap" : "nowrap"}>
        <Col flex={1}>
          <Filters />
        </Col>
        <Col flex={3}>
          <Products data={transformProducts()} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsPage;
