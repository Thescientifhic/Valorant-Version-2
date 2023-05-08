  const form = document.getElementById('form');
  const email = document.getElementById('email');
  const password = document.getElementById('password');


  form.addEventListener('submit', function(event) {

    event.preventDefault();

      if (!email.value) {
      alert('Por favor, ingresa tu email.');
      return;
    }

    if (!password.value) {
      alert('Por favor, ingresa tu contraseña.');
      return;
    }

    document.getElementById("form").addEventListener("submit", function(event) {
      event.preventDefault();

      window.location.href = "../html/Agent.html";
    });
  });

