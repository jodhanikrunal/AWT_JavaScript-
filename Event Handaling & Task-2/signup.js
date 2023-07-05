document.getElementById('signup').addEventListener('submit', function(event) {
  event.preventDefault();

  const fname = document.getElementById('fname').value;
  const Uname = document.getElementById('Uname').value;
  const Password = document.getElementById('Password').value;
  const Confirm_Password = document.getElementById('Confirm_Password').value;
  const Ph_no = document.getElementById('Ph_no').value;
  const Email = document.getElementById('Email').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const state = document.getElementById('State').value;
  const agreement = document.getElementById('agreement').checked;

  let isValid = true;

  document.getElementById('fnameErr').textContent = '';
  document.getElementById('UnameErr').textContent = '';
  document.getElementById('passwordErr').textContent = '';
  document.getElementById('confirmpasswordErr').textContent = '';
  document.getElementById('Ph_noErr').textContent = '';
  document.getElementById('EmailErr').textContent = '';
  document.getElementById('genderErr').textContent = '';
  document.getElementById('StateErr').textContent = '';
  document.getElementById('agreementError').textContent = '';

  if (!fname.match(/^[a-zA-Z]+$/)) {
    document.getElementById('fnameErr').textContent = '* Enter a valid name';
    isValid = false;
  }

  if (!Uname.match(/^[a-zA-Z0-9]+$/)) {
    document.getElementById('UnameErr').textContent = '* Enter a valid username';
    isValid = false;
  }

  if (!Password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,10}$/)) {
    document.getElementById('passwordErr').textContent = '* Password must be alphanumeric with at least one special symbol (@$!%.*#?&) and have a length of 6 to 10 characters';
    isValid = false;
  }

  if (Confirm_Password !== Password) {
    document.getElementById('confirmpasswordErr').textContent = '* Confirm Password must match the password';
    isValid = false;
  }

  if (!Ph_no.match(/^\d{10}$/)) {
    document.getElementById('Ph_noErr').textContent = '* Enter a valid phone number';
    isValid = false;
  }

  if (!gender) {
    document.getElementById('genderErr').textContent = '* Select a gender';
    isValid = false;
  }

  if (!Email.match(/^[^\s@]+@charusat\.edu\.in$/)) {
    document.getElementById('EmailErr').textContent = '* Please enter a valid email address ending with @charusat.edu.in';
    isValid = false;
  }

  if (state === '') {
    document.getElementById('StateErr').textContent = '* Select a state';
    isValid = false;
  }

  if (!agreement) {
    document.getElementById('agreementError').textContent = '* You must agree to the terms and conditions';
    isValid = false;
  }

  if (isValid) {
    window.location.href = 'login.html';
  }
});
