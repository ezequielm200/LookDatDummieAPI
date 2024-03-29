module.exports = (sequelize, dataTypes) => {
    let alias = "Contratos";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        //primaryKey: true,
        autoIncrement: true,
      },
      cliente_id: {
        type: dataTypes.STRING(30),
        //primaryKey: true,
      },
      id_contrato: {
        type: dataTypes.STRING(30),
        primaryKey: true,
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
        type: dataTypes.STRING(2),
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
      tableName: "ContratoCliente",
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

          Contratos.belongsTo(models.Clientes, {
            as: "ContratoCliente",
            foreignKey: "cliente_id",
            //foreignKey: "id_cliente",
          });


          // Contratos.belongsTo(models.Alias, {
          //   as: "AliasCliente",
          //   foreignKey: "cliente_id",
          // });

          Contratos.belongsTo(models.EquipoCliente, {
            as: "ContratoDetalle",
            foreignKey: "id_contrato",
        });
        };
    return Contratos;
  };
  