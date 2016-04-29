import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  FETCH_MESSAGE,
} from './types';

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
        });
        //save JWT to local storage
        localStorage.setItem('token', response.data.token);
        //redirect to the route /feature
        browserHistory.push('/feature');
      })
      .catch( () => {
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser({email, password}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signup`, {email, password})
      .then(response => {
        dispatch({
          type: AUTH_USER,
        });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(response => {
        dispatch(authError(response.data.error));
      });
  }
}

export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser(){
  return function(dispatch){
    localStorage.removeItem('token');
    dispatch({
      type: UNAUTH_USER,
    });
  }
}

export function fetchMessage(){
  return function(dispatch){
    axios.get(ROOT_URL, {
      headers:{
        authorization: localStorage.getItem('token'),
      }
    })
      .then(response =>{
        console.log("response", response.data);
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data,
        })
      })
      .catch(response=>{

      });
  }
}
