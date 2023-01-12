module.exports = (sequelize, dataTypes) => {
  let alias = "Pedido";
  let cols = {
    // id: {
    //   type: dataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    id_contrato: {
      type: dataTypes.STRING(100),
    },
    id_cliente: {
      type: dataTypes.STRING(100),
    },
    serie: {
      type: dataTypes.STRING(100),
    },
    nro_pedido: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo_pedido: {
      type: dataTypes.INTEGER,
    },
    detalle_pedido: {
      type: dataTypes.STRING(150),
    },
    observaciones_recepcion: {
      type: dataTypes.STRING(200),
    },
    fecha: {
      type: dataTypes.DATE,
      allowNull: true,
    },
    tecnico: {
      type: dataTypes.INTEGER,
    },
    estado: {
      type: dataTypes.INTEGER,
    },
    ubicacion: {
      type: dataTypes.STRING(200),
    },
    domicilio: {
      type: dataTypes.STRING(200),
    },
    localidad: {
      type: dataTypes.INTEGER,
    },
    zona: {
      type: dataTypes.INTEGER,
    },
    pais: {
      type: dataTypes.INTEGER,
    },
    provincia: {
      type: dataTypes.INTEGER,
    },
    telefono: {
      type: dataTypes.STRING(200),
    },
    cp: {
      type: dataTypes.STRING(8),
    },
    id_contacto: {
      type: dataTypes.STRING(100),
    },
  
  };
  let config = {
    tableName: "Pedido",
    timestamps: false,
    // onDelete: "CASCADE",
  };
  const Pedido = sequelize.define(alias, cols, config);
  Pedido.associate =  (models) => {
    Pedido.belongsTo(models.PedidoEstado, {
      as: "PedidoEstado",
      foreignKey: "estado",
    });

    Pedido.belongsTo(models.PedidoTipo, {
      as: "PedidoTipo",
      foreignKey: "tipo_pedido",
    });
  };
  return Pedido;
};
