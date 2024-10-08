import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

let players = [
	"Cristiano Ronaldo",
	"Lionel Messi",
	"Neymar Jr",
	"Kylian Mbappé",
	"Mohamed Salah",
	"Robert Lewandowski",
	"Kevin De Bruyne",
	"Luka Modrić",
	"Sergio Ramos",
	"Virgil van Dijk",
	"Toni Kroos",
	"Eden Hazard",
];

function App() {
	const [cards, setCards] = useState([]);
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [clickedCards, setClickedCards] = useState([]);

	// Load the best score from localStorage on component mount
	useEffect(() => {
		const savedBestScore = localStorage.getItem("bestScore");
		if (savedBestScore) {
			setBestScore(parseInt(savedBestScore, 10));
		}
	}, []);

	useEffect(() => {
		const fetchImages = async () => {
			const cachedCards = JSON.parse(localStorage.getItem("cards"));

			if (cachedCards) {
				setCards(cachedCards);
			} else {
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
				localStorage.setItem("cards", JSON.stringify(newCards));
			}
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

			// Check and update best score
			if (newScore > bestScore) {
				setBestScore(newScore);
				localStorage.setItem("bestScore", newScore);
			}

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
			<p style={{ color: "#c0b8ba", padding: "0 1rem" }}>
				Click on a card to earn points, but don&apos;t click on any card more
				than once!
			</p>
			<List cards={cards} onCardClick={handleCardClick} />
			<Footer />
		</>
	);
}

export default App;
