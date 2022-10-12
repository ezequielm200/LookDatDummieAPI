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
    tableName: "CallejeroLocalidad",
    timestamps: false,
  };
  const Localidad = sequelize.define(alias, cols, config);
  Localidad.associate =  (models) => {
    Localidad.hasMany(models.Domicilio, {
      as: "Localidad",
      foreignKey: "Localidad_id",
    });
    Localidad.hasMany(models.EquipoCliente, {
      as: "LocalidadEquipo",
      foreignKey: "localidad",
    });
};
  return Localidad;
};
