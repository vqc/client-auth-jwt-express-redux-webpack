/*
  email
  password
  submit button
*/

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component{
  constructor(props){
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
  }
  render(){
    //handleSubmit and email and password all come from redux form
    const {
      handleSubmit,
      fields: {
        email,
        password
      }
    } = this.props;

    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className='form-group'>
          <label>Email:</label>
          <input {...email} className="form-control" />
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input {...password} type="password" className="form-control" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
  handleFormSubmit({email, password}){
    console.log(email, password);
    return this.props.signinUser({email, password});
  }
  renderAlert(){
    if (this.props.errorMessage){
      return(
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }
}

function mapStateToProps(state){
  return {
    errorMessage: state.auth.error
  };
}

//first parans is for config, second parans is for our react component
export default reduxForm({
  form:'signin', //name in the state
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
