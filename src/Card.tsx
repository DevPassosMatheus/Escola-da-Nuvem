import React, { useState } from 'react';

interface CardProps {
nome: string
sobre: string
foto?: string
}


export const Card = ({nome, sobre, foto}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
     
      <div
        className={`bg-white m-auto rounded-lg overflow-hidden shadow-md transform transition-transform duration-200 ${
          isHovered ? 'scale-105' : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <figure>
          <img src="/teste/jpg" alt="testando" className="w-full h-48 object-cover"/>
        </figure>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{nome}</h2>
          <p className="text-gray-600 text-sm">{sobre}</p>
          <a href="#" className="text-blue-500 hover:text-blue-700 mt-2 inline-block">
            Read more{' '}
            <span className="sr-only">about this is some title</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
 
  );
};

 
