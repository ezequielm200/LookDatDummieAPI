const db = require("../database/models");
const sequelize = require("sequelize");

const apiController = {
  index: (req, res) => {
    res.status(200).json({
      status: 200,
      message: "API funcionando correctamente",
      servicios: {
        "api/equipos": "Total de equipos",
        "api/equipos/:serie": "Detalle de un equipo por SERIE",
        "api/clientes": "Listado de clientes",
        "api/clientes/id": "Detalle de un cliente por ID",
      },
    });
  },
  equipos: (req, res) => {
    db.Equipos.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("serie")],
    }).then((equipos) => {
      res.status(200).json({
        status: 200,
        message: "Equipos encontrados",
        equipos,
      });
    });
  },
  equipo: (req, res) => {
    db.Equipos.findOne({
      where: { serie: req.params.serie },
      // include: [
      //   { association: "color" },
      // ],
    }).then((equipo) => {
      res.status(200).json({
        status: 200,
        message: "Detalle de equipo encontrado",
        url: "api/equipos/:serie",
        equipo: equipo,
      });
    });
  },
  clientes: (req, res) => {
    db.Clientes.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "Pais_id"] },
      include: [
        { association: "pais" },
        { association: "Localidad" },
        { association: "Provincia" },
      ],
      order: [sequelize.col("ID")],
    }).then((clientes) => {
      res.status(200).json({
        status: 200,
        message: "Clientes encontrados",
        clientes,
      });
    });
  },
  cliente: (req, res) => {
    db.Clientes.findOne({
      where: { id: req.params.id },
      include: [{ association: "pais" }],
    }).then((cliente) => {
      res.status(200).json({
        status: 200,
        message: "Detalle de cliente encontrado",
        url: "api/clientes/:id",
        cliente: cliente,
      });
    });
    console.log(this.cliente);
  },
  contadorActual: (req, res) => {
    db.Contadores.findOne({
      where: {
        serie: req.params.serie,
        estado: 1,
      },
      // include: [
      //   { association: "color" },
      // ],
    }).then((equipo) => {
      res.status(200).json({
        status: 200,
        message: "Contador Actual",
        url: "api/contador/:serie",
        contadorActual: equipo,
        Acumulado_BYN: equipo.ContAct_BYN - equipo.ContAnt_BYN,
      });
    });
  },
  test: (req, res) => {
    console.log("llega");
    db.Localidad.findAll().then((data) => {
      res.status(200).json({
        status: 200,
        message: "probando",
        url: "api/test",
        data
      })
    });
  },
};

module.exports = apiController;
