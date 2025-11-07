// Importation des modules nécessaires
const express = require('express');
const cors = require('cors');

// Création de l'application Express
const app = express();

// Configuration du port
const PORT = process.env.PORT || 3000;

// Middlewares globaux
app.use(cors()); // Autorise les requêtes cross-origin
app.use(express.json()); // Parse le JSON des requêtes// Route de test
app.get('/', (req, res) => {
  res.json({ 
    message: 'Bienvenue sur l\'API de gestion de voitures classiques',
    version: '1.0.0'
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});

app.get('/api/cars', (req, res) => {
  // req = request (requête entrante)// res = response (réponse à envoyer)
  
  res.json({ message: 'Liste des voitures' });
});

// GET - Récupérer toutes les voitures
app.get('/api/cars', (req, res) => {
  res.json({ 
    message: 'Liste de toutes les voitures',
    data: [] 
  });
});

// GET - Récupérer une voiture par son ID
app.get('/api/cars/:id', (req, res) => {
  const id = req.params.id;
  res.json({ 
    message: `Voiture avec l'ID ${id}`,
    data: null 
  });
});

// POST - Créer une nouvelle voiture
app.post('/api/cars', (req, res) => {
  const carData = req.body;
  res.status(201).json({ 
    message: 'Voiture créée avec succès',
    data: carData 
  });
});

// PUT - Modifier une voiture existante
app.put('/api/cars/:id', (req, res) => {
  const id = req.params.id;
  const carData = req.body;
  res.json({ 
    message: `Voiture ${id} modifiée`,
    data: carData 
  });
});

// DELETE - Supprimer une voiture
app.delete('/api/cars/:id', (req, res) => {
  const id = req.params.id;
  res.json({ 
    message: `Voiture ${id} supprimée` 
  });
});