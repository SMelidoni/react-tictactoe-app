import './two-player-home.styles.scss';

import React, { FC } from 'react';

import GlobalButton from '../../components/global-button/global-button.component';
import MainGameScreen from '../../components/main-game-screen/main-game-screen.component';

const TwoPlayerHome: FC = () => {
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
        <div className='two-player-home-content'>
          <MainGameScreen />
        </div>
      </div>
    </div>
  );
};

export default TwoPlayerHome;
