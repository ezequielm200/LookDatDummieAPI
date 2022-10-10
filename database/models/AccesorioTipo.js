module.exports = (sequelize, dataTypes) => {
    let alias = "AccesorioTipo";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipo_accesorio: {
        type: dataTypes.STRING(150),
      },
      estado: {
        type: dataTypes.INTEGER,
      },
    };
    let config = {
      tableName: "AccesorioTipo",
      timestamps: false,
      // onDelete: "CASCADE",
    };
    const AccesorioTipo = sequelize.define(alias, cols, config);
    AccesorioTipo.associate =  (models) => {
      AccesorioTipo.hasMany(models.ModeloAccesorio, {
        as: "TipoAccesorio",
        foreignKey: "id",
      });
    };
    
    return AccesorioTipo;
  };