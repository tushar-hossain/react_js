function Product({ product }) {
  const { image, title, price, rating, description, button } = product;
  return (
    <div className="products">
      <div className="product">
        <img src={image} alt="images" />
        <div className="card-body">
          <h3>{title}</h3>
          <p className="price">{price}</p>
          <p className="rating">{rating}</p>
          <p>{description}</p>
          <p className="btn">{button}</p>
        </div>
      </div>
    </div>
  );
}
export default Product;
