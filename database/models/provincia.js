module.exports = (sequelize, dataTypes) => {
  let alias = "Provincia";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    provincia_nombre: {
      type: dataTypes.STRING(150),
    },
    pais: {
      type: dataTypes.INTEGER,
    }
  };
  let config = {
    tableName: "CallejeroProvincia",
    timestamps: false,
  };
  const Provincia = sequelize.define(alias, cols, config);
  Provincia.associate =  (models) => {
    Provincia.hasMany(models.Domicilio, {
      as: "provincias",
      foreignKey: "Provincia_id",
    });

    // Provincia.hasMany(models.Pedido, {
    //   as: "PedidoProvincia",
    //   foreignKey: "provincia",
    // });


    // Provincia.hasMany(models.EquipoCliente, {
    //   as: "ProvinciaEquipo",
    //   foreignKey: "provincia",
    // });
  };
  return Provincia;
};
