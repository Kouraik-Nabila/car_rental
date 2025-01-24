document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const role = document.getElementById('userRole').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Envoi des données d'inscription vers la base de données (exemple fictif)
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password, role })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Registration successful! Please login.");
            window.location.href = "login.html";
        } else {
            alert("Registration failed. Please try again.");
        }
    });
});
