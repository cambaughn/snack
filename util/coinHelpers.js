import db from '../firebase/firebaseInit';


const addCoins = (userId, coinCount, amountToAdd) => {
  db.collection('users').doc(userId).update({
    coins: coinCount + amountToAdd
  })
  .then(() => {
    console.log('Added coins');
  })
  .catch(error => {
    console.log(error);
  })
}




export { addCoins }
