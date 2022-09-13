module.exports = (sequelize, dataTypes) => {
  let alias = "Pedidos";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_contrato: {
      type: dataTypes.STRING(100),
    },
    serie: {
      type: dataTypes.STRING(100),
    },
    Nro_pedido: {
      type: dataTypes.INTEGER,
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
    Tecnico: {
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
    Pais: {
      type: dataTypes.INTEGER,
    },
    CP: {
      type: dataTypes.STRING(8),
    },
    id_contacto: {
      type: dataTypes.STRING(100),
    },
  
  };
  let config = {
    tableName: "PEDIDOS",
    timestamps: false,
    // onDelete: "CASCADE",
  };
  const Pedido = sequelize.define(alias, cols, config);
  // Product.associate = function (models) {
  //   Product.belongsTo(models.Colores, {
  //     as: "color",
  //     foreignKey: "id_color"
  //   });
  //   Product.belongsTo(models.Talles, {
  //     as: "talle",
  //     foreignKey: "id_talle"
  //   });
  //   Product.belongsTo(models.Transacciones, {
  //     as: "transaccion",
  //     foreignKey: "id_transaccion"
  //   });
  //   Product.belongsTo(models.Users, {
  //     as: "vendedor",
  //     foreignKey: "id_vendedor"
  //   });
  //   Product.belongsToMany(models.Categorias, {
  //     as: "categorias",
  //     through: "Producto_Categoria",
  //     foreignKey: "id_Producto",
  //     otherKey: "id_Categoria",
  //     timestamps: false
  //   });
  //   Product.hasMany(models.imagenProducto, {
  //     as: "imagenes",
  //     foreignKey: "id_Producto",
  //     timestamps: false
  //   });
  // };
  return Pedido;
};
