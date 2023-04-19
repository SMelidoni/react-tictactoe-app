import './main-game-screen.styles.scss';

import React, { FC, useState } from 'react';

import TicTacToe from '../tic-tac-toe/tic-tac-toe.component';

/*TO DO:
  - Add some sort of animation when selecting square (transform 'x' or 'o')
  - Add redux/local storage for storing scores
    - Add styling for scores
  - Add better animation for when three match
  - Add Reset Game button
  - Add Round [i] functionality (to track how many games played)
  - Comment code
*/

const MainGameScreen: FC = () => {
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const handleGameOver = (winner: 'X' | 'O' | 'draw') => {
    console.log('Game Over. Winner:', winner);
    setTimeout(() => {
      handlePopup(null);
    }, 3000);
  };

  const handlePopup = (message: string | null) => {
    setPopupMessage(message);
  };

  return (
    <div className='main-game-screen-wrapper'>
      {popupMessage && <div className='popup'>{popupMessage}</div>}
      <div className='main-game-screen-container'>
        <header className='main-game-screen-header'>Round 1</header>
        <div className='main-game-screen-content'>
          <div className='player-turn'>
            <span className={`tic-tac-toe-piece-x${isXNext ? ' active' : ''}`}>
              X
            </span>
            <span className={`tic-tac-toe-piece-o${!isXNext ? ' active' : ''}`}>
              O
            </span>
          </div>
          <TicTacToe
            onGameOver={handleGameOver}
            isXNext={isXNext}
            setIsXNext={setIsXNext}
            handlePopup={handlePopup}
          />
        </div>
      </div>
    </div>
  );
};

export default MainGameScreen;
