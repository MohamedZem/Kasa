
function Banner({ image, title, className = "" }) {
  return (
    <div className={`banner ${className}`}>
      <img src={image} alt={title} className="banner__image" />
      {title && <h2 className="banner__title">{title}</h2>}
    </div>
  );
}

export default Banner;