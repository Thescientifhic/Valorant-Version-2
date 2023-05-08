const form = document.querySelector('.loginc');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector('.input-n');
  const email = form.querySelector('.input-e');

  if (!name.value) {
    alert('Porfavor ingrese su nombre.');
    name.focus();
  } else if (!email.value) {
    alert('Porfavor ingrese su email.');
    email.focus();
  } else if (!isValidEmail(email.value)) {
    alert('Porfavor ingrese un email valido.');
    email.focus();
  } else if (!password1.value || !password2.value) {
    alert('Porfavor ingrese la contraseña en los 2 campos.');
    password1.focus();
  } else if (password1.value !== password2.value) {
    alert('La contraseña no coincide.');
    password2.focus();
  } else if (!isValidPassword(password1.value)) {
    alert('La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número.');
    password1.focus();
  } else {
    window.location.href = "../html/Agent.html";
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return passwordRegex.test(password);
}
