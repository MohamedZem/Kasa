import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner.jsx';
import banner from '../../assets/banner-about.jpg';
import Collapsible from '../../components/Collapse/index.jsx';

function About() {
  return (
    <div className="about">
      <Banner
        image={banner}
        title=""
      />
      
      <div className="about__collapsibles">
        <Collapsible
          title="Fiabilité"
          content={
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes 
          aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes</p>}
          as="h3"
        />

        <Collapsible
          title="Respect"
          content={
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire 
          ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
          as="h3"
        />

        <Collapsible
          title="Service"
          content={
            <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque 
          interaction, que ce soit avec nos hôtes ou nos voyageurs, soit empreinte de respect et de bienveillance.</p>}
          as="h3"
        />

        <Collapsible
          
          title="Sécurité"
          content= {<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
          chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note 
          aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
          Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.  </p>}
          as="h3"
        />
      </div>

    </div>
  );
}

export default About;