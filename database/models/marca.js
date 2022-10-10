module.exports = (sequelize, dataTypes) => {
  let alias = "Marcas";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    marca_label: {
      type: dataTypes.STRING(30),
    },
    
    is_equipo: {
      type: dataTypes.INTEGER,
    },
    is_insumo: {
      type: dataTypes.INTEGER,
    },
    is_repuesto: {
      type: dataTypes.INTEGER,
    }
  };
  let config = {
    tableName: "Marca",
    timestamps: false,
    // onDelete: "CASCADE",
  };
  const Marcas = sequelize.define(alias, cols, config);
  Marcas.associate =  (models) => {
    Marcas.hasMany(models.ModeloEquipo, {
      as: "ModeloMarca",
      foreignKey: "id",
    });
    
    Marcas.hasMany(models.ModeloAccesorio, {
      as: "ModeloMarcaAccesorio",
      foreignKey: "id",
    });
  };
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
  return Marcas;
};