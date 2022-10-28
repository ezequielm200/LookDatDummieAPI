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
router.get("/test2", apiController.test2);
router.get("/modelos", apiController.modelos);

router.get("/contrato/:id_contrato", apiController.contrato);
router.get("/contratos/:cliente_id", apiController.contratos);

module.exports = router;
