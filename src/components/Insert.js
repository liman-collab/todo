import React, { Component } from "react";
import axios from "axios";
class Insert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
  }

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email } = this.state;
    const obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    axios
      .post("http://localhost/ReactPHPCRDU/insert.php", obj)
      .then((res) => console.log(res.data));

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name: </label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              onChange={this.onChange}
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name: </label>
            <input
              name="lastName"
              value={this.state.lastName}
              type="text"
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Email : </label>
            <input
              name="email"
              value={this.state.email}
              type="email"
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Register User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Insert;
