import "../styles/Card.css";

function Card({ image, title, onClick }) {
	return (
		<div className="card" onClick={onClick}>
			<img src={image} alt={title} />
			<h2>{title}</h2>
		</div>
	);
}

export default Card;
