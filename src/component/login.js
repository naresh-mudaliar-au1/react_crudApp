import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      success: false,
    };
  }

  handleChange = (prop) => (event) => {
    this.setState({ ...this.state, [prop]: event.target.value });
  };

  login = (e) => {
    let body = {
      userName: this.state.userName,
      password: this.state.password,
    };
    e.preventDefault();
    console.log("this.state", body);
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
              <br />

              <button onClick={this.login} className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
