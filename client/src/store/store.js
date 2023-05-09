import { createStore } from "redux";

const initialState = {
  // hideSignup: true,
  showSignUp: false,
  notification: false,
  message: false,
  login: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOWSIGNUP":
      return {
        ...state,
        showSignUp: !state.showSignUp,
      };

    case "hideSignUp":
      return {
        ...state,
        showSignUp: !state.showSignUp,
      };

    case "notification":
      return {
        ...state,
        notification: !state.notification,
        message: false,
        login: false,
      };

    case "message":
      return {
        ...state,
        message: !state.message,
        notification: false,
        login: false,
      };

    case "login":
      return {
        ...state,
        login: !state.login,
        message: false,
        notification: false,
      };

    case "USER-SUBMIT":
      return {
        ...state,
        payload: state.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
