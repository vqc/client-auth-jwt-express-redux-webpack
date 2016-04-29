import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  render(){
    return (
      <div>
        <div>{this.props.message ?
            this.props.message.message :
            "Loading"}</div>
        <div>Feature</div>
      </div>
    );
  }
  componentWillMount(){
    this.props.fetchMessage();
  }
}

function mapStateToProps(state){
  return {
    message: state.message.message,
  }
}

export default connect(mapStateToProps, actions)(Feature);
