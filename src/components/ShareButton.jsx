import React, { useState } from 'react';
import copy from 'clipboard-copy';
import { useLocation } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

function ShareButton() {
  const { pathname } = useLocation();
  const [link, setLink] = useState(false);
  const handleClipboard = () => {
    copy(`http://localhost:3000${pathname}`);
    setLink(true);
    setTimeout(() => setLink(false), Number('1000'));
  };
  return (
    <>
      <input
        data-testid="share-btn"
        type="image"
        src={ shareIcon }
        alt="Share Recipe"
        style={ {
          aspectRatio: '1/1',
          width: '20px',
        } }
        onClick={ handleClipboard }
      />
      {link && <p>Link copied!</p>}
    </>
  );
}

export default ShareButton;
