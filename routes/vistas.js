const express = require('express');
const router = express.Router();
const vistaController = require("../controllers/vistaController");

router.get("/", vistaController.index);
router.get("/equipos", vistaController.equipos);
router.get("/equipos/:serie", vistaController.equipo);

router.get("/clientes", vistaController.clientes);
router.get("/clientes/:id", vistaController.cliente);

module.exports = router;
