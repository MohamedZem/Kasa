import { useParams, Navigate } from 'react-router-dom';
import logements from '../../data/logements.json';

function Housing() {
  const { id } = useParams();

  // Trouver le logement correspondant à l'id
  const logement = logements.find((item) => item.id === id);

  // Si aucun logement trouvé → redirection vers 404
  if (!logement) {
    return <Navigate to="*" />; 
  }

  return (
    <div className="housing">
      {/* Image principale */}
      <img
        src={logement.cover}
        alt={logement.title}
        className="housing__image"
      />

      {/* Infos principales */}
      <div className="housing__header">
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          {/* Tags */}
          <div className="housing__tagd">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hote */}
        <div className="housing__host">
          <p>{logement.host.name}</p>
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="host__picture"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="housing__rating">
        {'★'.repeat(logement.rating)}
        {'☆'.repeat(5 - logement.rating)}
      </div>

    
        {/* Description */}
        <div>
          <h2>Description</h2>
          <p>{logement.description}</p>
        </div>

        {/* Équipements */}
        <div>
          <h2>Équipements</h2>
          <ul>
            {logement.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
  );
}

export default Housing;