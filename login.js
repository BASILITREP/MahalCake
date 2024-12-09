document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
  
    // Validate credentials
    if (username === 'dorothy' && password === '07172022') {
      alert('Login successful! 🎉');
      window.location.href = 'home.html'; // Redirect to the main page
    } else {
      alert('Invalid username or password.');
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const typingText = document.getElementById("typing-text");
    typingText.textContent = "Welcome Mahalcake!";
  });
  
  