document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi classique du formulaire

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Veuillez remplir tous les champs.';
        formMessage.style.color = 'red';
        return;
    }

    // Objet contenant les données du formulaire
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Envoi des données au serveur (remplace l'URL par celle de ton serveur)
    fetch('https://jsonplaceholder.typicode.com/posts', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        formMessage.textContent = 'Message envoyé avec succès !';
        formMessage.style.color = 'green';
        document.getElementById('contactForm').reset(); // Réinitialise le formulaire
        console.log('Réponse du serveur :', data);
    })
    .catch(error => {
        formMessage.textContent = 'Une erreur est survenue.';
        formMessage.style.color = 'red';
        console.error('Erreur:', error);
    });
});
