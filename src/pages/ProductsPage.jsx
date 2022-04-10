import Container from "../hoc/Container";
import Products from "../components/Products";
import { CartState } from "../context/CartContext";
import Row from "../hoc/Row";
import Filters from "../components/Filters";
import useIsMobile from "../hooks/useIsMobile";
import Col from "../hoc/Col";
import ScrollToTop from "../components/ScrollToTop";

const ProductsPage = () => {
  const {
    state: { products },
    prodState: { byPrice, inStock, byRating, searchQuery },
  } = CartState();
  const isMobile = useIsMobile();

  const transformProducts = () => {
    let sortedProducts = products;

    sortedProducts = products.sort((a, b) =>
      byPrice ? a.price - b.price : b.price - a.price
    );

    if (byRating !== 0)
      sortedProducts = sortedProducts.filter((p) => p.rating >= byRating);

    if (inStock)
      sortedProducts = sortedProducts.filter((prod) => prod.inStock > 0);

    if (searchQuery !== "")
      sortedProducts = products.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return sortedProducts;
  };

  return (
    <Container>
      <Row>
        <Col flex={isMobile ? null : 1}>
          <div
            style={{
              // height: isMobile ? null : "100vh",
              position: isMobile ? "static" : "fixed",
            }}
          >
            <Filters />
          </div>
        </Col>
        <Col flex={3}>
          <Products data={transformProducts()} />
        </Col>
      </Row>
      <ScrollToTop />
    </Container>
  );
};

export default ProductsPage;
