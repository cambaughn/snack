
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
questions2.push({ type: 'multipleChoice', text: 'You (all) are.', answers: ['Ustedes son.', 'Ellas son.', 'Nosotros somos.'], correct: 0})
questions2.push({ type: 'typing', text: 'Are you a student?', answers: ['¿Eres estudiante?', '¿Tú eres estudiante?']})
questions2.push({ type: 'typing', text: 'Soy un doctor.', answers: ['I am a doctor.', 'I\'m a doctor.']})
questions2.push({ type: 'multipleChoice', text: 'Eres la maestra.', answers: ['I’m the teacher.', 'You are the teacher.', 'You are the master.'], correct: 1})
questions2.push({ type: 'multipleChoice', text: 'They are students.', answers: ['Son estudiantes.', 'Eres estudiante.', 'Somos estudiantes.'], correct: 0})
questions2.push({ type: 'multipleChoice', text: 'Nosotros somos doctores.', answers: ['They are doctors.', 'He is a doctor.', 'We are doctors.'], correct: 2})
questions2.push({ type: 'typing', text: 'Él es el maestro.', answers: ['He is the teacher.', 'He\'s the teacher.']})


let questions3 = []

questions3.push({ type: 'multipleChoice', text: 'She is a teacher.', answers: ['Ella es una maestra.', 'Él es un maestro.', 'Élla es una instructora.'], correct: 0})
questions3.push({ type: 'typing', text: 'I am a student', answers: ['Yo soy estudiante.', 'Soy estudiante.', 'Soy un estudiante.', 'Yo soy un estudiante.'] });
questions3.push({ type: 'multipleChoice', text: 'Es un libro.', answers: ['He is a learner.', 'It is a letter.', 'It is a book.'], correct: 2})
questions3.push({ type: 'multipleChoice', text: 'Ellos son estudiantes.', answers: ['They are students.', 'We are students.', 'They are teachers.'], correct: 0})
questions3.push({ type: 'typing', text: 'Nosotros somos maestros.', answers: ['We are teachers.', 'We\'re teachers.']})
questions3.push({ type: 'multipleChoice', text: 'Él es el maestro.', answers: ['He is a teacher.', 'He is the teacher.', 'She is the teacher.'], correct: 1})
questions3.push({ type: 'typing', text: 'Are you a student?', answers: ['¿Eres estudiante?', '¿Tú eres estudiante?']})

export { questions1, questions2, questions3 };
