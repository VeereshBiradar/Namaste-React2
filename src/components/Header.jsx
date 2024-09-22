import { Link } from "react-router-dom";
import { logo } from "../utils/constant";

const Header = () => {
  return (
    <header className="header">
     <Link to={'/'}> <img src={logo} alt="logo" className="header__logo" /></Link>
      <div className="marquee-container">
        <div className="marquee-text">Welcome to Namaste restaurant</div>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><Link to='/'>Home</Link></li>
          <li className="header__nav-item"><Link to='/about'>About</Link></li>
          <li className="header__nav-item"><Link to='/contact'>Contact</Link></li>
          <li className="header__nav-item">Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;