function Card(props) {
  const { titleTex, desctext } = props;
  return (
    <div className="card">
      <h3 className="card-title">{titleTex}</h3>
      <p className="card-footer">{desctext}</p>
    </div>
  );
}

export default Card;
