module.exports = (sequelize, dataTypes) => {
  let alias = "Provincia";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    provincia_label: {
      type: dataTypes.STRING(150),
    },
    pais: {
      type: dataTypes.INTEGER,
    }
  };
  let config = {
    tableName: "CALLEJERO_PROVINCIA",
    timestamps: false,
  };
  const Provincia = sequelize.define(alias, cols, config);
  Provincia.associate =  (models) => {
    Provincia.hasMany(models.Clientes, {
      as: "provincias",
      foreignKey: "Provincia_id",
    });
  };
  return Provincia;
};
