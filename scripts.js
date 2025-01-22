event.preventDefault(); // Prevent form submission for demo purposes
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === "test@example.com" && password === "123456") {
    alert('Login successful!');
  } else {
    alert('Invalid email or password. Please try again.');
  }
