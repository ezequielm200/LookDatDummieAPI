const db = require('../database/models');
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
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      order: [sequelize.col('serie')],
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
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      order: [sequelize.col('Id_cliente')],
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
      where: { Id_cliente: req.params.id },
      // include: [
      //   { association: "color" },
      // ],
    }).then((cliente) => {
      res.status(200).json({
        status: 200,
        message: "Detalle de cliente encontrado",
        url: "api/clientes/:id",
        cliente: cliente,
      });
    });
    console.log(this.cliente)
  },
};

module.exports = apiController;