import { useEffect, useRef, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../../data/logements.json';
import Caroussel from '../../components/Caroussel/index.jsx'; 
import Rating from '../../components/Rating/index.jsx';
import Collapsible from '../../components/Collapse/index.jsx';

const MOBILE_BREAKPOINT = 768;

function Housing() {
  const { id } = useParams();
  const logement = logements.find(item => item.id === id);

  const descRef = useRef(null);
  const equipRef = useRef(null);
  const [sharedHeight, setSharedHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  
  const measureHeight = () => {
  const descHeight = descRef.current?.scrollHeight || 0;
  const equipHeight = equipRef.current?.scrollHeight || 0;

  setSharedHeight(Math.max(descHeight, equipHeight));
};

  useEffect(() => {
  const handleResize = () => {
    const desktop = window.innerWidth > 768;
    setIsDesktop(desktop);

    if (desktop) {
      requestAnimationFrame(measureHeight);
    } else {
      setSharedHeight(0);
    }
  };

  window.addEventListener("resize", handleResize);
  handleResize();

  return () => window.removeEventListener("resize", handleResize);
}, [id]);

  if (!logement) return <Navigate to="*" />;
  
  return (
    <div className="housing">

      <Caroussel pictures={logement.pictures} />
      
      <div className="housing__header">
        <div className='housing__header--left'>
          <div className='housing__content'>
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
          </div>
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
          as="h4"
          contentRef={descRef}
          forcedHeight={isDesktop ? sharedHeight : undefined}
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
          as="h4"
          contentRef={equipRef}
          forcedHeight={isDesktop ? sharedHeight : undefined}
        />
      </div>
    </div>
  );
}

export default Housing; 