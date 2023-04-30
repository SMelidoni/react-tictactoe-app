import React, { FC } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import MainMenu from './pages/main-menu/main-menu.component';
import SinglePlayerHome from './pages/single-player-home/single-player-home.component';
import TwoPlayerHome from './pages/two-player-home/two-player-home.component';

const App: FC = () => {
  const location = useLocation();

  return (
    <div className='global-page-container'>
      <div className='pixelated-grid'></div>
      <AnimatePresence mode='wait'>
        <motion.div
          key={location.key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ position: 'absolute', width: '100%' }}
          transition={{ duration: 0.25 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<MainMenu />} />
            <Route path='/single-player' element={<SinglePlayerHome />} />
            <Route path='/two-player' element={<TwoPlayerHome />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
