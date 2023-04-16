import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainMenu from './pages/main-menu/main-menu.component';
import SinglePlayerHome from './pages/single-player-home/single-player-home.component';
import TwoPlayerHome from './pages/two-player-home/two-player-home.component';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/single-player' element={<SinglePlayerHome />} />
        <Route path='/two-player' element={<TwoPlayerHome />} />
      </Routes>
    </Router>
  );
};

export default App;
