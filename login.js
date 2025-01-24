document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulation d'une vérification avec la base de données (en pratique, vous devriez utiliser une API pour valider les informations)
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            sessionStorage.setItem('userRole', data.role);  // Sauvegarder le rôle de l'utilisateur
            sessionStorage.setItem('userName', data.username);
            sessionStorage.setItem('userEmail', data.email);
            window.location.href = `${data.role}-dashboard.html`;  // Rediriger vers le tableau de bord approprié
        } else {
            alert("Invalid credentials");
        }
    });
});
