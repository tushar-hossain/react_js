export default function Product({ product }) {
  const { image, title, price, rating, desc, btn } = product;

  return (
    <div className="card">
      <div>
        <img className="image" src={image} />
        <div className="body">
          <h3 className="title">{title}</h3>
          <p>{price}</p>
          <p>{rating}</p>
          <p className="description">{desc}</p>
          <button>{btn}</button>
        </div>
      </div>
    </div>
  );
}
