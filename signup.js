document.getElementById('signup-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    });

    const result = await response.json();
    if (result.success) {
        alert('Sign up successful! You can now log in.');
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        alert('Sign up failed: ' + result.message);
    }
});
