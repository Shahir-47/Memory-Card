import Card from "./Card.jsx";
import "../styles/List.css";

function List({ cards, onCardClick }) {
	return (
		<div className="list">
			{cards.map((card) => (
				<Card
					key={card.id}
					image={card.image}
					title={card.title}
					onClick={() => onCardClick(card.title)}
				/>
			))}
		</div>
	);
}

export default List;
