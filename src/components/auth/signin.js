/*
  email
  password
  submit button
*/

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component{
  constructor(props){
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  render(){
    //handleSubmit and email and password all come from redux form
    const { handleSubmit, fields: { email, password}} = this.props;
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className='form-group'>
          <label>Email:</label>
          <input {...email} className="form-control" />
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input {...password} className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
  handleFormSubmit({email, password}){
    return console.log(email, password);
  }
}

//first parans is for config, second parans is for our react component
export default reduxForm({
  form:'signin', //name in the state
  fields: ['email', 'password']
})(Signin);
