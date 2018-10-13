
let questions1 = []

questions1.push({ type: 'typing', text: 'Hola', answers: ['Hello', 'Hi'] })
questions1.push({ type: 'multipleChoice', text: '¿Como estas?', answers: ['How are you?', 'How’s it going?', 'What are you up to?'], correct: 0})
questions1.push({ type: 'typing', text: 'And you?', answers: ['¿Y tu?'] })
questions1.push({ type: 'multipleChoice', text: 'Nice to meet you.', answers: ['Muy bien.', 'Mucho gusto.', 'Muy guapo.'], correct: 1})
questions1.push({ type: 'multipleChoice', text: 'Muy bien', answers: ['Very good', 'Excellent', 'Superb'], correct: 0})
questions1.push({ type: 'typing', text: '¿Y tu?', answers: ['And you?', 'And yourself?', 'How about you?'] })
questions1.push({ type: 'multipleChoice', text: 'How are you?', answers: ['¿Como se llama?', '¿Como se dice?', '¿Como estas?'], correct: 2})


let questions2 = []

questions2.push({ type: 'multipleChoice', text: '¿Que quieres?', answers: ['What do you like?', 'What are you up to?', 'What do you want?'], correct: 2})
questions2.push({ type: 'typing', text: 'Voy a mirar esa pelicula.', answers: ['I\'m going to see that movie', 'I am going to see that movie'] })
questions2.push({ type: 'multipleChoice', text: 'Quiero comprar eso.', answers: ['I want to buy that.', 'I\'m going to buy that thing.', 'I want that.'], correct: 0})

export { questions1, questions2 };
