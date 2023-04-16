import './main-game-screen.styles.scss';

import React, { FC } from 'react';

const MainGameScreen: FC = () => {
  return (
    <div className='main-game-screen-wrapper'>
      <div className='main-game-screen-container'>
        <header className='main-game-screen-header'>Round 1</header>
        <div className='main-game-screen-content'>
          <div className='player-turn'>
            <span className='tic-tac-toe-piece-x active'>X</span>
            <span className='tic-tac-toe-piece-o active'>O</span>
          </div>
          <div className='tic-tac-toe-board'>
            {[...Array(2)].map((_, index) => (
              <div
                key={`horizontal-${index}`}
                className='tic-tac-toe-grid-line horizontal'
                style={{ top: `${(index + 1) * 33.33}%` }}
              />
            ))}
            {[...Array(2)].map((_, index) => (
              <div
                key={`vertical-${index}`}
                className='tic-tac-toe-grid-line vertical'
                style={{ left: `${(index + 1) * 33.33}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainGameScreen;
