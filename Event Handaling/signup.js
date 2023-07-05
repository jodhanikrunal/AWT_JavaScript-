const form = document.querySelector('form').value;
const fname = document.querySelector('fname').value;
const Uname = document.querySelector('Uname').value;
const Password = document.querySelector('Password').value;
const Confirm_Password = document.querySelector('Confirm_Password').value;
const Ph_no = document.querySelector('Ph_no').value;
const Email = document.querySelector('Email').value;
const gender = document.querySelector('input[name="gender"]:checked');  
const agreement = document.getElementById('agreement').checked;

const isvalid = true;

if(!fname.matches(/^[a-zA-Z]+$/)){
    document.getElementById('fnameErr').textContent = '* Enter valid name';
    isvalid = false;
}

if(!Uname.matches(/^[a-zA-Z0-9]+$/)){
    document.getElementById('UnameErr').textContent = '* Enter valid User name';
    isvalid = false;
}

if(!Password.matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,10}$/)){
    document.getElementById('passwordErr').textContent = '* Password must be alphanumeric with at least one special symbol (@$!%.*#?&) and have a length of 6 to 10 characters';
    isvalid = false;
}

if(Confirm_Password =! Password){
    document.getElementById('confirmpasswordErr').textContent = '* Confirm Password must be match with password';
    isvalid = false;
}

if(!Ph_no.match(/^\d{10}$/)){
    document.getElementById('Ph_noErr').textContent = '* Enter valid phone no';
    isvalid = false;
}

if(!gender){
    document.getElementById('genderError').textContent = '* Enter valid name';
    isvalid = false;
}

if (!Email.match(/^[^\s@]+@charusat\.edu\.in$/  || /^[^\s@]+@charusat\.ac\.in$/)) {
    document.getElementById('EmailError').textContent = '* Please enter a valid email address.';
    isvalid = false;
  }

  if (state === '') {
    document.getElementById('StateError').textContent = '* Please select a state.';
    isvalid = false;
  }

  if (!agreement) {
    document.getElementById('agreementError').textContent = '* You must agree to the terms and conditions.';
    isvalid = false;
  }

  if (isvalid) {
    window.location.href = 'login.html';
  }

