import '../main-menu/main-menu.styles.scss';

import React, { FC } from 'react';

import GlobalButton from '../../components/global-button/global-button.component';

const MainMenu: FC = () => {
  return (
    <div className='global-page-container'>
      <div className='main-menu-container'>
        <header className='main-menu-header'>React Tic-Tac-Toe App</header>
        <h1 className='main-menu-sub-header'>Main Menu</h1>
        <p>Select game mode:</p>
        <GlobalButton label='Single Player' route='/single-player' />
        <GlobalButton label='Two Player' route='/two-player' />
      </div>
    </div>
  );
};

export default MainMenu;
