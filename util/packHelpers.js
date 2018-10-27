import db from '../firebase/firebaseInit';

// Get all packs
const getPacks = (callback) => {
  db.collection('packs').get()
  .then(snapshot => {
    let packs = [];
    snapshot.docs.forEach(doc => {
      packs.push(doc.data());
    })
    callback(packs);
  })
  .catch(error => console.log(error))
}


export { getPacks }
