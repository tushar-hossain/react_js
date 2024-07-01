import Product from "./Product";

function Products({ products }) {
  const product = products.map((product) => <Product key={product.id} product={product} />);

  return (
    <div>
      <h1 className="heading">BD Store</h1>
      <div className="main">{product}</div>
    </div>
  );
}

export default Products;
