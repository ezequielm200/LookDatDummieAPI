const express = require('express');
const router = express.Router();
const apiController = require("../controllers/apiController");

router.get("/", apiController.index);
router.get("/equipos", apiController.equipos);
router.get("/equipos/:serie", apiController.equipo);
router.get("/clientes", apiController.clientes);
router.get("/clientes/:id", apiController.cliente);
router.get("/contador/:serie", apiController.contadorActual);
router.get("/test", apiController.test);

module.exports = router;
