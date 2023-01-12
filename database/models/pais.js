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
    },
  };
  let config = {
    tableName: "CallejeroPais",
    timestamps: false,
  };
  const Pais = sequelize.define(alias, cols, config);
  Pais.associate =  (models) => {
    Pais.hasMany(models.Domicilio, {
      as: "pais",
      foreignKey: "Pais_id",
    });

    // Pais.hasMany(models.EquipoCliente, {
    //   as: "PaisEquipo",
    //   foreignKey: "pais",
    // });
  };
  return Pais;
};
