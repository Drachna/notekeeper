import React from 'react'
import { checkAuthStatus, register } from '../../Store/actions/authActions';
import { connect } from 'react-redux'
import { Redirect, withRouter } from "react-router";
class Register extends React.Component {
  initialState = {
    email: null,
    userName: null,
    password: null,
    repeat_password: null,
    emailError: null,
    nameError: null,
    passwordError: null,
    repeat_passwordError: null,
  }
  state = this.initialState

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  validate = () => {
    let emailError = ""
    let nameError = ""
    let passwordError = ""
    let repeat_passwordError = ""
    if (!this.state.email) {
      emailError = "This field is required"
    }

    if (!this.state.userName) {
      nameError = "This field is required"
    }

    if (!this.state.password) {
      passwordError = "This field is required"
    }

    if (!this.state.repeat_password) {
      repeat_passwordError = "This field is required"
    }

    if (this.state.password !== this.state.repeat_password) {
      repeat_passwordError = "Password does not match"
    }

    if (emailError || nameError || passwordError || repeat_passwordError) {
      this.setState({
        emailError,
        nameError,
        passwordError,
        repeat_passwordError,
      })
      return false
    }
    return true
  }

  handleClick = async (e) => {
    e.preventDefault()

    const validation = this.validate()
    if (validation) {
      const data = {
        email: this.state.email,
        userName: this.state.userName,
        password: this.state.password

      }
      await this.props.register(data)

      this.setState(() => this.initialState)
      // this.history.push('/displayNotes')
      // console.log(this.props);


    }
    else {
      console.log("validation errror");
    }

  }
  render() {
    if (this.props.status !== 'LOGGED_IN') {
      return (
        <div>
          {/* <Navbar item={'Login'} linkTo={'/'} /> */}
          <div className="register">
            <h1 className="text-center">Register</h1>
            <form onSubmit={this.handleClick}>
              <div className="form-group">
            
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  onChange={this.handleChange}
                />
                <div style={{ color: "red" }}>{this.state.emailError}</div>
              </div>
              <div className="form-group">
              
                <input type="text"
                  className="form-control"
                  id="userName"
                  placeholder="Username"
                  onChange={this.handleChange} />
                <div style={{ color: "red" }}>{this.state.nameError}</div>
              </div>
              <div className="form-group">
                
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={this.handleChange} />
                <div style={{ color: "red" }}>{this.state.passwordError}</div>
              </div>
              <div className="form-group">
            
                <input
                  type="password"
                  className="form-control"
                  id="repeat_password"
                  placeholder="Confirm Password"
                  onChange={this.handleChange} />
                <div style={{ color: "red" }}>{this.state.repeat_passwordError}</div>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      )
    }
    else {
      return <Redirect to='/displayNotes'></Redirect>
    }
  }
}


const mapStateToProps = state => {
  return {
    status: state.auth.status
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    register: (ownProps) => dispatch(register(ownProps)),
    checkAuthStatus: () => { dispatch(checkAuthStatus()) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register))