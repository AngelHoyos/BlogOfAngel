import React, { useState } from 'react';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { ContentJson } from '../../ContentJs/ContentNews';

export const Footer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalNews = ContentJson.length;
  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalNews);
  };
  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalNews) % totalNews);
  };

  return (
    <footer className='flex flex-row h-4/5 w-full justify-between my-12 items-center bg-black'>
      <div className='flex-grow flex items-center justify-center h-full'>
        <GoChevronLeft color='white' size={30} onClick={prev} className="z-10 cursor-pointer"  />
        <div
          className='h-full w-full bg-cover bg-center flex items-end '
          style={{ backgroundImage: `url(${ContentJson[currentIndex].ImageNews})` }}
        >
          <div className="text-white p-4 bg-black bg-opacity-60 w-full flex justify-center">
            <h2 className="font-bold">{ContentJson[currentIndex].titleNews}</h2>
          </div>
        </div>
      </div>
        <GoChevronRight color='white' size={30} onClick={next} className="z-10 cursor-pointer" />

    </footer>
  );
}
