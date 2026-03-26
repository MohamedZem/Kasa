import logo from '../../assets/logo.svg'


function Footer() {
  const currentYear = new Date().getFullYear();
  
  return <footer className="footer">
    <img className="footer__logo" src={logo} alt="Kasa"/>
      <span className="footer__content">© {currentYear} Kasa. All rights reserved</span>
    </footer>;
}

export default Footer;