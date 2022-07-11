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
      console.log(equipos)
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
};

module.exports = apiController;