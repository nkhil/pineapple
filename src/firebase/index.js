const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://pineapple-5242b.firebaseio.com'
});

async function retrieveUser(email) {
  try {
    return await admin.auth().getUserByEmail(email);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('ERROR =>', error);
  }
}

async function createUser(user) {
  try {
    const { email, password } = user;
    return await admin.auth().createUser({
      email,
      emailVerified: false,
      password,
      disabled: false
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('ERROR=>', error);
  }
}

async function createCustomToken(uid) {
  try {
    return await admin.auth().createCustomToken(uid);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('ERROR=>', error);
  }
}

module.exports = {
  retrieveUser,
  createUser,
  createCustomToken
};
