const app = document.getElementById('app');

const signIn = document.getElementById('signIn');
const signUp = document.getElementById('signUp');
const image = document.getElementById('image');

const switchToSignIn = document.getElementById('switchToSignIn');
const switchToSignUp = document.getElementById('switchToSignUp');

const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const forgotPass = document.getElementById('forgotPass');

const model = document.getElementById('model');

const showDetails = document.getElementById('showDetails');

const getDetails = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  showDetails.style.opacity = 1;
  showDetails.innerHTML = `
  <h6>Name : ${user.firstName} ${user.lastName}</h6>
  <h6>Date of Birth : ${user.dob}</h6>
  <h6>Email Id : ${user.email}</h6>
  <button id="logout">Logout</button>
`;
  signIn.style.display = 'none';
  signUp.style.display = 'none';
  image.style.width = '100vw';
  app.style.transform = 'translate(0)';

  const logout = document.getElementById('logout');
  logout.addEventListener('click', () => {
    model.style.display = 'block';
    model.textContent = 'Logout Successfully!';
    showDetails.style.opacity = 0;

    localStorage.removeItem('user');

    setTimeout(() => {
      location.reload();
    }, 3000);
  });
};

switchToSignUp.addEventListener('click', () => {
  app.classList.remove('signInActive');
  app.classList.add('signUpActive');
});

switchToSignIn.addEventListener('click', () => {
  app.classList.add('signInActive');
  app.classList.remove('signUpActive');
});

signUpButton.addEventListener('click', () => {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const dob = document.getElementById('dob').value.trim();
  const signUpEmail = document.getElementById('signUpEmail').value.trim();
  const signUpPassword = document.getElementById('signUpPassword').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  if (!firstName || !lastName || !dob || !signUpEmail || !signUpPassword || !confirmPassword) {
    model.style.display = 'block';
    model.textContent = 'Please Fill All Details...';
    setTimeout(() => {
      model.style.display = 'none';
    }, 5000);
    return;
  }

  if (signUpPassword !== confirmPassword) {
    model.style.display = 'block';
    model.textContent = "Enterd Password & Confirm Password aren't same....";
    setTimeout(() => {
      model.style.display = 'none';
    }, 5000);
    return;
  }

  const user = {
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    email: signUpEmail,
    password: signUpPassword,
  };

  localStorage.setItem('user', JSON.stringify(user));

  getDetails();
});

signInButton.addEventListener('click', () => {
  const signInEmail = document.getElementById('signInEmail').value.trim();
  const signInPassword = document.getElementById('signInPassword').value.trim();

  if (!signInEmail || !signInPassword) {
    model.style.display = 'block';
    model.textContent = 'Please Fill All Details...';
    setTimeout(() => {
      model.style.display = 'none';
    }, 5000);
    return;
  }

  if (signInPassword !== JSON.parse(localStorage.user).password) {
    model.style.display = 'block';
    model.textContent = 'Enter Email or Password is wrong, User not found...';
    setTimeout(() => {
      model.style.display = 'none';
    }, 5000);
    return;
  }

  getDetails();
});

forgotPass.addEventListener('click', () => {
  if (!localStorage.getItem('user')) {
    model.style.display = 'block';
    model.textContent = 'Please Create Account!';
    setTimeout(() => {
      model.style.display = 'none';
    }, 5000);
    return;
  }

  signIn.style.display = 'none';
  signUp.style.display = 'none';
  image.style.width = '100vw';
  app.style.transform = 'translate(0)';

  showDetails.style.opacity = 1;
  showDetails.innerHTML = `
  <h4 style="margin-bottom: var(--md-scale);">Forgot Password</h4>
          <div class="passwordContainer" style="width: 100%;">
          <h6 style="display: flex; align-items: center;"><span class="material-symbols-outlined"> password </span> Password</h6>
          <div class="inputContainer single" style="width: 100%;">
            <div class="input" style="width: 100%;">
              <input type="password" name="password" id="updatePassword" placeholder="Password" style="width: 100%;" />
            </div>
          </div>
        </div>

  <button id="updatePass">Update Password</button>
`;

  const updatePass = document.getElementById('updatePass');
  updatePass.addEventListener('click', () => {
    model.style.display = 'block';
    model.textContent = 'Password Updated Successfully!';

    const user = JSON.parse(localStorage.getItem('user'));

    user.password = document.getElementById('updatePassword').value.trim();

    localStorage.setItem('user', JSON.stringify(user));

    setTimeout(() => {
      location.reload();
    }, 3000);
  });
});
