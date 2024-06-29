function Card(props) {
  const { titleTex, descText } = props;
  return (
    <div className="card">
      <h3 className="card-title">{titleTex}</h3>
      <p className="card-footer">{descText}</p>
    </div>
  );
}

export default Card;
