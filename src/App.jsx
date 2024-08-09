import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import "./App.css";

let players = [
	"Cristiano Ronaldo",
	"Lionel Messi",
	"Neymar Jr",
	"Kylian Mbappé",
	"Mohamed Salah",
	"Robert Lewandowski",
	"Kevin De Bruyne",
	"Harry Kane",
	"Luka Modrić",
	"Sadio Mané",
	"Sergio Ramos",
	"Virgil van Dijk",
	"Alisson Becker",
	"Thibaut Courtois",
	"Joshua Kimmich",
	"Toni Kroos",
	"Manuel Neuer",
	"Karim Benzema",
	"Casemiro",
	"Eden Hazard",
];

function App() {
	const [cards, setCards] = useState([]);
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [clickedCards, setClickedCards] = useState([]);

	useEffect(() => {
		const fetchImages = async () => {
			const shuffledPlayers = players.sort(() => Math.random() - 0.5);
			const newCards = await Promise.all(
				shuffledPlayers.map(async (player, index) => {
					try {
						const response = await fetch(
							`https://api.giphy.com/v1/gifs/search?api_key=szycGqcB8rOlGlfCts7hY3OoH1CqEDxJ&q=${player}&limit=1`
						);
						const data = await response.json();
						const imageUrl = data.data[0]?.images?.original?.url || "";
						return {
							id: index,
							image: imageUrl,
							title: player,
						};
					} catch (error) {
						console.error("Error fetching image for", player, error);
						return {
							id: index,
							image: "",
							title: player,
						};
					}
				})
			);
			setCards(newCards);
		};

		fetchImages();
	}, []);

	const handleCardClick = (title) => {
		if (clickedCards.includes(title)) {
			// Card already clicked, reset score
			setScore(0);
			setClickedCards([]);
		} else {
			// Update score and best score
			const newScore = score + 1;
			setScore(newScore);
			setBestScore(Math.max(newScore, bestScore));

			// Add card to clickedCards array
			setClickedCards([...clickedCards, title]);

			// Reshuffle cards
			const shuffledCards = cards.sort(() => Math.random() - 0.5);
			setCards([...shuffledCards]);
		}
	};

	return (
		<>
			<Header score={score} bestScore={bestScore} />
			<List cards={cards} onCardClick={handleCardClick} />
		</>
	);
}

export default App;
