import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){

  class Authentication extends Component {
    //expose context
    //static keyword creates a class level property
    static contextTypes = {
      router: React.PropTypes.object,
    }
    render(){
      return (
        <ComposedComponent { ...this.props } />
      )
    }
    componentWillMount(){
      if(!this.props.authenticated){
        this.context.router.push('/signup');
      }
    }
    //called when the component will be about to rerender
    componentWillUpdate(nextProps){
      if(!nextProps.authenticated){
        this.context.router.push('/signup');
      }
    }
  }

  function mapStateToProps(state){
    return {
      authenticated: state.auth.authenticated,
    }
  }

  return connect(mapStateToProps)(Authentication);
}
