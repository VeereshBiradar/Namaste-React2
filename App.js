import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

const logo =
  "https://tse1.mm.bing.net/th?id=OIP.cW3WyikpXWjFbnw8BlmHigAAAA&pid=Api&P=0&h=180";

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

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <div className="restaurant-card__image-container">
        <img
          src="https://via.placeholder.com/150"
          alt=""
          className="restaurant-card__image"
        />
      </div>
      <div className="restaurant-card__info">
        <h3 className="restaurant-card__name">Namste Restaurant</h3>
        <p className="restaurant-card__cuisine">Cusine</p>
        <div className="restaurant-card__details">
          <span className="restaurant-card__rating">3.3 ★</span>
          <span className="restaurant-card__delivery-time">5.89 mins</span>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <main className="body">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search..."
          className="search-input__field"
        />
      </div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </main>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
