import './two-player-home.styles.scss';

import React, { FC, useState } from 'react';

import GlobalButton from '../../components/global-button/global-button.component';
import MainGameScreen from '../../components/main-game-screen/main-game-screen.component';
import ScoreBoard from '../../components/score-board/score-board.component';

const TwoPlayerHome: FC = () => {
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  const updateScores = (winner: 'X' | 'O' | 'draw') => {
    if (winner === 'X') {
      setXScore((prevXScore) => prevXScore + 1);
    } else if (winner === 'O') {
      setOScore((prevOScore) => prevOScore + 1);
    }
  };

  return (
    <div className='global-page-container'>
      <div className='pixelated-grid'></div>
      <div className='two-player-home-container'>
        <div className='two-player-home-back-button'>
          <GlobalButton label='<- Back' route='/' />
        </div>
        <header className='two-player-home-header'>
          <h1 className='header-text'>2 Player</h1>
        </header>
        <div>
          <ScoreBoard xScore={xScore} oScore={oScore} />
        </div>
        <div className='two-player-home-content'>
          <MainGameScreen updateScores={updateScores} />
        </div>
      </div>
    </div>
  );
};

export default TwoPlayerHome;
