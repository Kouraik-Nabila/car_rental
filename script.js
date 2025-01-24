document.addEventListener('DOMContentLoaded', function() {
    // Vérifier le rôle de l'utilisateur après connexion
    const userRole = sessionStorage.getItem('userRole');  // Assurer qu'on récupère bien le rôle de l'utilisateur après la connexion
    const userName = sessionStorage.getItem('userName');
    const userEmail = sessionStorage.getItem('userEmail');

    // Si aucun rôle n'est défini, rediriger vers la page de login
    if (!userRole) {
        window.location.href = "login.html";  // Rediriger vers la page de connexion
        return;
    }

    // Afficher le nom et email dans la section "Profile"
    document.getElementById('profileName').textContent = userName;
    document.getElementById('profileEmail').textContent = userEmail;

    // Afficher les sections en fonction du rôle
    if (userRole === 'admin') {
        displayAdminDashboard();
    } else if (userRole === 'agent') {
        displayAgentDashboard();
    } else if (userRole === 'client') {
        displayClientDashboard();
    }
});

// Fonction pour afficher le dashboard Admin
function displayAdminDashboard() {
    // Affichage des sections pour l'Admin
    document.getElementById('vehicles').style.display = 'block';
    document.getElementById('reservations').style.display = 'block';
    document.getElementById('stats').style.display = 'block';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('vehiclesLink').style.display = 'inline';
    document.getElementById('reservationsLink').style.display = 'inline';
    document.getElementById('statsLink').style.display = 'inline';
}

// Fonction pour afficher le dashboard Agent
function displayAgentDashboard() {
    // Affichage des sections pour l'Agent
    document.getElementById('vehicles').style.display = 'none';
    document.getElementById('reservations').style.display = 'block';
    document.getElementById('stats').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('vehiclesLink').style.display = 'none';
    document.getElementById('reservationsLink').style.display = 'inline';
    document.getElementById('statsLink').style.display = 'none';
}

// Fonction pour afficher le dashboard Client
function displayClientDashboard() {
    // Affichage des sections pour le Client
    document.getElementById('vehicles').style.display = 'block';
    document.getElementById('reservations').style.display = 'none';
    document.getElementById('stats').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('vehiclesLink').style.display = 'inline';
    document.getElementById('reservationsLink').style.display = 'none';
    document.getElementById('statsLink').style.display = 'none';
}
