# Pig Game

This is a simple dice game built with HTML, CSS, and JavaScript.

> [!NOTE]
> This project is a web application developed as part of [The Complete JavaScript Course 2024: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/) course by Jonas Schmedtmann on Udemy.

# Description

The Pig Game allows two players to take turns rolling a virtual dice. The objective is to reach a score of 100 before the opponent. Each roll adds the rolled value to the current score, but rolling a 1 resets the current score of the player to zero and changes the turn to the opponent. Players can choose to hold their current score and switch turns, or keep rolling to potentially score higher but risk losing everything if 1 is rolled.

# Features

- **Two player support**: Each player has their own score and current score displayed.
- **Dice rolling and score calculation**: A single dice image is updated based on the rolled value, and the score is dynamically adjusted according to the rules.
- **Hold functionality**: Clicking the "Hold" button adds the current score to the player's total and switches turns.
- **Win detection**: If a player reaches 100, they are declared the winner, their section is highlighted, and the "Roll Dice" and "Hold" buttons become disabled.
- **New game functionality**: Clicking the "New Game" button resets all scores, turns, and winner highlights, allowing players to start a new round.

# Screenshot

[![Pig Game in action](screenshot.gif)](./screenshot.gif)

# Challenges Overcome

- **DOM Manipulation**: Effectively manipulated DOM elements to update scores, dice images, and winner highlights.
- **Event Handling**: Attached event listeners to buttons to trigger actions based on user interactions.
- **Modular Code Structure**: Divided the game logic into reusable functions for better organization and maintainability.

# Live Demo

Feel like rolling the dice yourself? Click here to try the Pig Game live!

[link to live demo](https://ahmedmohamedabdelaty.github.io/Pig-Game/)

# Areas for Improvement

- **Sound effects**: Adding sound effects for dice rolls and score updates could create a more immersive gameplay environment.
- **Difficulty levels**: Introducing adjustable difficulty levels with different winning scores or additional rules could cater to players of varying skill levels.
- **Multiplayer support**: Currently, the game only supports local two-player mode. Exploring online multiplayer functionality would significantly expand its reach and engagement.
