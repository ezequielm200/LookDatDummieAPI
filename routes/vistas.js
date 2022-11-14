const express = require('express');
const router = express.Router();
const vistaController = require("../controllers/vistaController");

router.get("/", vistaController.index);
router.get("/dashboard", vistaController.dashboard);
router.get("/version", vistaController.version);

router.get("/generarOrden", vistaController.generarOrden);
//Pruebas con EZE
router.post("/creaOrdenForm", vistaController.formOrden);
router.post("/generarOrden", vistaController.creaOrden);


router.get("/equipos", vistaController.equipos);
router.get("/equipos/:serie", vistaController.equipo);

router.get("/clientes", vistaController.clientes);
router.get("/clientes/:id_cliente", vistaController.cliente);

router.get("/modelos", vistaController.modelos);
router.get("/modelos/:id", vistaController.modelo);

router.get("/contrato/:id_contrato", vistaController.contrato);
router.get("/contratos/:cliente_id", vistaController.contratos);

router.get("/alias/:id_cliente", vistaController.alias);
router.get("/aliasEquipos/:id_alias", vistaController.aliasEquipos);



router.get("/pedidos", vistaController.pedidos);

router.get("/pedido", vistaController.pedidoNroInput);
router.get("/pedido/:nro_pedido", vistaController.pedidoNro);

router.get("/pedidoEstado/:estado", vistaController.pedidoEstado);
router.get("/pedidoContrato/:id_contrato", vistaController.pedidoContrato);
router.get("/pedidoCliente/:id_cliente", vistaController.pedidoCliente);
router.get("/pedidoEquipo/:serie", vistaController.pedidoEquipo);
router.get("/estados_pedido", vistaController.estadosPedido);

router.get("/accesorios", vistaController.accesorios);
router.get("/accesorio/:serie_accesorio", vistaController.accesorio);
router.get("/equipo_accesorio/:serie", vistaController.equiposAccesorios);
//router.get("/localizador/:serie", vistaController.localizador);
router.get("/localizador", vistaController.localizadorInput);
router.get("/localizador/:serie", vistaController.localizador);


router.get("/crm", vistaController.crmInput);
router.get("/crm/:id_cliente", vistaController.crm);




//router.get("/*", vistaController.index);






module.exports = router;
