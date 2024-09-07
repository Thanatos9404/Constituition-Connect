document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();
    if (result.success) {
        alert('Login successful!');
        window.location.href = 'quiz.html'; // Redirect to quiz page
    } else {
        alert('Login failed: ' + result.message);
    }
});

function continueAsGuest() {
    alert("Continuing as Guest!");
    window.location.href = 'quiz.html'; // Redirect to quiz page
}
