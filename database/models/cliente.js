module.exports = (sequelize, dataTypes) => {
  let alias = "Clientes";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Id_cliente: {
      type: dataTypes.STRING(20),
    },
    Id_cliente_tmp: {
      type: dataTypes.STRING(30),
    },
    Id_prefijo: {
      type: dataTypes.STRING(2),
    },
    Nombre_Empresa: {
      type: dataTypes.STRING(200),
    },
    cuit: {
      type: dataTypes.STRING(15),
    },
    estado: {
      type: dataTypes.INTEGER,
    },
    Telefono: {
      type: dataTypes.STRING(200),
    },
    Mail: {
      type: dataTypes.STRING(200),
    },
    Domicilio: {
      type: dataTypes.STRING(200),
    },
    Localidad: {
      type: dataTypes.STRING(3),
    },

    Provincia: {
      type: dataTypes.STRING(3),
    },
    Pais: {
      type: dataTypes.STRING(3),
    },
    CP: {
      type: dataTypes.STRING(20),
    },
    Ejecutivo: {
      type: dataTypes.INTEGER,
    },
    Piso: {
      type: dataTypes.STRING(200),
    },
    Oficina: {
      type: dataTypes.STRING(200),
    },
    Web: {
      type: dataTypes.STRING(200),
    },
    Actividad: {
      type: dataTypes.STRING(200),
    },
    modalidad_pago: {
      type: dataTypes.INTEGER,
    },
    
    estadio_cliente_id: {
      type: dataTypes.INTEGER,
    },
    
  };
  let config = {
    tableName: "CLIENTE",
    timestamps: false,
    // onDelete: "CASCADE",
  };
  const Cliente = sequelize.define(alias, cols, config);
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
  return Cliente;
};
