// Add event listeners to the login and register forms
document.getElementById('login-form').addEventListener('submit', login);
document.getElementById('register-form').addEventListener('submit', register);

// Login function
function login(event) {
	event.preventDefault();
	// Get the username and password from the form
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	// Check if the username and password are correct
	if (username === 'admin' && password === 'password') {
		alert('Login successful!');
	} else {
		alert('Invalid username or password!');
	}
}

// Register function
function register(event) {
	event.preventDefault();
	// Get the name, email, password, and credit card number from the form
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var password = document }
