/* eslint-disable arrow-body-style */
// Write your JS code here
import './index.css'

const Header = () => {
  return (
    <>
      <nav className="navContainerLg">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            alt="website logo"
            className="headerWebsiteLogo"
          />
        </div>
        <div className="navElements">
          <p className="navItems">Home</p>
          <p className="navItems">Products</p>
          <p className="navItems">Cart</p>
          <button type="button" className="logoutButton">
            Logout
          </button>
        </div>
      </nav>
      <nav className="navContainerSm">
        <div className="navAlignment">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="websiteLogoSm"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logOutImage"
          />
        </div>
        <div className="navigationContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="navHomeImage"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="navHomeImage"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
            alt="nav cart"
            className="navHomeImage"
          />
        </div>
      </nav>
    </>
  )
}

export default Header
