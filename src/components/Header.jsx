import { logo } from "../utils/constant";

const Header = () => {
    return (
      <header className="header">
        <img src={logo} alt="logo" className="header__logo" />
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