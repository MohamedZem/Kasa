import logements from '../../data/logements.json';
import Banner from '../../components/Banner/Banner.jsx';
import Card from '../../components/Card/Card.jsx';
import '../../components/Card/Card.scss';
import banner from '../../assets/banner-home.jpg';

function Home() {
  return (
    <div className="home">
      <Banner
        image={banner}
        title="Chez vous, partout et ailleurs"
      />

      <div className="home__card">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
}

export default Home;