
let dummyQuestions = []

// dummyQuestions.push({ type: 'typing', prompt: 'Please translate the following', text: 'Quiero ir a Mexico.', answers: ['I want to go to Mexico'] })
dummyQuestions.push({ type: 'multipleChoice', prompt: 'Please translate the following', text: 'Que estas haciendo?', answers: ['Hello, how are you?', 'What are you up to?', 'What are you doing?'], correct: 2})
dummyQuestions.push({ type: 'multipleChoice', prompt: 'Please translate the following', text: 'Voy a comer.', answers: ['I\'m going to eat', 'I\'m going to run', 'I want to eat.'], correct: 0})

export default dummyQuestions;
