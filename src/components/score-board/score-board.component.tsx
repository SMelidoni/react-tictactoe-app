import './score-board.styles.scss';

import React, { FC } from 'react';

interface ScoreBoardProps {
  xScore: number;
  oScore: number;
}

const ScoreBoard: FC<ScoreBoardProps> = ({ xScore, oScore }) => {
  return (
    <div className='score-board-wrapper'>
      <div className='score-board-container'>
        <div className='player-score'>
          <span className='player-label'>X</span>
          <span className='player-score-number'>{xScore}</span>
        </div>
        <div className='player-score'>
          <span className='player-label'>O</span>
          <span className='player-score-number'>{oScore}</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
