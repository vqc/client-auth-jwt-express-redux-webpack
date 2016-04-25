import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  render(){
    return (
      <div>Feature</div>
    )
  }
  componentWillMount(){
    this.props.fetchMessage();
  }
}

export default connect(null, actions)(Feature);
