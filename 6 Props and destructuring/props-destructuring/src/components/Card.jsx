function Card(props) {
  const { titleTex, descTex } = props;
  return (
    <div>
      <div className="card">
        <h3 className="card-title">{titleTex}</h3>
        <p className="card-footer">{descTex}</p>
      </div>
    </div>
  );
}

export default Card;
