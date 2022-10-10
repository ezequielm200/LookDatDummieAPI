module.exports = (sequelize, dataTypes) => {
    let alias = "Accesorios";
    let cols = {
      serie_accesorio: {
        type: dataTypes.STRING(30),
        primaryKey: true,
      },
      serie_accesorio_tmp: {
        type: dataTypes.STRING(40),
      },
      id_accesorio: {
        type: dataTypes.INTEGER,
      },
      estado: {
        type: dataTypes.INTEGER,
      },
      vida_util: {
        type: dataTypes.INTEGER,
      },
      baja_usuario: {
        type: dataTypes.INTEGER,
      },
      fecha_baja: {
        type: dataTypes.DATE,
      },
      motivo_baja: {
        type: dataTypes.STRING(200),
      },
      ingreso_stock: {
        type: dataTypes.DATE,
      },
      estado_accesorio: {
        type: dataTypes.INTEGER,
      },
      propiedad: {
        type: dataTypes.INTEGER,
      },
    };
    let config = {
      tableName: "Accesorio",
      timestamps: false,
      // onDelete: "CASCADE",
    };  
    const Accesorios = sequelize.define(alias, cols, config);
    Accesorios.associate = (models) => {
      Accesorios.belongsTo(models.Propietarios, {
        as: "EquiposPropietarios",
        foreignKey: "propiedad",
      });

      Accesorios.belongsTo(models.ModeloAccesorio, {
        as: "ModeloAccesorio",
        foreignKey: "id_accesorio",
      });

      //Accesorios.belongsTo(models.AccesorioCliente, {
      //  as: "Accesorio",
      //  foreignKey: "serie_accesorio",
      //});

    };
    return Accesorios;
  };
  