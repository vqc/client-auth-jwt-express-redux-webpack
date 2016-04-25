import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component{

  constructor(props){
    super(props)
    this.renderAlert = this.renderAlert.bind(this);
  }

  render(){

    const {
      handleSubmit,
      fields: {
        email,
        password,
        passwordConfirm,
      }
    } = this.props;

    return(
      <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email} />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" {...password} />
        </fieldset>
        <fieldset className="form-group">
          <label>Password Confirm:</label>
          <input type="password" className="form-control" {...passwordConfirm} />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign Up!</button>
      </form>
    );
  }
  renderAlert(){

  }
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
})(Signup);
