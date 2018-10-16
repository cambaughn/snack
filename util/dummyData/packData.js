import { questions1, questions2, questions3 } from './drillText';

let packData = {};

packData.packs = [];
packData.packs.push({ title: 'Start Here', id: 1, backgroundColor: '#74b9ff', level: 'A1', description: 'If you\'re new to Spanish, this is your starting point. This pack builds the foundation that will get you speaking in no time!' });
packData.packs.push({ title: 'I think, therefore I am', id: 2, backgroundColor: '#a29bfe', level: 'A1', description: 'This pack is all about state-of-being. It\'ll help you learn important nouns and adjectives using only simple grammar.' });
// packData.packs.push();

packData.packList1 = [];
packData.packList1.push({title: 'Hola', backgroundColor: '#74b9ff', id: 0, type: 'text'})
packData.packList1.push({title: 'Greetings', id: 1, type: 'drill', questions: questions1 })
packData.packList1.push({title: 'You and Me', backgroundColor: '#00cec9', id: 2, type: 'text'})
packData.packList1.push({title: 'To Be or Not To Be', id: 3, type: 'text', backgroundColor: '#74b9ff',})
packData.packList1.push({title: 'Pronoun Practice', id: 4, type: 'drill', questions: questions2 })

packData.packList2 = [];
packData.packList2.push({title: 'Are You Ser-ious?', backgroundColor: '#74b9ff', id: 0, type: 'text'})
packData.packList2.push({title: 'I am many things', id: 1, type: 'drill', questions: questions3 })


export default packData;
