import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  render(){
    return (
      <div>Thanks for coming back soon!</div>
    )
  }
  componentWillMount(){
    this.props.signoutUser();
  }
}

export default connect(null, actions)(Signout);
