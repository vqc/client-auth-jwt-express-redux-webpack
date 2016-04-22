import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:4040';

export function signinUser({email, password}){
  //submit to server
  //if good
  //--update state to indicate user authenticated
  //--save the token
  //--redirect to a Route
  //if bad
  //--show an error to the user

  //all actions return objects . . . except when using thunk
  //return a function in order to get access to the dispatch funnel of redux
  return function(dispatch){
    //all the logic of figuring what to do will go into this function

    //submit to credentials to api server
    //first is the url, second is the object containing the body
    //axios always returns a promise
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => { //success case
        //update state to indicate user is authenticated
        dispatch({
          type: AUTH_USER,
        })
        //redirect to the route /feature
        browserHistory.push('/feature');
      })
      .catch( () => {

      });
  }
}
