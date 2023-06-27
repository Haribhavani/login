// Write your JS code here

import './index.css'

const Header = () => (
  <nav className="nav-con">
    <div className="nav-content">
      <div className="navbar-mobile-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt=" website logo"
          className="logo"
        />

        <button type="button" className="logout-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout"
          />
        </button>
      </div>
      <div className="large-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo"
        />
        <ul className="nav-items">
          <li className="para">Home</li>
          <li className="para">Products</li>
          <li className="para">Cart</li>
        </ul>
        <button type="button" className="button">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-menu-mobile-con">
      <ul className="nav-items">
        <li className="nav-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav"
          />
        </li>
        <li className="nav-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="nav"
          />
        </li>
        <li className="nav-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav"
          />
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
