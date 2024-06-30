import Product from "./product";

function Products({ products }) {
  const product = products.map((product) => <Product key={product.id} product={product} />);
  
    return <div>{product}</div>;
}

export default Products;
