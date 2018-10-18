const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

import firebaseConfig from './firebaseConfig';


firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export default db;
