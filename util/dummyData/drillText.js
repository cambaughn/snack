
let questions1 = []

questions1.push({ type: 'typing', text: 'Hola', answers: ['Hello', 'Hi'] })
questions1.push({ type: 'multipleChoice', text: '¿Cómo estás?', answers: ['How are you?', 'How’s it going?', 'What are you up to?'], correct: 0})
questions1.push({ type: 'typing', text: 'And you?', answers: ['¿Y tú?'] })
questions1.push({ type: 'multipleChoice', text: 'Nice to meet you.', answers: ['Muy bien.', 'Mucho gusto.', 'Muy guapo.'], correct: 1})
questions1.push({ type: 'multipleChoice', text: 'Muy bien', answers: ['Very good', 'Excellent', 'Superb'], correct: 0})
questions1.push({ type: 'typing', text: '¿Y tú?', answers: ['And you?', 'And yourself?', 'How about you?'] })
questions1.push({ type: 'multipleChoice', text: 'How are you?', answers: ['¿Cómo se llama?', '¿Cómo se dice?', '¿Cómo estás?'], correct: 2})


let questions2 = []

questions2.push({ type: 'typing', text: 'Nosotros somos estudiantes.', answers: ['We are students.', 'We\’re students'] });
questions2.push({ type: 'multipleChoice', text: 'You all are.', answers: ['Ustedes son.', 'Ellas son.', 'Nosotros somos.'], correct: 0})
questions2.push({ type: 'typing', text: 'Are you a student?', answers: ['¿Eres estudiante?', '¿Tú eres estudiante?']})


let questions3 = []

questions3.push({ type: 'multipleChoice', text: 'She is a teacher.', answers: ['Ella es una maestra.', 'Él es un maestro.', 'Élla es una instructora.'], correct: 0})
questions3.push({ type: 'typing', text: 'I am a student', answers: ['Soy estudiante.', 'Soy un estudiante.', 'Yo soy estudiante.', 'Yo soy un estudiante.'] });
questions3.push({ type: 'typing', text: 'Are you a student?', answers: ['¿Eres estudiante?', '¿Tú eres estudiante?']})

export { questions1, questions2, questions3 };
