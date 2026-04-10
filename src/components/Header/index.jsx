import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'


function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="Kasa" />
        <h1 hidden>Kasa</h1>
      </NavLink>
      </div>
      <nav className="header__nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Accueil</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>À propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
