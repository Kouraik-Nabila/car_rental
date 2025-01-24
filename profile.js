document.addEventListener('DOMContentLoaded', function() {
    // Charger les informations du profil à partir du sessionStorage ou d'une API si nécessaire
    const userName = sessionStorage.getItem('userName');
    const userEmail = sessionStorage.getItem('userEmail');

    // Remplir les informations du profil
    document.getElementById('profileName').textContent = userName;
    document.getElementById('profileEmail').textContent = userEmail;

    // Gestion de la modification du profil
    document.getElementById('editProfileBtn').addEventListener('click', function() {
        // Logique pour éditer le profil (rediriger vers une autre page ou afficher un formulaire)
        alert('Edit Profile feature coming soon!');
    });
});
