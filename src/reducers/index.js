import { combineReducers } from 'redux';

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
  state: (state = {}) => state
});

export default rootReducer;
