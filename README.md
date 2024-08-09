# Soccer Memory Game

![Soccer Memory Game](public/card.svg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Installation](#installation)
- [License](#license)

## Overview

[Soccer Memory Game](https://app.netlify.com/sites/soccermemorygame/overview) is a fun and interactive web application where users test their memory by clicking on cards featuring some of the most famous soccer players in the world. The objective is simple: click on as many cards as possible without clicking on the same card more than once. The game tracks your score and best score, providing an addictive challenge to beat your previous records.

The game fetches images of soccer players dynamically from the Giphy API, ensuring a unique experience each time you play. The cards reshuffle after every click, increasing the challenge of remembering which cards have already been clicked. The application is built with responsive design principles, making it accessible on different devices.

Play the game [here](https://app.netlify.com/sites/soccermemorygame/overview).

![Soccer Memory Game](public/screenshot.png)

## Features

- **Dynamic Card Images**: The game fetches images of soccer players dynamically from the Giphy API, ensuring a unique experience each time you play.
- **Score Tracking**: The game tracks your current score and the best score you have achieved, stored locally in your browser.
- **Responsive Design**: The application is built with responsive design principles, making it accessible on different devices.
- **Shuffling Mechanism**: The cards reshuffle after every click, increasing the challenge of remembering which cards have already been clicked.

## Project Structure

```plaintext
memory-card/
├── public/
│   └── card.svg
├── src/
│   ├── assets/
│   │   ├── card.svg
│   │   └── github.svg
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── List.jsx
│   ├── styles/
│   │   ├── Card.css
│   │   ├── Footer.css
│   │   ├── Header.css
│   │   └── List.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
|── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Technologies

- **React**: JavaScript library for building user interfaces.
- **Vite**: Build tool that provides a fast development server and optimized production build.
- **Giphy API**: API that provides access to a vast library of GIFs and stickers.
- **CSS**: Stylesheets for styling the application.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Shahir-47/Memory-Card.git
```

2. Navigate to the project directory:

```bash
cd memory-card
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the application in your browser:

```plaintext
http://localhost:5173/
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

```

```
