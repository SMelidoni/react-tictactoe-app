import './main-game-screen.styles.scss';

import React, { FC, useState, useCallback } from 'react';

import TicTacToe from '../tic-tac-toe/tic-tac-toe.component';

const MainGameScreen: FC = () => {
  // State to keep track of the current player's turn (X or O)
  const [isXNext, setIsXNext] = useState<boolean>(true);

  // State to store the popup message
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  // State to store the current round number
  const [round, setRound] = useState<number>(1);

  // Function to handle the display of popup messages
  const handlePopup = useCallback((message: string | null) => {
    setPopupMessage(message);
  }, []);

  const handleGameOver = useCallback(
    (winner: 'X' | 'O' | 'draw') => {
      console.log('Game Over. Winner:', winner);
      // Increment the round number
      setRound((prevRound) => prevRound + 1);
      setTimeout(() => {
        handlePopup(null);
      }, 3000);
    },
    [handlePopup],
  );

  return (
    <div className='main-game-screen-wrapper'>
      {popupMessage && <div className='popup'>{popupMessage}</div>}
      <div className='main-game-screen-container'>
        <header className='main-game-screen-header'>Round {round}</header>
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
