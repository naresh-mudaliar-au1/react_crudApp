import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      confirmPassword: "",
      match: false,
      submitted: false,
    };
  }

  handleChange = (prop) => (event) => {
    this.setState({ ...this.state, [prop]: event.target.value }, () => {
      if (this.state.password === this.state.confirmPassword) {
        this.setState({ match: true }, () => {});
      }
    });
  };

  signup = (e) => {
    let body = {
      userName: this.state.userName,
      password: this.state.password,
    };
    
    console.log("this.state", e.target.value);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>SignUp</h4>
            <br />
            <form>
              <div className="form-group">
                <input
                  type="text"
                  onChange={this.handleChange("userName")}
                  placeholder="UserName"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  onChange={this.handleChange("password")}
                  placeholder="Password"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  onChange={this.handleChange("confirmPassword")}
                  placeholder="Confirm Password"
                  className="form-control"
                  required
                />
              </div>
              <br />
              {this.state.match ? (
                <button onClick={this.signup} className="btn btn-primary">
                  SignUp
                </button>
              ) : (
                <button type="submit" className="btn btn-primary" disabled>
                  SignUp
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
