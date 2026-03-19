import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner.jsx';
import banner from '../../assets/banner-about.jpg';

function About() {
  return (
    <div className="about">
      <Banner
        image={banner}
        title=""
      />
      
      <div className="about__content">
        <div className="about__item">
          <h2 className="about__title">Fiabilité</h2>
          <p className="about__text">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </div>
        <div className="about__item">
          <h2 className="about__title">Respect</h2>
          <p className="about__text">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>
        <div className="about__item">
          <h2 className="about__title">Service</h2>
          <p className="about__text">Nos équipes se tiennent à votre disposition pour vous fournir </p>
        </div>
      </div>

    </div>
  );
}

export default About;