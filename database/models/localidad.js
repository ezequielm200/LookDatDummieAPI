module.exports = (sequelize, dataTypes) => {
  let alias = "Localidad";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pais: {
      type: dataTypes.INTEGER,
    },
    provincia: {
      type: dataTypes.INTEGER,
    },
    localidad_label: {
      type: dataTypes.STRING(100),
    },
  };
  let config = {
    tableName: "CALLEJERO_LOCALIDAD",
    timestamps: false,
  };
  const Localidad = sequelize.define(alias, cols, config);
  Localidad.associate =  (models) => {
  Localidad.hasMany(models.Clientes, {
    as: "Localidad",
    foreignKey: "Localidad_id",
  });
};
  return Localidad;
};
