import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import { USERCONTEXT } from "../utils/userContext";

const Header = () => {

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(USERCONTEXT)
  console.log("Header lOgged in user", loggedInUser)

  return (
    <header className="flex">
     <Link to={'/'}> <img src={logo} alt="logo" className="header__logo" /></Link>
      <div className="marquee-container">
        <div className="marquee-text">Welcome to Namaste restaurant</div>
      </div>
      <nav className="header__nav">
        <ul className="flex">
          <li className="header__nav-item"><Link to='/'>Home</Link></li>
          <li className="header__nav-item"><Link to='/about'>About</Link></li>
          <li className="header__nav-item"><Link to='/contact'>Contact</Link></li>
          <li className="header__nav-item"><Link to='/grocery'>Grocery</Link></li>
          <li className="header__nav-item">Cart</li>
          <li className="header__nav-item">Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
          <li> LoggedIn User: { loggedInUser }</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;