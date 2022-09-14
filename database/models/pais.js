module.exports = (sequelize, dataTypes) => {
  let alias = "Paises";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_pais: {
      type: dataTypes.STRING(150),
    },
    is_predeterminado: {
      type: dataTypes.INTEGER,
    },
    codigo_pais: {
      type: dataTypes.INTEGER,
    }
  };
  let config = {
    tableName: "CALLEJERO_PAIS",
    timestamps: false,
    // onDelete: "CASCADE",
  };
  const Pais = sequelize.define(alias, cols, config);
   Pais.associate = function(models) {
     Pais.hasMany(models.cliente, {
       as: "pais",
       foreignKey: "Pais_id"
     });
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
   };
  return Pais;
};
