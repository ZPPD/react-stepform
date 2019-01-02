import React, { Component } from "react";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    ocupation: "",
    city: "",
    bio: ""
  };
  render() {
    return <div />;
  }
}

export default UserForm;
