import React from "react";

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      address: "",
      totalExp: "",
    };
  }

  handleChange = (prop) => (event) => {
    this.setState({ ...this.state, [prop]: event.target.value });
  };

  submit = (e) => {
    let body = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      address: this.state.address,
      totalExp: this.state.totalExp,
    };
    e.preventDefault();
    console.log("this.state", body);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>My Detail</h4>
            <br />
            <form>
              <div className="form-group">
                <input
                  type="text"
                  onChange={this.handleChange("firstName")}
                  placeholder="Firstname"
                  className="form-control"
                  required
                />
                <br />
                <input
                  type="text"
                  onChange={this.handleChange("lastName")}
                  placeholder="Lastname"
                  className="form-control"
                  required
                />
                <br />
                <input
                  type="text"
                  onChange={this.handleChange("age")}
                  placeholder="Age"
                  className="form-control"
                  required
                />
                <br />
                <input
                  type="text"
                  onChange={this.handleChange("address")}
                  placeholder="Address"
                  className="form-control"
                  required
                />
                <br />
                <input
                  type="text"
                  onChange={this.handleChange("totalExp")}
                  placeholder="Total Experience"
                  className="form-control"
                  required
                />
              </div>
              <br />

              <button onClick={this.submit} className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
