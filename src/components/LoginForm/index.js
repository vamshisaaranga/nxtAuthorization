/* eslint-disable react/no-unused-state */
// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginFrom extends Component {
  state = {userName: '', password: ''}

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeUsername = event => {
    this.setState({userName: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    console.log(userDetails)
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
  }

  render() {
    const {userName, password} = this.state
    return (
      <div className="loginPageContainer">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="websiteLogin"
          />
        </div>
        <form className="loginFormContainer" onClick={this.submitForm}>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="websiteLogo"
            />
          </div>
          <label htmlFor="userNameInput" className="userNameLabel">
            USERNAME
          </label>
          <br />
          <input
            id="userNameInput"
            type="text"
            value={userName}
            className="userNameInput"
            onChange={this.changeUsername}
          />
          <br />
          <label htmlFor="passwordInput" className="passwordLabel">
            PASSWORD
          </label>
          <br />
          <input
            id="passwordInput"
            type="password"
            className="passwordInput"
            value={password}
            onChange={this.changePassword}
          />
          <br />
          <button type="button" className="loginButton">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginFrom
