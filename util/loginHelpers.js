import db from '../firebase/firebaseInit';
import { AsyncStorage } from "react-native";

const addUserToDatabase = (user, callback) => {

  db.collection('users').doc(user.email).get()
  .then(function(doc) {
      if (doc.exists) { // user already in database
        callback(doc.data(), 'exists');
      } else { // first time signing in, need to add the user
        db.collection('users').doc(user.email).set({ ...user, coins: 0, languages: [] })
        .then(() => {
          callback(user, 'new_user');
        })
        .catch(error => {
          console.log(error);
        })
      }
  })
  .catch(function(error) {
      console.log(error);
  })
}


const getUserbyToken = (google_id, callback) => {
  db.collection('users').where('google_id', '==', google_id).get()
  .then(snapshot => {
    let user = snapshot.docs[0].data();
    callback(user);
  })
  .catch(function(error) {
    console.log(error);
  })
}


const storeData = async (user) => {
  try {
    await AsyncStorage.setItem('snack_login', user.google_id);
  } catch (error) {
    console.log(error);
  }
  return user;
}


const retrieveData = async () => {
  try {
    const login = await AsyncStorage.getItem('snack_login');
    if (login !== null) {
      return login;
    }
   } catch (error) {
     console.log(error);
   }
}


export { addUserToDatabase, storeData, retrieveData, getUserbyToken }
