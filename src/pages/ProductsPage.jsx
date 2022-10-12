import Container from "../hoc/Container";
import Products from "../components/Products";
import { CartState } from "../context/CartContext";
import Filters from "../components/Filters";
import ScrollToTop from "../components/ScrollToTop";

const ProductsPage = () => {
  const {
    state: { products },
    prodState: { byPrice, inStock, byRating, searchQuery },
  } = CartState();

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
      <Filters />
      <Products data={transformProducts()} />
      <ScrollToTop />
    </Container>
  );
};

export default ProductsPage;
