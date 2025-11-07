const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const carsController = require('./controllers/usersControllers');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Route de bienvenue
app.get('/', (req, res) => {
  res.json({ 
    message: 'Bienvenue sur l\'API de gestion de voitures classiques',
    version: '1.0.0',
    endpoints: {
      getAllCars: 'GET /api/cars',
      getCarById: 'GET /api/cars/:id',
      createCar: 'POST /api/cars',
      updateCar: 'PUT /api/cars/:id',
      deleteCar: 'DELETE /api/cars/:id'
    }
  });
});

// Routes CRUD
app.get('/api/cars', carsController.getAllCars);
app.get('/api/cars/:id', carsController.getCarById);
app.post('/api/cars', carsController.createCar);
app.put('/api/cars/:id', carsController.updateCar);
app.delete('/api/cars/:id', carsController.deleteCar);

// Gestion des routes non trouvées
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Route non trouvée',
    message: `La route ${req.method} ${req.url} n'existe pas` 
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});