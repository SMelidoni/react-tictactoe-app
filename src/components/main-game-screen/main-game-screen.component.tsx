import './main-game-screen.styles.scss';

import React, { FC, useState, useCallback } from 'react';

import TicTacToe from '../tic-tac-toe/tic-tac-toe.component';

const MainGameScreen: FC = () => {
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [round, setRound] = useState<number>(1);

  const handlePopup = useCallback((message: string | null) => {
    setPopupMessage(message);
  }, []);

  const handleGameOver = useCallback(
    (winner: 'X' | 'O' | 'draw') => {
      console.log('Game Over. Winner:', winner);
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
