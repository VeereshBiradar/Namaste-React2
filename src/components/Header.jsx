import { logo } from "../utils/constant";

const Header = () => {
    return (
      <header className="header">
        <img src={logo} alt="logo" className="header__logo" />
        <div class="marquee-container">
        <div class="marquee-text">Welcome to Namaste restaurant</div>
    </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">Home</li>
            <li className="header__nav-item">About</li>
            <li className="header__nav-item">Contact</li>
            <li className="header__nav-item">Cart</li>
          </ul>
        </nav>
      </header>
    );
  };

export default Header;