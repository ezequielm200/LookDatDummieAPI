module.exports = (sequelize, dataTypes) => {
    let alias = "EquipoTipo";
    let cols = {
      id_tipo: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipo_label: {
        type: dataTypes.STRING(100),
      },

      tipo_contadores: {
        type: dataTypes.INTEGER,
      },

    };
    let config = {
      tableName: "EquipoTipo",
      timestamps: false,
    };
    const EquipoTipo = sequelize.define(alias, cols, config);
    EquipoTipo.associate =  (models) => {
        EquipoTipo.hasMany(models.ModeloEquipo, {
          as: "TipoEquipo",
          //foreignKey: "id_tipo",
          foreignKey: "tipo_equipo",
          
        });

        EquipoTipo.belongsTo(models.EquipoContadoresTipo, {
            as: "TipoContadores",
            foreignKey: "tipo_contadores",
          });

    };


    return EquipoTipo;
  };
  