import React from 'react'
import { connect } from 'react-redux'
import { checkAuthStatus, login } from '../../Store/actions/authActions';
import Navbar from '../Layout/Navbar'
import SideDrawer from '../Layout/Sidebar';
import './login.css'

class Login extends React.Component {

  componentDidMount() {
    this.props.checkAuthStatus()
  }

  state = {
    email: null,
    password: null,
    emailError: "",
    passwordError: ""
  };

  validate = () => {
    let emailError = ""
    let passwordError = ""
    if (!this.state.email) {
      emailError = "Enter email"
    }
    else if (!this.state.email.includes('@')) {
      emailError = "Invalid email"
    }
    if (!this.state.password) {
      passwordError = "Enter password"
    }
    if (emailError || passwordError) {
      this.setState({
        emailError: emailError,
        passwordError: passwordError
      })
      return false
    }
    return true

  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    const validation = this.validate()
    if (validation) {
      this.setState({ emailError: "", passwordError: "" })
      const data = {
        email: this.state.email,
        password: this.state.password
      }
      this.props.login(data)

    }
    else {
      console.log('validtaion error');
    }
  }



  render() {

console.log(this.props)
    if (this.props.status !== 'LOGGED_IN') {
      return (
        <div>
          <Navbar item={'Register'} linkTo={'/register'} />
          <div className="login_page">
            <h1>Sign In</h1>
            <form onSubmit={this.handleClick}>
              <div className="form-group">
                <input type="email" className="form-control" id="email" name="email" onChange={this.handleChange} placeholder="Enter email" />
                <div style={{ color: "red" }}>{this.state.emailError}</div>
              </div>

              <div className="form-group">
                <input type="password" className="form-control" id="password" name="password" onChange={this.handleChange} placeholder="Password" />
              </div>
              <div style={{ color: "red" }}>{this.state.passwordError}</div>
              <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
          </div>
        </div>
      )
    }
    else {
      return <SideDrawer />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.auth.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => { dispatch(login(data)) },
    checkAuthStatus: () => { dispatch(checkAuthStatus()) }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)