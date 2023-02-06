const db = require("../database/models");
const sequelize = require("sequelize");

const { validationResult, body } = require("express-validator");


const vistaController = {
  index: (req, res) => {
    res.render("vistas", { title: "Vistas" });
  },

  dashboard: (req, res) => {
    res.render("dashboard", { title: "Dashboard" });
  },

  version: (req, res) => {
    res.render("version", { title: "Version" });
  },

  equiposStock: (req, res) => {
    res.render("equiposStock", { title: "Equipos en Stock" });
  },

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
            { association: "AliasID" },
            { association: "Tecnico" },
          ],
        },
        {
          association: "ModeloEquipo",
          include: [
            { association: "ModeloMarca" },
            { association: "Semaforo" },

            
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
            { association: "Pais" },
            { association: "Localidad" },
            { association: "Provincia" },
          ],
        },
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

  pedidoNroInput: async (req, res) => {
    res.redirect("/vistas/pedido/" + req.query.nro_pedido);
  },

  pedidoNro: async (req, res) => {
    let pedidoNro = await db.Pedido.findOne({
      where: { nro_pedido: req.params.nro_pedido },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("nro_pedido")],
      include: [
        { association: "PedidoEstado" }, 
        { association: "PedidoTipo" }, 
        { association: "PedidoCliente" },        
        {
          association: "DomicilioPedido",
          include: [
            { association: "Pais" },
            { association: "Localidad" },
            { association: "Provincia" },
            { association: "Zona" },
            
          ],
        },  
        // { association: "PedidoPais" },
        // { association: "PedidoProvincia" },
        // { association: "PedidoLocalidad" },  
        { association: "PedidoSerie",
        include: [
          { association: "Tecnico" },
          { association: "AliasID" },
          { association: "DetalleEquipo",
          include: [
            
            {
              association: "ModeloEquipo",
              include: [
                { association: "Semaforo" },                
                { association: "ModeloMarca" },
                {
                  association: "TipoEquipo",
                  include: [{ association: "TipoContadores" }],
                },
              ],
            }
          ]
         }, 
                    
        ],
           }        
      ],
    });

    let tecnicos = await db.Usuario.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("User_Nombre")],
      where: {User_Activo: 1}
    });


    res.render("pedidoNro", {
      title: "Detalle de Pedido",
      pedidoNro: pedidoNro,
      tecnicos: tecnicos,
    });
  },

  pedidoEstado: (req, res) => {
    db.Pedido.findAll({
      where: { estado: req.params.estado },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("nro_pedido")],
      include: [
        { association: "PedidoEstado" },
        { association: "PedidoCliente" }
      ],
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
  
  generarOrdenSelect: async (req, res) => {
    let tipoPedido = await db.PedidoTipo.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("tipo_pedido_nombre")],
    });

    let clientes = await db.Clientes.findAll({
      attributes: {
        exclude: [
          "createdAt",
          "updatedAt",
          "id",
          "Id_cliente_tmp",
          "Id_prefijo",
          "cuit",
          "Mail",
          "Ejecutivo",
          "Web",
          "Actividad",
          "modalidad_pago",
          "id_domicilio",
        ],
      },
      order: [sequelize.col("Nombre_Empresa")],
       /** 
       * TODO:MQ filtar y/o alertar estados de clientes (activos, inactivos, deuda). filtar estadíos (sacar leads y prospectos)
       */
    });
  

    let contratos = await db.Contratos.findAll({
      attributes: {
        exclude: [
          "createdAt",
          "updatedAt",
          "id",
          "tipo",
          "equipos",
          "observaciones",
          "firmado",
          "sellado",
          "fecha_baja",
          "fecha_inicio",
          "fecha_vencimiento",
          "id_tipo",
          "tipo_contrato_label",
        ],
      },
      order: [sequelize.col("id_contrato")],
      include: [{ association: "TipoContrato" }],
      //where estado
    });

    let equipos = await db.EquipoCliente.findAll({
      attributes: {
        exclude: [
          "createdAt",
          "updatedAt",
          "version",
          "contacto",
          "ubicacion",
          "Piso",
          "Oficina",
          "tecnico",
          "dia_contador",
          "alias",
          "tipo_toma",
          "nro_pedido_instalacion",
          "serie",
          "serie_tmp",
          "modelo",
          "estado",
          "vida_util",
          "fecha_baja",
          "motivo_baja",
          "ingreso_stock",
          "estado_equipo",
          "propiedad",
          "sku",
          "marca",
          "vida_util",
          "estado",
          "distribuidor",
          "fecha_alta",
          "usuario_alta",
          "disponible_remoto",
          "volumen_mensual_BN",
          "volumen_mensual_Color",
          "utilidad_anios",
          "tipo_equipo",
        ],
      },
      order: [sequelize.col("serie_cliente")],
      include: [
        {
          association: "DetalleEquipo",
          include: [{ association: "ModeloEquipo" }],
        },
        //estado equipo
      ],
    });

    res.render("generarOrdenSelect", {
      title: "Generar Orden",
      tipoPedido: tipoPedido,
      clientes: clientes,
      contratos: contratos,
      equipos: equipos,
    });
  },

  // formOrden: (req, res) => {
  //   let { tipo_pedido, cliente, serie, id_contrato } = req.body;
  //   let pedidoForm = {
  //     id_contrato,
  //     id_cliente: cliente,
  //     serie,
  //     tipo_pedido,
  //   };
  //   res.render("creaOrdenForm", {
  //     title: "Crear Orden Formulario",
  //     pedidoForm: pedidoForm,

  //   });
  // },

  //pruebas con EZE Lunes
  generarOrdenForm: async (req, res) => {
    let pedidoForm = req.body;

    let cliente = await db.Clientes.findOne({
      where: { id_cliente: req.body.cliente },
      include: [
        { association: "estadoCliente" },
        { association: "ejecutivo" },
        
      ]
    });

    let tipoPedido = await db.PedidoTipo.findOne({
      where: { tipo_pedido: req.body.tipo_pedido },
    });

    let tecnicos = await db.Usuario.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("User_Nombre")],
      where: {User_Activo: 1}
    });

    let equipo = await db.EquipoCliente.findOne({
      where: { serie_cliente: req.body.serie_cliente },
      include: [
        { association: "Tecnico" },
        {
          association: "DomicilioEquipo",
          include: [
            { association: "Pais" },
            { association: "Localidad" },
            { association: "Provincia" },
            { association: "Zona" },
          ],
        },
        {
          association: "DetalleEquipo",
          include: [{ association: "ModeloEquipo" }],
        },
      ],
    });

    let PedidosAnteriores = await db.Pedido.findAll({
      where: { serie: req.body.serie_cliente },
      limit: 10,
      include: [{ association: "PedidoEstado" }],
    });

    //let pedidoForm = req.body;
    res.render("generarOrdenForm", {
      title: "Crear Orden Formulario",
      pedidoForm: pedidoForm,
      tipoPedido: tipoPedido,
      cliente: cliente,
      equipo: equipo,
      tecnicos: tecnicos,
      PedidosAnteriores: PedidosAnteriores,
    });
  },

  //prueba con eze
  generarOrdenConfirmacion: async (req, res) => {
    let {
      tipo_pedido,
      id_cliente,
      serie,
      id_contrato,
      // nro_pedido,
      detalle_pedido,
      observaciones_recepcion,
      tecnico,
      estado_pedido,
      ubicacion,
      domicilio,
      localidad,
      provincia,
      telefono,
      //zona,
      pais,
      cp,
      id_contacto,
    } = req.body;
    let pedidoNuevo = {
      id_contrato,
      id_cliente,
      serie,
      // nro_pedido,
      tipo_pedido,
      detalle_pedido,
      observaciones_recepcion,
      fecha: new Date(),
      tecnico,
      estado: estado_pedido,
      ubicacion,
      domicilio,
      localidad,
      provincia,
      telefono,
      //zona,
      pais,
      cp,
      id_contacto,
    };
    try {
      let ordenCreada = await db.Pedido.create(pedidoNuevo);
      //res.render("/vistas/pedido/"+ ordenCreada.nro_pedido, {
      res.redirect("/vistas/pedido/" + ordenCreada.nro_pedido);

      //res.render("index", {

      //title: "Orden Creada",
      //ordenCreada,

      // res.status(200).json({
      //   status: 200,
      //   message: "orden creada",
      //   ordenCreada,

      // res.render("creaOrdenForm", { //aca va la orden YA CREADA, vista de confirmacion.
      //   title: "Crear Orden",
      //   ordenCreada,

      //});

      //});
    } catch (error) {
      console.log(error.message);
    }
  },
  // Fin Crear Ordenes

  // * Actualizar orden
  actualizarOrden: async (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
    let pedidoActualizado = {
      detalle_pedido: req.body.detalle_pedido,
      observaciones_recepcion: req.body.observaciones_recepcion,
      tecnico: req.body.tecnico,
    };
    await db.Pedido.update(pedidoActualizado, {
      where: {
        nro_pedido: req.params.nro_pedido,
      },
    });
    res.redirect("/vistas/pedido/" + req.params.nro_pedido);
  } else {
    let pedidoNro = await db.Pedido.findOne({
      where: { nro_pedido: req.params.nro_pedido },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("nro_pedido")],
      include: [{ association: "PedidoEstado" }, { association: "PedidoTipo" }],
    });

    res.render("pedidoNro", {
      title: "Detalle de Pedido",
      pedidoNro: pedidoNro,
      errors: errors.mapped()
    });

  }
  },

  //Localizador
  localizadorInput: async (req, res) => {
    res.redirect("/vistas/localizador/" + req.query.serie);
  },

  localizador: async (req, res) => {
    let equipo = await db.Equipos.findOne({
      where: { serie: req.params.serie },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("serie")],
      include: [
        { association: "EquipoEstado" },
        { association: "EquiposPropietarios" },
        {
          association: "DetalleEquipo",
          include: [
            { association: "ContratoDetalle",
              include: [
                { association: "TipoContrato" },
                { association: "ContratoEstado" },
                { association: "SelladoContrato" },
                { association: "ContratoCliente",
                  include: [
                    { association: "estadioCliente" },
                    { association: "ejecutivo" },
                    { association: "estadoCliente" },                  
                  ],
                },
                
                
              ], 
            },
             

            { association: "AliasID" },
            { association: "Tecnico" },
            { association: "TipoToma" },
            {
              association: "DomicilioEquipo",
              include: [
                { association: "Pais" },
                { association: "Localidad" },
                { association: "Provincia" },
                { association: "Zona" },
                
              ],
            },
          ],
        },

        
        {
          association: "ModeloEquipo",
          include: [
            { association: "Semaforo" },                
            { association: "ModeloMarca" },
            {
              association: "TipoEquipo",
              include: [{ association: "TipoContadores" }],
            },
          ],
        },
      ],
    });

    let SemaforoContadorActual = await db.Contadores.findOne({
      where: { 
        serie: req.params.serie,
        estado: '1', 
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    let accesorios = await db.AccesorioCliente.findAll({
      where: { 
        serie_equipo: req.params.serie,
        estado: 1,
      },
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

    let accesoriosInstalar = await db.AccesorioCliente.findAll({
      where: { 
        serie_equipo: req.params.serie,
        estado: 2,
       },
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


    let accesoriosRetirar = await db.AccesorioCliente.findAll({
      where: { 
        serie_equipo: req.params.serie,
        estado: 3,
       },
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
        estado: '1',
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      limit: 10,
    });

    let contadores = await db.Contadores.findAll({
      where: {
        serie: req.params.serie,
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      limit: 10,
    });

    res.render("Localizador", {
      title: "Localizador de Equipos",
      equipo: equipo,
      accesorios: accesorios,
      accesoriosInstalar: accesoriosInstalar,
      accesoriosRetirar: accesoriosRetirar,
      pedidos: pedidos,
      contadorActual: contadorActual,
      contadores: contadores,
      SemaforoContadorActual: SemaforoContadorActual,
    });
  },

  crmInput: async (req, res) => {
    res.redirect("/vistas/crm/" + req.query.id_cliente);
  },

  crm: async (req, res) => {
    let cliente = await db.Clientes.findOne({
      where: { id_cliente: req.params.id_cliente },
      include: [
        {
          association: "DomicilioCliente",
          include: [
            { association: "Pais" },
            { association: "Localidad" },
            { association: "Provincia" },
          ],
        },
        //{ association: "DomicilioCliente" },
        //{ association: "Pais" },
        //{ association: "Localidad" },
        //{ association: "Provincia" },
        { association: "ejecutivo" },
        { association: "estadoCliente" },
        { association: "estadioCliente" },
        { association: "actividadCliente" },
        { association: "pagoModalidad" },
      ],
    });

    let contratos = await db.Contratos.findAll({
      where: { cliente_id: req.params.id_cliente },
      include: [{ association: "TipoContrato" }],
    });

    let sedes = await db.Domicilio.findAll({
      where: { id_cliente: req.params.id_cliente },
      include: [
        { association: "Pais" },
        { association: "Localidad" },
        { association: "Provincia" },
      ],
    });

    let pedidos = await db.Pedido.findAll({
      where: { id_cliente: req.params.id_cliente },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [sequelize.col("nro_pedido")],
      include: [{ association: "PedidoEstado" }],
      limit: 10,
    });

    let alias = await db.Alias.findAll({
      where: { id_cliente: req.params.id_cliente },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    res.render("crm", {
      title: "CRM",
      cliente: cliente,
      contratos: contratos,
      pedidos: pedidos,
      alias: alias,
      sedes: sedes,
    });
  },
};
module.exports = vistaController;
