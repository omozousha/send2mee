import React, { useState, useEffect } from 'react';
import './LoveStory.css';
import Title from '../components/Title';

const LoveStory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const stories = [
    "Our Love Story",
    "Pertemuan kami diawali di 9 September 2019 dimana awal pertama kali bertemu dan berkenalan disebuah kantor.",
    "Setelah berkenalan dan pendekatan, opan mengungkapkan perasaannya di 19 Januari 2020.",
    "Banyak suka duka yang kami lewati selama kami menjalin hubungan dan semuanya bukan hal yang mudah sampai akhirnya pada tanggal 19 May 2023 kemarin kami memutuskan untuk hubungan lebih serius."
    // Add more parts of the story as needed
  ];

  useEffect(() => {
    // Animation logic for fade in
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((element, index) => {
      const delay = index * 300; // Adjust the delay as needed
      setTimeout(() => {
        element.classList.add('fade-in-visible');
      }, delay);
    });
  }, [currentPage]);

  const renderStoryPart = (part) => (
    <div key={part} className="fade-in">
      <p>{part}</p>
    </div>
  );

  const renderPagination = () => (
    <div className="pagination">
      <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
      <span>
        {currentPage === 1 ? '' : 
         currentPage === 2 ? 'Pertemuan' : 
         currentPage === 3 ? 'Ungkapan Perasaan' : 
         currentPage === 4 ? 'Momen Spesial' : 
         currentPage}
      </span>
      <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === stories.length}>Next</button>
    </div>
);

  return (
    <section id="lovestory"
    data-aos="zoom-in"
    data-aos-duration="1500">
      <Title title="Love Story" />
    <div className="love-story-card">
      <div className="story-section">
        {renderStoryPart(stories[currentPage - 1])}
      </div>
      {renderPagination()}
    </div>
    </section>
  );
};

export default LoveStory;