
let questions1 = []

questions1.push({ type: 'typing', prompt: 'Please translate the following', text: 'Quiero ir a Mexico.', answers: ['I want to go to Mexico'] })
questions1.push({ type: 'multipleChoice', prompt: 'Translate the following', text: '¿Que estas haciendo?', answers: ['Hello, how are you?', 'What are you up to?', 'What are you doing?'], correct: 2})
questions1.push({ type: 'multipleChoice', prompt: 'Translate the following', text: 'Voy a comer.', answers: ['I\'m going to eat.', 'I\'m going to run.', 'I want to eat.'], correct: 0})


let questions2 = []

questions2.push({ type: 'multipleChoice', prompt: 'Translate the following', text: '¿Que quieres?', answers: ['What do you like?', 'What are you up to?', 'What do you want?'], correct: 2})
questions2.push({ type: 'typing', prompt: 'Translate the following', text: 'Voy a mirar esa pelicula.', answers: ['I\'m going to see that movie', 'I am going to see that movie'] })
questions2.push({ type: 'multipleChoice', prompt: 'Translate the following', text: 'Quiero comprar eso.', answers: ['I want to buy that.', 'I\'m going to buy that thing.', 'I want that.'], correct: 0})

export { questions1, questions2 };
