# Word Connect Game

## Overview
The Word Connect game allows users to match groups of related words based on a configurable setup. It supports dynamic group sizes (e.g., 2, 3, or 4 words), item counts, and adjustable grid layouts. The game tracks user attempts and provides a reset functionality to start a new game.

## Features
- **Matching Logic**: 
  - Correct matches: Words turn green and disappear.
  - Incorrect matches: Words turn red and remain visible.
  
- **Tracking Attempts**: Displays the total number of user attempts dynamically.
  
- **Reset Button**: Resets the board, attempts, and reinitializes the game.
  
- **Config Settings Panel**:
  - **Group Size**: Select the number of words per group (e.g., 2, 3, or more).
  - **Item Count**: Define the total number of items to match (e.g., 8, 12, 16).
  - **Number of Columns**: Customize the grid layout by setting the number of columns.

- **Dynamic Grid Layout**: Adjusts the grid layout based on the number of columns specified.

- **React Best Practices**: 
  - Uses React functional components with hooks (e.g., `useState`, `useEffect`).
  - Follows component-based design for modularity.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Viswabhi/Word_Connect.git
    cd word-connect-game
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the app:

    ```bash
    npm start
    ```

   This will start the app in development mode. Open `http://localhost:3000` to view it in the browser.

## Project Structure

- `src/`
  - `App.jsx`: Main app component, contains the logic for word matching, tracking attempts, and handling reset.
  - `components/`
    - `WordGrid.jsx`: Handles the display of the grid, word matching, and styles.
    - `ConfigPanel.jsx`: Configures settings like group size, item count, and columns.
  - `data/connectedWords.js`: Contains the predefined word pairs for 2, 3, and 4 words.
  - `App.css`: Contains styling for the app.
  
## How to Play
1. Click on related words that form a group (e.g., a country and its capital city, or items in a category).
2. Correct matches will disappear and turn green.
3. Incorrect matches will remain visible and turn red.
4. Keep track of your attempts at the bottom of the screen.
5. Click the "Reset" button to start a new game.

## Customization
- **Group Size**: Customize the number of words in a group (2, 3, or 4 words).
- **Item Count**: Set the number of items you want to match (e.g., 8, 12, or 16).
- **Grid Layout**: Choose the number of columns to display in the grid.

## Technologies Used
- React
- JavaScript (ES6)
- CSS

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Create a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy the game and have fun connecting words!
