const db = require("../database/models");
const sequelize = require("sequelize");

const vistaController = {
  index: (req, res) => {
    res.render("vistas", { title: "Vistas" });
  },

  //dashboard: (req, res) => {
  //  res.render("dashboard", { title: "Dashboard" });
  //},

  // Equipos
  modelos: (req, res) => {
    db.ModeloEquipo.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("modelo")],
    }).then((modelos) => {
      res.render("modelos", { title: "Modelos encontrados", modelos: modelos });
    });
  },

  modelo: (req, res) => {
    db.ModeloEquipo.findOne({
      where: { id: req.params.id },
      include: [
        { association: "ModeloMarca" },
        //{ association: "TipoEquipo"},

        {
          association: "TipoEquipo",
          include: [{ association: "TipoContadores" }],
        },
      ],
    }).then((modelo) => {
      res.render("modelo", {
        title: "Detalle de equipo encontrado.",
        modelo: modelo,
      });
    });
  },

  alias: (req, res) => {
    db.Alias.findAll({
      where: { id_cliente: req.params.id_cliente },
    }).then((alias) => {
      res.render("alias", {
        title: "Detalle de equipo con alias encontrado",
        alias: alias,
      });
    });
  },

  aliasEquipos: (req, res) => {
    db.EquipoCliente.findAll({
      where: { alias: req.params.id_alias },
      //attributes: { exclude: ['createdAt', 'updatedAt'] },
      order: [sequelize.col("serie_cliente")],
    }).then((aliasEquipos) => {
      res.render("aliasEquipos", {
        title: "Equipos x Alias",
        aliasEquipos: aliasEquipos,
      });
    });
  },

  equipos: (req, res) => {
    db.Equipos.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("serie")],
    }).then((equipos) => {
      res.render("equipos", { title: "Equipos encontrados", equipos: equipos });
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
            { association: "PaisEquipo" },
            { association: "LocalidadEquipo" },
            { association: "ProvinciaEquipo" },
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
        { association: "EquiposAccesorio" },
      ],
    }).then((equipo) => {
      res.render("equipo", {
        title: "Detalle de equipo encontrado",
        equipo: equipo,
      });
    });
  },
  // Fin Equipos

  // Clientes
  clientes: (req, res) => {
    db.Clientes.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("ID")],
    }).then((clientes) => {
      res.render("clientes", {
        title: "Clientes encontrados",
        clientes: clientes,
      });
    });
  },
  cliente: (req, res) => {
    db.Clientes.findOne({
      where: { id_cliente: req.params.id_cliente },
      include: [
        {
          association: "DomicilioCliente",
          include: [
            { association: "pais" },
            { association: "Localidad" },
            { association: "Provincia" },
          ],
        },
        //{ association: "DomicilioCliente" },
        //{ association: "pais" },
        //{ association: "Localidad" },
        //{ association: "Provincia" },
        { association: "ejecutivo" },
        { association: "estadoCliente" },
        { association: "estadioCliente" },
        { association: "actividadCliente" },
        { association: "pagoModalidad" },
      ],
    }).then((cliente) => {
      res.render("cliente", { title: "Detalle de cliente", cliente: cliente });
    });
    console.log(this.cliente);
  },
  // Fin Clientes

  // Contratos
  contratos: (req, res) => {
    db.Contratos.findAll({
      where: { cliente_id: req.params.cliente_id },
      include: [{ association: "TipoContrato" }],
    }).then((contratos) => {
      res.render("contratos", {
        title: "Detalle de contratos",
        contratos: contratos,
      });
    });
    console.log(this.contratos);
  },
  contrato: (req, res) => {
    db.Contratos.findOne({
      where: { id_contrato: req.params.id_contrato },
      include: [
        { association: "TipoContrato" },
        { association: "SelladoContrato" },
        { association: "ContratoEstado" },
      ],
    }).then((contrato) => {
      res.render("contrato", {
        title: "Detalle de contrato",
        contrato: contrato,
      });
    });
    console.log(this.contrato);
  },
  // Fin Contratos

  // Pedidos
  pedidoContrato: (req, res) => {
    db.Pedido.findAll({
      where: { id_contrato: req.params.id_contrato },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("nro_pedido")],
    }).then((pedidoContrato) => {
      res.render("pedidoContrato", {
        title: "Pedidos por Contrato",
        pedidoContrato: pedidoContrato,
      });
    });
  },

  pedidoCliente: (req, res) => {
    db.Pedido.findAll({
      where: { id_cliente: req.params.id_cliente },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("nro_pedido")],
    }).then((pedidoCliente) => {
      res.render("pedidoCliente", {
        title: "Pedidos por Cliente",
        pedidoCliente: pedidoCliente,
      });
    });
  },

  pedidoEquipo: (req, res) => {
    db.Pedido.findAll({
      where: { serie: req.params.serie },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("nro_pedido")],
      include: [{ association: "PedidoEstado" }],
    }).then((pedidoEquipo) => {
      res.render("pedidoEquipo", {
        title: "Pedidos por Equipo",
        pedidoEquipo: pedidoEquipo,
      });
    });
  },

  pedidos: (req, res) => {
    db.Pedido.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("nro_pedido")],
    }).then((pedidos) => {
      res.render("pedidos", { title: "Pedidos encontrados", pedidos: pedidos });
    });
  },

  pedidoNro: (req, res) => {
    db.Pedido.findOne({
      where: { nro_pedido: req.params.nro_pedido },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("nro_pedido")],
    }).then((pedidoNro) => {
      res.render("pedidoNro", {
        title: "Pedidos por Nro de Pedido",
        pedidoNro: pedidoNro,
      });
    });
  },

  pedidoEstado: (req, res) => {
    db.Pedido.findAll({
      where: { estado: req.params.estado },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("nro_pedido")],
      include: [{ association: "PedidoEstado" }],
    }).then((pedidoEstado) => {
      res.render("pedidoEstado", {
        title: "Pedidos por estado",
        pedidoEstado: pedidoEstado,
      });
    });
  },

  estadosPedido: (req, res) => {
    db.PedidoEstado.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("estado")],
    }).then((estadosPedido) => {
      res.render("estadosPedido", {
        title: "Listado de Estados de Pedidos",
        estadosPedido: estadosPedido,
      });
    });
  },
  // Fin Pedidos

  //Accesorios
  accesorios: (req, res) => {
    db.Accesorios.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("ID")],
    }).then((accesorios) => {
      res.render("accesorios", {
        title: "Accesorios encontrados",
        accesorios: accesorios,
      });
    });
  },
  accesorio: (req, res) => {
    db.Accesorios.findOne({
      where: { serie_accesorio: req.params.serie_accesorio },
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
    }).then((accesorio) => {
      res.render("accesorio", {
        title: "Detalle de accesorio",
        accesorio: accesorio,
      });
    });
    console.log(this.cliente);
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
    }).then((equiposAccesorios) => {
      res.render("equiposAccesorios", {
        title: "Accesorios de equipos encontrados",
        equiposAccesorios: equiposAccesorios,
      });
    });
  },
  //Fin Accesorios

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
  //prueba eze
  // rejunte: (req, res) => {
  //   db.Clientes.findAll({
  //     attributes: { exclude: ["createdAt", "updatedAt"] },
  //     order: [sequelize.col("ID")],
  //   }).then((clientes) => {
  //     db.Accesorios.findAll({
  //       attributes: { exclude: ["createdAt", "updatedAt"] },
  //       order: [sequelize.col("ID")],
  //     }).then((accesorios) => {
  //       let todo = {
  //         clientes: clientes,
  //         accesorios: accesorios,
  //       };
  //       res.send(todo);
  //     });
  //   });
  // },

  // metodo con .then(function)
  // rejunte: (req, res) => {
  //   let clientes = db.Clientes.findAll({
  //     attributes: { exclude: ["createdAt", "updatedAt"] },
  //     order: [sequelize.col("ID")],
  //   });
  //   let accesorios = db.Accesorios.findAll({
  //     attributes: { exclude: ["createdAt", "updatedAt"] },
  //     order: [sequelize.col("ID")],
  //   });

  //   Promise.all([clientes, accesorios]).then(function ([clientes, accesorios]) {
  //     let todo = {
  //       clientes: clientes,
  //       accesorios: accesorios,
  //     };
  //     res.send(todo);
  //   });
  // },
  localizador: async (req, res) => {
    let equipo = await db.Equipos.findOne({
      where: { serie: req.params.serie },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("serie_cliente")],
      include: [
        { association: "EquipoEstado" },
        { association: "EquiposPropietarios" },
        {
          association: "DetalleEquipo",
          include: [
            { association: "AliasCliente" },
            { association: "PaisEquipo" },
            { association: "LocalidadEquipo" },
            { association: "ProvinciaEquipo" },
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
      ],
    });

    let accesorios = await db.AccesorioCliente.findAll({
      where: { serie_equipo: req.params.serie },
      attributes: { exclude: ["createdAt", "updatedAt"] },
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
    });

    let pedidos = await db.Pedido.findAll({
      where: { serie: req.params.serie },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("nro_pedido")],
      include: [{ association: "PedidoEstado" }],
    });


    let contadorActual = await db.Contadores.findOne({
      where: { 
        serie: req.params.serie,
        estado: 1
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    let contadores = await db.Contadores.findAll({
      where: { 
        serie: req.params.serie
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    // let todo = {
    //   equipo: equipo,
    //   accesorios: accesorios,
    // };
    //res.send(todo);
    res.render("Localizador", {
      title: "Localizador de Equipos",
      equipo: equipo,
      accesorios: accesorios,
      pedidos: pedidos,
      contadorActual: contadorActual,
      contadores: contadores,
    });    
  },
};
module.exports = vistaController;
