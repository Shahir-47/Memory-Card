import github from "../assets/github.svg";
import "../styles/Footer.css";

function footer() {
	return (
		<footer className="footer">
			<div className="github">
				<img src={github} alt="GitHub Logo" />
				<a href="https://github.com/Shahir-47/">Shahir-47</a>
			</div>
			<span>|</span>
			<a href="https://github.com/Shahir-47/Memory-Card">Source Code</a>
		</footer>
	);
}

export default footer;
