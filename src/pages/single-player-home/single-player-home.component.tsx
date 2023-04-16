import './single-player-home.styles.scss';

import React, { FC } from 'react';

import GlobalButton from '../../components/global-button/global-button.component';

const SinglePlayerHome: FC = () => {
  return (
    <div className='global-page-container'>
      <div className='single-player-home-container'>
        <div className='single-player-home-back-button'>
          <GlobalButton label='<- Back' route='/' />
        </div>
        <header className='single-player-home-header'>
          <h1 className='single-player-header-text'>Single Player</h1>
        </header>
        <div className='single-player-home-content'>
          {/* <TicTacToe /> */}
          <p>Coming Soon...</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayerHome;
