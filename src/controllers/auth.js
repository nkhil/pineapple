const authorized = false;

function checkAuth() {
  if (authorized) {
    return true;
  } 
  return false;
}

function authController() {
  return checkAuth();
}

module.exports = {
  authController,
  checkAuth
};
