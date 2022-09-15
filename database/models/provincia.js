module.exports = (sequelize, dataTypes) => {
  let alias = "Provincias";
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
    },
  };
  let config = {
    tableName: "CALLEJERO_PROVINCIAS",
    timestamps: false,
  };
  const Provincias = sequelize.define(alias, cols, config);
  Provincias.associate =  (models) => {
    Provincias.hasMany(models.Clientes, {
      as: "provincias",
      foreignKey: "Pais_id",
    });
  };
  return Provincias;
};
