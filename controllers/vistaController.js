const db = require('../database/models');
const sequelize = require("sequelize");

const vistaController = {
  index: (req, res) => {
    res.render('vistas', { title: 'Vistas'})
  },
  equipos: (req, res) => {
    db.Equipos.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      order: [sequelize.col('serie')],
    }).then((equipos) => {
      res.render('equipos', { title: 'Equipos encontrados',equipos: equipos })
    });
  },
  equipo: (req, res) => {
    db.Equipos.findOne({
      where: { serie: req.params.serie },
    }).then((equipo) => {
      res.render('equipo', { title: 'Detalle de equipo encontrado',equipo: equipo })
    });
  },
  clientes: (req, res) => {
    db.Clientes.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      order: [sequelize.col('ID')],
    }).then((clientes) => {
      res.render('clientes', { title: 'Clientes encontrados', clientes: clientes });
    });
  },
  cliente: (req, res) => {
    db.Clientes.findOne({
      where: { id: req.params.id },
      include: [
         { association: "pais"},
       ],
    }).then((cliente) => {
      res.render('cliente', { title: 'Detalle de cliente', cliente: cliente });
  
    });
    console.log(this.cliente)
  },
  contadorActual: (req, res) => {
    db.Contadores.findOne({
      where: {
        serie: req.params.serie,
        estado: 1 },
      // include: [
      //   { association: "color" },
      // ],
    }).then((equipo) => {
      res.status(200).json({
        status: 200,
        message: "Contador Actual",
        url: "api/contador/:serie",
        contadorActual: equipo,
        Acumulado_BYN : equipo.ContAct_BYN - equipo.ContAnt_BYN
      });
    });
  },
};

module.exports = vistaController;