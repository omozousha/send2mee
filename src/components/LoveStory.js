import React, { useState, useEffect } from 'react';
import './LoveStory.css';

const LoveStory = () => {
  const loveStoryChapters = [
    'Our Love Story',
    '#Pertemuan',
    'Pertemuan kami diawali di 9 September 2019 dimana awal pertama kali bertemu dan berkenalan disebuah kantor.',
    '#Ungkapan perasaan',
    'Setelah berkenalan dan pendekatan, opan mengungkapkan perasaannya di 19 Januari 2020.',
    '#Momen spesial',
    'Banyak suka duka yang kami lewati selama kami menjalin hubungan dan semuanya bukan hal yang mudah sampai akhirnya pada..',
    'tanggal 19 May 2023 kemarin kami memutuskan untuk hubungan lebih serius.'
  ];

  const [currentChapter, setCurrentChapter] = useState(0);

  useEffect(() => {
    updatePagination();
  }, [currentChapter]); // Run updatePagination whenever currentChapter changes

  const nextChapter = () => {
    if (currentChapter < loveStoryChapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
    } else {
      // Handle end of the story
    }
  };

  const updatePagination = () => {
    const loveStoryElement = document.getElementById('love-story');
    const paginationContainer = document.getElementById('pagination');

    if (loveStoryElement && paginationContainer) {
      loveStoryElement.style.opacity = 0;
      setTimeout(() => {
        loveStoryElement.innerHTML = loveStoryChapters[currentChapter];
        loveStoryElement.style.opacity = 1;
      }, 500);

      paginationContainer.innerHTML = '';
      for (let i = 0; i < loveStoryChapters.length; i++) {
        const dot = document.createElement('div');
        dot.className = `page-dot ${i === currentChapter ? 'active' : ''}`;
        dot.addEventListener('click', () => goToChapter(i));
        paginationContainer.appendChild(dot);
      }
    }
  };

  const goToChapter = (chapterIndex) => {
    setCurrentChapter(chapterIndex);
  };

  return (
    <div id="love-container">
      <div id="love-story">{loveStoryChapters[currentChapter]}</div>
      <div id="pagination"></div>
      <button id="next-btn" onClick={nextChapter}>
        Next
      </button>
    </div>
  );
};

export default LoveStory;