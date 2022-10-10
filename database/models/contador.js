module.exports = (sequelize, dataTypes) => {
  let alias = "Contadores";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    serie: {
      type: dataTypes.STRING(30),
    },
    ContAnt_BYN: {
      type: dataTypes.INTEGER,
    },
    ContAct_BYN: {
      type: dataTypes.INTEGER,
    },
    Acumulado_BYN: {
      type: dataTypes.INTEGER,
    },
    Acumulado_BYN_Facturado: {
      type: dataTypes.INTEGER,
    },
    ContAnt_Col: {
      type: dataTypes.INTEGER,
    },
    ContAct_Col: {
      type: dataTypes.INTEGER,
    },
    Acumulado_COL: {
      type: dataTypes.INTEGER,
    },
    Acumulado_COL_Facturado: {
      type: dataTypes.INTEGER,
    },
    ContAnt_Scan: {
      type: dataTypes.INTEGER,
    },
    ContAct_Scan: {
      type: dataTypes.INTEGER,
    },
    Acumulado_Scan: {
      type: dataTypes.INTEGER,
    },
    Acumulado_Scan_Facturado: {
      type: dataTypes.INTEGER,
    },
    estado: {
      type: dataTypes.INTEGER,
    },
    cliente: {
      type: dataTypes.STRING(30),
    },
    fecha_full: {
      type: dataTypes.DATE,
    },
    contrato: {
      type: dataTypes.STRING(200),
    },
    nro_pedido: {
      type: dataTypes.INTEGER,
    },
  };
  let config = {
    tableName: "Contadores",
    timestamps: false,
    // onDelete: "CASCADE",
  };
  const Contador = sequelize.define(alias, cols, config);
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
  return Contador;
};
