module.exports = (sequelize, dataTypes) => {
    let alias = "ModeloEquipo";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      sku: {
        type: dataTypes.STRING(100),
      },

      modelo: {
        type: dataTypes.STRING(100),
        primaryKey: true,
      },

      marca: {
        type: dataTypes.INTEGER,
      },

      vida_util: {
        type: dataTypes.INTEGER,
      },

      estado: {
        type: dataTypes.INTEGER,
      },

      distribuidor: {
        type: dataTypes.INTEGER,
      },

      fecha_alta: {
        type: dataTypes.DATE,
      },

      usuario_alta: {
        type: dataTypes.INTEGER,
      },

      disponible_remoto: {
        type: dataTypes.INTEGER,
      },

      volumen_mensual_BN: {
        type: dataTypes.INTEGER,
      },

      volumen_mensual_Color: {
        type: dataTypes.INTEGER,
      },

      utilidad_anios: {
        type: dataTypes.INTEGER,
      },

      tipo_equipo: {
        type: dataTypes.INTEGER,
      },

    };
    let config = {
      tableName: "EquipoModeloParque",
      timestamps: false,
    };
    const ModeloEquipo = sequelize.define(alias, cols, config);
    ModeloEquipo.associate =  (models) => {
      ModeloEquipo.hasMany(models.Equipos, {
        as: "ModeloEquipo",
        foreignKey: "modelo",
      });

      ModeloEquipo.belongsTo(models.Marcas, {
        as: "ModeloMarca",
        foreignKey: "marca",
      });

      ModeloEquipo.belongsTo(models.EquipoTipo, {
        as: "TipoEquipo",
        foreignKey: "tipo_equipo",
        //foreignKey: "id_tipo",
      });


      ModeloEquipo.belongsTo(models.EquipoModeloSemaforo, {
        as: "Semaforo",
        foreignKey: "modelo",
      });
      
    };

    return ModeloEquipo;
  };
  