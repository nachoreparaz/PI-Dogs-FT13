const { Router } = require('express');
// const axios = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { GetDogs, GetTemper, QueryDogs, GetId, CreateDog } = require('../funciones.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// ---- GET /dogs:-------

   router.get('/dogs', GetDogs)

// --------GET /dogs?name="...":-----------

    router.get('/dog', QueryDogs) // Estoy haciendo GET /dogs: y GET /dogs?name="..." en la misma funcion.

// --------GET /dogs/{idRaza}:-----------

    router.get('/dogs/:id', GetId)

// --------GET /temperament:------------

    router.get('/temperamento', GetTemper)

//--------POST /dog:---------------
    router.post('/dogi', CreateDog)


module.exports = router;
