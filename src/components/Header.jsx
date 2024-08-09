import CardLogo from "../assets/card.svg";
import "../styles/Header.css";

function Header({ score, bestScore }) {
	return (
		<header>
			<div className="header-box">
				<img src={CardLogo} alt="Card Logo" />
				<h1>Soccer Memory Game</h1>
			</div>
			<div className="score-container">
				<p>Score: {score}</p>
				<p>Best Score: {bestScore}</p>
			</div>
		</header>
	);
}

export default Header;
