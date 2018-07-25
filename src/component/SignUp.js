import React, { Component } from 'react';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    }
  }

 signup() {
  console.log(this.state);
}

  render() {
    return (
      <form>
        <div className="form-group">
          <h2>Sign Up</h2>
          <input
            className="form-control"
            type="name"
            placeholder="name"
            onChange={event => this.setState({name: event.target.value})}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
          />
        </div>
        <button
          className="btn btn-primary btn-lg"
           type="submit"
           value="Submit"
           onClick={() => this.signup()}>
           Submit
         </button>
      </form>
    );
  }
}
