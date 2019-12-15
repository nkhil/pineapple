const firebase = require('firebase/app');

require('firebase/auth');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyCpR-bNTn4OFkmiah8xC59dgCu0xrR46l0',
  authDomain: 'pineapple-5242b.firebaseapp.com',
  databaseURL: 'https://pineapple-5242b.firebaseio.com',
  projectId: 'pineapple-5242b',
  storageBucket: 'pineapple-5242b.appspot.com',
  messagingSenderId: '483372132321',
  appId: '1:483372132321:web:db3511afed0bb85c5114a0'
};

firebase.initializeApp(firebaseConfig);

async function authenticate(email, password) {
  try {
    const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
    if (user) {
      return user;
    }
    return false;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('ERROR=>', error);
  }
}

module.exports = {
  authenticate
};
