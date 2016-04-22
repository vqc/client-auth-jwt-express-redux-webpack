import { combineReducers } from 'redux';
//redeclare reducer variable as form
//so that we dont have to have a reducer called reducer
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  /**
    auth: {
      authenticated: boolean //relates to whether a user is signed in
        //action creator for
          //sign in
          //sign out
          //sign up
      error: string //display an error related to authentication has occured
    }
  **/
  form: form, //can replace this with just 'form' because of es6
  auth: authReducer
});

export default rootReducer;
