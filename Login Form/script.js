document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address';
        return;
    }

    // Simple password validation (minimum 6 characters)
    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long';
        return;
    }

    // If validation passes, you can send the data to your server
    // For this example, we'll just show a success message
    errorMessage.style.color = 'green';
    errorMessage.textContent = 'Login successful!';
    
    // Clear form
    document.getElementById('loginForm').reset();
});
