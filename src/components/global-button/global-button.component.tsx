import './global-button.styles.scss';

import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface GlobalButtonProps {
  label: string;
  route: string;
}

const GlobalButton: FC<GlobalButtonProps> = ({ label, route }) => {
  const retroBackLabel = (
    <>
      <span className='global-button-arrow'>←</span>
      <span className='global-button-text'>Back</span>
    </>
  );

  return (
    <div className='global-button-container'>
      {route ? (
        <Link to={route} className='global-button'>
          {label === '<- Back' ? retroBackLabel : label}
        </Link>
      ) : (
        <div className='global-button'>
          {label === '<- Back' ? retroBackLabel : label}
        </div>
      )}
    </div>
  );
};

export default GlobalButton;
