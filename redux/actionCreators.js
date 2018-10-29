/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/


function updateUser(user) {
  return {
    type: 'UPDATE_USER',
    user
  }
}

function setPacks(packs) {
  return {
    type: 'SET_PACKS',
    packs
  }
}

function setLessons(lessons) {
  return {
    type: 'SET_LESSONS',
    lessons
  }
}

function setQuestions(questions) {
  return {
    type: 'SET_QUESTIONS',
    questions
  }
}


export {
  updateUser,
  setPacks,
  setLessons,
  setQuestions,
};
