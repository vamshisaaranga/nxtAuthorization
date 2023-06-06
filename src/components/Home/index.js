/* eslint-disable arrow-body-style */
// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="homePageContainer">
        <div>
          <h1 className="homeHeading">Clothes That Get You Noticed</h1>
          <div className="homeImageSmContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="homeImageSm"
            />
          </div>
          <p className="homeDescription">
            Fashion is part of daily air and it does not quiet help that it
            changes every time. Clothes have always marker of the era and we are
            in a revolution Your fashion makes you been seen and heard that way
            you are. So celebrating seasons new and exciting fashion in your own
            way
          </p>
          <div className="homeButtonContainer">
            <button type="button" className="shopNowButton">
              Shop Now
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="homeImageLg"
          />
        </div>
      </div>
    </>
  )
}

export default Home
