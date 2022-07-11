module.exports = (sequelize, dataTypes) => {
  let alias = "Equipos";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    serie: {
      type: dataTypes.STRING(30),
    },
    serie_tmp: {
      type: dataTypes.STRING(40),
    },
    modelo: {
      type: dataTypes.INTEGER,
    },
    estado: {
      type: dataTypes.INTEGER,
    },
    vida_util: {
      type: dataTypes.INTEGER,
    },
    fecha_baja: {
      type: dataTypes.DATE,
    },
    motivo_baja: {
      type: dataTypes.STRING(200),
    },
    ingreso_stock: {
      type: dataTypes.DATE,
    },
    fecha_baja: {
      type: dataTypes.DATE,
      allowNull: true,
    },
  };
  let config = {
    tableName: "EQUIPO",
    timestamps: false,
    // onDelete: "CASCADE",
  };
  const Equipo = sequelize.define(alias, cols, config);
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
  return Equipo;
};
