import { useState, useRef, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../../data/logements.json';
import Caroussel from '../../components/Caroussel/index.jsx'; 
import Rating from '../../components/Rating/index.jsx';
import Collapsible from '../../components/Collapse/index.jsx';


function Housing() {
  const { id } = useParams();
  const logement = logements.find(item => item.id === id);

  if (!logement) return <Navigate to="*" />;

  // refs des deux contenus
  const descRef = useRef(null);
  const equipRef = useRef(null);

  // hauteur commune
  const [sharedHeight, setSharedHeight] = useState(0);

  // recalcul après rendu
  useEffect(() => {
    const timeout = setTimeout(() => {
      const descHeight = descRef.current?.scrollHeight || 0;
      const equipHeight = equipRef.current?.scrollHeight || 0;
      const max = Math.max(descHeight, equipHeight);

      setSharedHeight(max);
    }, 100); // laisse le DOM se mettre à jour

    return () => clearTimeout(timeout);
  });

  return (
    <div className="housing">

      <Caroussel pictures={logement.pictures} />

      <div className="housing__header">
        <div className='housing__header--left'>
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>

          <div className="housing__tags">
            {logement.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="housing__header--right">
          <div className="housing__host">
            <p className='housing__host--name'>{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="housing__host--picture"
            />
          </div>
          <div className="housing__rating">
            <Rating rating={parseInt(logement.rating)} />
          </div>
        </div>
      </div>

      <div className="housing__collapsibles">
        <Collapsible
          title="Description"
          content={<p>{logement.description}</p>}
          as="h3"
          contentRef={descRef}
          forcedHeight={sharedHeight}
        />

        <Collapsible
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
          as="h3"
          contentRef={equipRef}
          forcedHeight={sharedHeight}
        />
      </div>
    </div>
  );
}

export default Housing;