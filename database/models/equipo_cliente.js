module.exports = (sequelize, dataTypes) => {
    let alias = "EquipoCliente";
    let cols = {
        serie_cliente: {
            type: dataTypes.STRING(30),
            primaryKey: true,
            //autoIncrement: false,
        },
        estado: {
            type: dataTypes.INTEGER,
        },

        contrato_id: {
            type: dataTypes.STRING(30),
        },
        version: {
            type: dataTypes.INTEGER,
        },
        contacto: {
            type: dataTypes.INTEGER,
        },

        Piso: {
            type: dataTypes.STRING(200),
        },
        Oficina: {
            type: dataTypes.STRING(200),
        },
        
        ubicacion: {
            type: dataTypes.STRING(130),
        },

        
        id_domicilio: {
            type: dataTypes.INTEGER,
            primaryKey: true,
          },
        	
        tecnico: {
            type: dataTypes.INTEGER,
        },
        
        dia_contador: {
            type: dataTypes.INTEGER,
        },
        alias: {
            type: dataTypes.INTEGER,
        },
        tipo_toma: {
            type: dataTypes.INTEGER,
        },
        nro_pedido_instalacion: {
            type: dataTypes.INTEGER,
        },
      
        
    };
    let config = {
      tableName: "EquipoCliente",
      timestamps: false,
      // onDelete: "CASCADE",
    };
    const EquipoCliente = sequelize.define(alias, cols, config);
    EquipoCliente.associate = (models) => {
        EquipoCliente.belongsTo(models.Equipos, {
            as: "DetalleEquipo",
            foreignKey: "serie_cliente",
        });   


        EquipoCliente.belongsTo(models.Contratos, {
            as: "ContratoDetalle",
            foreignKey: "contrato_id",
        });
        
        EquipoCliente.belongsTo(models.Alias, {
            as: "AliasID",
            foreignKey: "alias",
        });


        
        EquipoCliente.belongsTo(models.Domicilio, {
            as: "DomicilioEquipo",
            foreignKey: "id_domicilio",
        });

        EquipoCliente.belongsTo(models.Usuario, {
            as: "Tecnico",
            foreignKey: "tecnico",
        });


        EquipoCliente.belongsTo(models.ContadoresTipoToma, {
            as: "TipoToma",
            foreignKey: "tipo_toma",
        });


        EquipoCliente.belongsTo(models.Pedido, {
            as: "PedidoSerie",
            foreignKey: "serie_cliente",
        });

        
    };
    return EquipoCliente;
  };