
import { Keyboard } from 'react-native';

const streamline = (text) => {
  return text.replace(/[^a-z0-9áéíóúüñ]/gmi, " ").replace(/\s{2,}/g," ").trim();
}

const replaceAccents = (text) => {
  let accentRegex = /[áéíóúüñ]/g;

  let translations = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü': 'u', 'ñ': 'n' };

  return (text.replace(accentRegex, function(match) {
   return translations[match];
 }) );
}


const evaluateTypingQuestion = (userAnswer, correctAnswers, setSubmitted, setAnswerAs, setAnswerWithAccents ) => {
  let answerGiven = streamline(userAnswer);
  let answers = correctAnswers.map(answer => streamline(answer));

  if (userAnswer.length > 0) {
    setSubmitted();
    Keyboard.dismiss();

    if (answers.includes(answerGiven)) {
      setAnswerAs(true);
    } else {
      let withoutAccents = answers.map(answer => replaceAccents(answer));
      let answerIndex = withoutAccents.indexOf(answerGiven);

      if (answerIndex >= 0) {
        setAnswerAs(true);
        setAnswerWithAccents(answers[answerIndex]);
      } else {
        setAnswerAs(false);
      }
    }
  }
}


export { streamline, evaluateTypingQuestion }
