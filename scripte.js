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
// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Configuration Firebase (remplace par la tienne)
const firebaseConfig = {
  apiKey: "AIzaSyCjQ2lrEh60As8mBRZ8zBPrgRYksWJPJqE",
  authDomain: "project-4472863946162086121.firebaseapp.com",
  projectId: "project-4472863946162086121",
  storageBucket: "project-4472863946162086121.firebasestorage.app",
  messagingSenderId: "685985825038",
  appId: "1:685985825038:web:6d22bc5eebc6822346975f",
  measurementId: "G-TZ9FDTE5BG"
};

// Initialiser Firebase et Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Veuillez remplir tous les champs.';
        formMessage.style.color = 'red';
        return;
    }

    try {
        await addDoc(collection(db, "messages"), { name, email, message, timestamp: new Date() });
        formMessage.textContent = 'Message envoyé avec succès !';
        formMessage.style.color = 'green';
        document.getElementById('contactForm').reset();
    } catch (error) {
        formMessage.textContent = 'Erreur lors de l’envoi.';
        formMessage.style.color = 'red';
        console.error("Erreur Firestore :", error);
    }
});
