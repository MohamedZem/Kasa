
function Banner({ image, title, className = "" }) {
  return (
    <div className={`banner ${className}`}>
      <img src={image} alt={title} className="banner__image" />
      {title && <span className="banner__title">{title}</span>}
    </div>
  );
}

export default Banner;