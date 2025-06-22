import "./Card.css";

const Card = ({ value, text, color }) => {
  return (
    <div style={{ background: color }} className="card-container">
      <div className="card-value">{value}</div>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;

//
