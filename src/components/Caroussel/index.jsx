import { useState } from 'react';

function Caroussel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="caroussel">
      
      {/* Image */}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="caroussel__image"
      />

      {/* Arrow */}
      {pictures.length > 1 && (
        <>
          <button className="caroussel__arrow left" onClick={prevSlide}>
            {"<"}
          </button>

          <button className="caroussel__arrow right" onClick={nextSlide}>
            {">"}
          </button>
        </>
      )}

      {/* Counter */}
      {pictures.length > 1 && (
        <div className="caroussel__counter">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
}

export default Caroussel;