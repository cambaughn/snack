import { questions1, questions2 } from './drillText';

let packData = {};

packData.packList1 = [];
packData.packList1.push({title: 'Hola', backgroundColor: '#74b9ff', id: 0, type: 'text'})
packData.packList1.push({title: 'Greetings', backgroundColor: '#00cec9', id: 1, type: 'drill', questions: questions1 })
packData.packList1.push({title: 'You and Me', backgroundColor: '#00cec9', id: 2, type: 'text'})
packData.packList1.push({title: 'Greetings', backgroundColor: '#00cec9', id: 3, type: 'drill', questions: questions2 })

packData.packList2 = [];
packData.packList2.push({title: 'Hola', backgroundColor: '#74b9ff', id: 0, type: 'text'})


export default packData;
