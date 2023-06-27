// Write your JS code here
import Component from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errMsg: '', showErrMsg: false}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({showErrMsg: true, errMsg})
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

    console.log(data)
    console.log(response)

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="password"
          className="input-field"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsername = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="username"
          className="input-field"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {errMsg, showErrMsg} = this.state

    return (
      <div className="login-form-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo-image"
        />

        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-img"
        />

        <form className="from" onSubmit={this.submitForm()}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />
          <div className="input-container">{this.renderUsername()}</div>
          <div className="input-container">{this.renderPassword()}</div>
          <button className="button" type="submit">
            Login
          </button>
          {showErrMsg && <p className="para">*{errMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
