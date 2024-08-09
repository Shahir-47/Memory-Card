import "../styles/Header.css";

function Header({ score, bestScore }) {
	return (
		<header>
			<h1>Soccer Memory Game</h1>
			<div className="score-container">
				<p>Score: {score}</p>
				<p>Best Score: {bestScore}</p>
			</div>
		</header>
	);
}

export default Header;
