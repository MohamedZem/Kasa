import starActive from '../../assets/star-active.svg';
import starInactive from '../../assets/star-inactive.svg';


function Rating({ rating }) {
  const totalStars = 5;

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <img
          key={index}
          src={index < rating ? starActive : starInactive}
          alt="étoile"
          className="rating__star"
        />
      ))}
    </div>
  );
}

export default Rating;