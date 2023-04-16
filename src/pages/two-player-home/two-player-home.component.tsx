import './two-player-home.styles.scss';

import React, { FC } from 'react';

import GlobalButton from '../../components/global-button/global-button.component';

const TwoPlayerHome: FC = () => {
  return (
    <div className='global-page-container'>
      <div className='two-player-home-container'>
        <div className='two-player-home-back-button'>
          <GlobalButton label='<- Back' route='/' />
        </div>
        <header className='two-player-home-header'>
          <h1 className='header-text'>2 Player</h1>
        </header>
        <div className='two-player-home-content'>
          {/* <TicTacToe /> */}
          <p>In Progress...</p>
        </div>
      </div>
    </div>
  );
};

export default TwoPlayerHome;
