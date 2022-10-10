module.exports = (sequelize, dataTypes) => {
    let alias = "EquipoContadoresTipo";
    let cols = {
      id_tipo_contadores : {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipo_contadores_label: {
        type: dataTypes.STRING(100),
      },

      tipo_contadores: {
        type: dataTypes.INTEGER,
      },

    };
    let config = {
      tableName: "EquipoContadoresTipo",
      timestamps: false,
    };
    const EquipoContadoresTipo = sequelize.define(alias, cols, config);
    EquipoContadoresTipo.associate =  (models) => {
        EquipoContadoresTipo.hasMany(models.EquipoTipo, {
            as: "TipoContadores",
            //foreignKey: "id_tipo_contadores",
            foreignKey: "tipo_contadores",
        });
    };


    return EquipoContadoresTipo;
  };
  