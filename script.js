// script.js

// Fonction pour initialiser la session de l'utilisateur
function initializeSession(userRole) {
    // Enregistre le rôle de l'utilisateur dans le localStorage
    localStorage.setItem('userRole', userRole);
}

// Fonction pour récupérer le rôle de l'utilisateur depuis la session
function getUserRole() {
    return localStorage.getItem('userRole');
}

// Fonction pour rediriger l'utilisateur vers son tableau de bord en fonction de son rôle
function redirectToDashboard() {
    const userRole = getUserRole();

    if (!userRole) {
        window.location.href = "login.html";  // Redirection vers la page de login si l'utilisateur n'est pas connecté
        return;
    }

    switch (userRole) {
        case 'client':
            window.location.href = "client-dashboard.html";  // Dashboard Client
            break;
        case 'agent':
            window.location.href = "agent-dashboard.html";  // Dashboard Agent
            break;
        case 'admin':
            window.location.href = "admin-dashboard.html";  // Dashboard Admin
            break;
        default:
            window.location.href = "login.html";  // Redirection par défaut vers login
            break;
    }
}

// Fonction pour déconnecter l'utilisateur
function logout() {
    localStorage.removeItem('userRole');  // Suppression de la session
    window.location.href = "login.html";  // Redirection vers la page de login
}

// Appel de la fonction pour rediriger vers le dashboard approprié si l'utilisateur est connecté
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname === "/login.html") {
        return;
    }
    redirectToDashboard();  // Redirige vers le tableau de bord approprié à la connexion
});
