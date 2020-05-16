import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_Name: "",
      last_Name: "",
      email: "",
      redirect: false,
    };
  }

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost/ReactPHPCRUD/getById.php?id=" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          first_name: response.data.fName,
          last_name: response.data.lName,
          email: response.data.email,
        }).catch(function (error) {
          console.log(error);
        });
      });
  }

  onSubmit = (event) => {
    e.preventDefault();
    const { first_name, last_name, email } = this.state;
    const obj = {
      //id :id,
      first_name: first_name,
      last_name: last_name,
      email: email,
    };
    axios
      .post(
        "http://localhost/ReactPHPCRUD/update.php?id=" +
          this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data), this.setState({ redirect: true }));
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/view" />;
    }
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name: </label>
            <input
              type="text"
              name="first_name"
              className="form-control"
              onChange={this.onChange}
              value={this.state.first_Name}
            />
          </div>
          <div className="form-group">
            <label>Last Name: </label>
            <input
              name="last_name"
              value={this.state.last_Name}
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
              value="Update User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Edit;
