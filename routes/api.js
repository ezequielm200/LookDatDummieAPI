const express = require('express');
const router = express.Router();
const apiController = require("../controllers/apiController");

router.get("/", apiController.index);
router.get("/equipos", apiController.equipos);
router.get("/equipos/:serie", apiController.equipo);

module.exports = router;
