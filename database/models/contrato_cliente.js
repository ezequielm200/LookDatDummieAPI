module.exports = (sequelize, dataTypes) => {
    let alias = "Contratos";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cliente_id: {
        type: dataTypes.STRING(30),
      },
      id_contrato: {
        type: dataTypes.STRING(30),
      },
      tipo: {
        type: dataTypes.INTEGER,
      },
      equipos: {
        type: dataTypes.INTEGER,
      },
      
      observaciones: {
        type: dataTypes.STRING(200),
      },
      estado: {
        type: dataTypes.INTEGER,
      },
      firmado: {
        type: dataTypes.STRING(200),
      },
      sellado: {
        type: dataTypes.INTEGER,
      },
      fecha_baja: {
        type: dataTypes.DATE(),
      },
      fecha_inicio: {
        type: dataTypes.DATE(),
      },
      fecha_vencimiento: {
        type: dataTypes.DATE(),
      },
    };
    let config = {
      tableName: "CONTRATO_CLIENTE",
      timestamps: false,
      // onDelete: "CASCADE",
    };
    const Contratos = sequelize.define(alias, cols, config);
        Contratos.associate =  (models) => {
          Contratos.belongsTo(models.ContratoTipo, {
            as: "TipoContrato",
            foreignKey: "tipo",
          });

          Contratos.belongsTo(models.ContratoSellado, {
            as: "SelladoContrato",
            foreignKey: "sellado",
          });

          Contratos.belongsTo(models.ContratoEstado, {
            as: "ContratoEstado",
            foreignKey: "estado",
        });
        };
    return Contratos;
  };
  