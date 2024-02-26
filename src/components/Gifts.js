import React, { useState, useEffect } from 'react';
import './Gifts.css';
import hoverSound from './assets/hover-sound.mp3';


const Gifts = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuId) => {
    const menu = document.getElementById(menuId);
    const kartus = document.getElementById('kartus');

    if (activeMenu === menuId) {
      menu.classList.remove('active');
      setActiveMenu(null);
      kartus.style.maxWidth = '200px';
    } else {
      if (activeMenu) {
        document.getElementById(activeMenu).classList.remove('active');
      }

      menu.classList.add('active');
      kartus.style.maxWidth = '300px';
      setActiveMenu(menuId);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && activeMenu) {
        document.getElementById(activeMenu).classList.remove('active');
        setActiveMenu(null);
        document.getElementById('kartus').style.maxWidth = '200px';
      }
    };

    const handleClickOutside = (event) => {
      const isMenuClick =
        event.target.closest('.button') || event.target.closest('.info-container');

      if (!isMenuClick && activeMenu) {
        document.getElementById(activeMenu).classList.remove('active');
        setActiveMenu(null);
        document.getElementById('kartus').style.maxWidth = '200px';
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeMenu]);

  const salinNomorRekening = (nomorId) => {
    const nomorRekening = document.getElementById(nomorId);
    const copyButton = nomorRekening.nextElementSibling;

    const input = document.createElement('input');
    input.value = nomorRekening.innerText;
    document.body.appendChild(input);

    input.select();
    input.setSelectionRange(0, 99999);

    document.execCommand('copy');

    document.body.removeChild(input);

    copyButton.innerText = 'Copied';

    setTimeout(() => {
      copyButton.innerText = 'Copy';
    }, 2000);
  };

  const playHoverSound = () => {
    const hoverSoundAudio = new Audio(hoverSound);
    hoverSoundAudio.play().catch(error => console.log(error));
  };

  return (
    <div className="kartus" id="kartus">
      <img
        src="https://img.icons8.com/ios-filled/50/e83e8c/wedding-gift.png"
        alt="BCA Icon"
        className="gift-icon"
      />

      <button
        className="button type1"
        onClick={() => {toggleMenu('menu1'); playHoverSound();}}
      >
        <span className="btn-txt">Bank Mandiri</span>
      </button>
      <div id="menu1" className="info-container">
        <img
          src="https://cdn3.iconfinder.com/data/icons/banks-in-indonesia-logo-badge/100/Mandiri-512.png"
          alt="Mandiri Icon"
          className="bank-icon"
        />
        <h2 className="h2-class">Hot Tiopan Tampubolon</h2>
        <p id="nomorRekening 1">
          <span className='norek'>1250013844741</span>
        </p>
        <button
          className="copy-button"
          onClick={() => salinNomorRekening('nomorRekening 1')}
        >
          Copy
        </button>
      </div>

      <button
        className="button type1"
        onClick={() => toggleMenu('menu2')}
        onMouseOver={playHoverSound}
      >
        <span className="btn-txt">Bank BCA</span>
      </button>
      <div id="menu2" className="info-container">
        <img
          src="https://cdn3.iconfinder.com/data/icons/banks-in-indonesia-logo-badge/100/BCA-512.png"
          alt="BCA Icon"
          className="bank-icon"
        />
        <h2 className="h2-class">Jessica Berliana</h2>
        <p id="nomorRekening 2">
        <span className='norek'>64603266</span>
        </p>
        <button
          className="copy-button"
          onClick={() => salinNomorRekening('nomorRekening 2')}
        >
          Copy
        </button>
      </div>

      <audio id="hover-sound" src="" preload="auto"></audio>
    </div>
  );
};

export default Gifts;