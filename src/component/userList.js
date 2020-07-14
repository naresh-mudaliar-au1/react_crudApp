import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [
        { _id: 1, name: "naresh", lastname: "last" },
        { _id: 11, name: "sample", lastname: "sample" },
      ],
    };
  }

  handleChange = (prop) => (event) => {
    this.setState({ ...this.state, [prop]: event.target.value });
  };

  delete = (_id) => {
    console.log("this.state", _id);
  };

  render() {
    return (
      <div>
        {this.state.user.length !== 0 ? (
          <div className="list-group">
            {this.state.user &&
              this.state.user.map((p) => {
                return (
                  <button
                    onClick={() => this.delete(p._id)}
                    key={p._id}
                    className="list-group-item list-group-item-action"
                  >
                    {p.name}
                  </button>
                );
              })}
          </div>
        ) : (
          <h1>No User Enrolled !!</h1>
        )}
      </div>
    );
  }
}

export default List;
