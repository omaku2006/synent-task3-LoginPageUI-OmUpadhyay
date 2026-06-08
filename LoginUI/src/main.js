const app = document.getElementById('app');

const signIn = document.getElementById('signIn');
const signUp = document.getElementById('signUp');

const switchToSignIn = document.getElementById('switchToSignIn');
const switchToSignUp = document.getElementById('switchToSignUp');

switchToSignUp.addEventListener('click', () => {
  app.classList.remove('signInActive');
  app.classList.add('signUpActive');
});

switchToSignIn.addEventListener('click', () => {
  app.classList.add('signInActive');
  app.classList.remove('signUpActive');
});
