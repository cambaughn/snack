import { combineReducers } from 'redux';


function user(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.user;
    default:
      return state;
  }
}


function packs(state = [], action) {
  switch (action.type) {
    case 'SET_PACKS':
      return action.packs;
    default:
      return state;
  }
}

function lessons(state = [], action) {
  switch (action.type) {
    case 'SET_LESSONS':
      return action.lessons;
    default:
      return state;
  }
}

function questions(state = [], action) {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return action.questions;
    default:
      return state;
  }
}


// const snackApp = combineReducers({
//   user,
//   packs,
//   lessons,
//   questions,
// });

export { user, packs, lessons, questions };
