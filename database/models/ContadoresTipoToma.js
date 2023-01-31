module.exports = (sequelize, dataTypes) => {
    let alias = "ContadoresTipoToma";
    let cols = {
      ID : {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      
      tipo_id: {
        type: dataTypes.INTEGER,
      },

      tipo: {
        type: dataTypes.STRING(100),
      },


    };
    let config = {
      tableName: "ContadoresTipoToma",
      timestamps: false,
    };
    const ContadoresTipoToma = sequelize.define(alias, cols, config);
    ContadoresTipoToma.associate =  (models) => {
        ContadoresTipoToma.belongsTo(models.EquipoCliente, {
            as: "TipoToma",
            //foreignKey: "id_tipo_contadores",
            foreignKey: "tipo_id",
        });
    };


    return ContadoresTipoToma;
  };