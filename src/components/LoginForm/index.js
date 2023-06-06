/* eslint-disable react/no-unused-state */
// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginFrom extends Component {
  state = {username: '', password: '', notValidUser: false, errorMsg: ''}

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const {history} = this.props
      history.replace('/')
      this.setState({notValidUser: false})
      this.setState({username: '', password: ''})
    } else {
      this.setState({notValidUser: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {userName, password, notValidUser, errorMsg} = this.state
    return (
      <div className="loginPageContainer">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="websiteLogin"
          />
        </div>
        <form className="loginFormContainer" onSubmit={this.submitForm}>
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
            placeholder="Username"
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
            placeholder="Password"
          />
          <br />
          <button type="submit" className="loginButton">
            Login
          </button>
          {notValidUser && <p className="errorMsg">{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginFrom
