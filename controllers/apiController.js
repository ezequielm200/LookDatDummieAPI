const db = require("../database/models");
const sequelize = require("sequelize");
const fetch = require("node-fetch");

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
        "api/modelos": "Listado de modelos",
        "api/contratos/cliente_id": "Listado de Contratos de un cliente",
        "api/contrato/id_contrato": "Detalle de un contrato por  ID contrato",
      },
    });
  },
  modelo: (req, res) => {
    db.ModeloEquipo.findOne({
      where: { id: req.params.id },
      include: [
        { association: "ModeloMarca" }
      ],
    }).then((modelo) => {
      res.status(200).json({
        status: 200,
        message: "Detalle de modelo encontrado",
        url: "api/modelo/:id",
        modelo: modelo,
      });
    });
  },

  modelos: (req, res) => {
    db.ModeloEquipo.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("modelo")],
    }).then((modelos) => {
      res.status(200).json({
        status: 200,
        message: "modelos encontrados",
        modelos,
      });
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
      include: [
        { association: "EquipoEstado" },
        { association: "EquiposPropietarios" },
        {
          association: "DetalleEquipo",
          include: [
            { association: "AliasCliente" },
            { association: "Tecnico" },
          ],
        },
        {
          association: "ModeloEquipo",
          include: [
            { association: "ModeloMarca" },
            {
              association: "TipoEquipo",
              include: [{ association: "TipoContadores" }],
            },
          ],
        },
      //  { association: "EquiposAccesorio" },
      ],
    }).then((equipo) => {
      res.status(200).json({
        status: 200,
        message: "Detalle de equipo encontrado",
        url: "api/equipos/:serie",
        equipo: equipo,
      });
    });
  },

  equiposAccesorios: (req, res) => {
    db.AccesorioCliente.findAll({
      where: { serie_equipo: req.params.serie },
      include: [
        {
          association: "Accesorio",
          include: [
            { association: "EquiposPropietarios" },
            {
              association: "ModeloAccesorio",
              include: [
                { association: "ModeloMarcaAccesorio" },
                { association: "TipoAccesorio" },
              ],
            },
          ],
        },
      ],
    })
    .then((equiposAccesorios) => {
      res.status(200).json({
        status: 200,
        message: "Accesorios de equipos encontrados",
        url: "api/equipo_accesorio/:serie",
        equiposAccesorios: equiposAccesorios,
      });
    });
  },
  
  contrato: (req, res) => {
    db.Contratos.findAll({
      where: { id_contrato: req.params.id_contrato },
      //include: [{ association: "pais" }],
    }).then((contrato) => {
      res.status(200).json({
        status: 200,
        message: "Detalle de contrato encontrado",
        url: "api/contrato/:id_contrato",
        contrato: contrato,
      });
    });
    console.log(this.contrato);
  },

  contratos: (req, res) => {
    db.Contratos.findAll({
      where: { cliente_id: req.params.cliente_id },
      //include: [{ association: "pais" }],
    }).then((contratos) => {
      res.status(200).json({
        status: 200,
        message: "Detalle de contrato encontrado",
        url: "api/contratos/:cliente_id",
        contratos: contratos,
      });
    });
    console.log(this.contratos);
  },

  clientes: (req, res) => {
    db.Clientes.findAll({
      //attributes: { exclude: ["createdAt", "updatedAt", "Pais_id"] },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        //{ association: "pais" },
        //{ association: "Localidad" },
        //{ association: "Provincia" },
        { association: "ejecutivo" },
        { association: "estadoCliente" },
        { association: "estadioCliente" },
        { association: "actividadCliente" },
        { association: "pagoModalidad" },
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
      where: { id_cliente: req.params.id_cliente },
      //include: [{ association: "pais" }],
    }).then((cliente) => {
      res.status(200).json({
        status: 200,
        message: "Detalle de cliente encontrado",
        url: "api/clientes/:id_cliente",
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

  localizador: async (req, res) => {
    const responseEquipo = await fetch(`http://localhost:3050/api/equipos/${req.params.serie}`);    
    const equipoEncontrado = await responseEquipo.json();
    const responseAccesorio = await fetch(`http://localhost:3050/api/equipo_accesorio/${req.params.serie}`);
    const accesoriosEncontrados = await responseAccesorio.json();
    res.status(200).json({equipoEncontrado,accesoriosEncontrados});  
  },
};

module.exports = apiController;
