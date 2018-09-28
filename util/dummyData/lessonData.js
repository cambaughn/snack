import drillText from './drillText';

let lessonData = [];

lessonData.push({title: 'Hola', backgroundColor: '#74b9ff', id: 1, type: 'text'})
lessonData.push({title: 'You and Me', backgroundColor: '#00cec9', id: 2, type: 'text'})
lessonData.push({title: 'Practice', backgroundColor: '#00cec9', id: 3, type: 'drill', questions: drillText})

export default lessonData;
