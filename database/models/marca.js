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
  return Marcas;
};
