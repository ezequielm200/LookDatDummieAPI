module.exports = (sequelize, dataTypes) => {
    let alias = "AccesorioCliente";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
        },
        serie_accesorio: {
            type: dataTypes.STRING(30),
            primaryKey: true,
            //autoIncrement: false,
        },
        estado: {
            type: dataTypes.INTEGER,
        },
        serie_equipo: {
            type: dataTypes.STRING(30),
            primaryKey: true,
            //autoIncrement: false,
        },
        contrato_id: {
            type: dataTypes.STRING(30),
        },        
        nro_pedido_instalacion: {
            type: dataTypes.INTEGER,
        },
      
        
    };
    let config = {
      tableName: "AccesorioCliente",
      timestamps: false,
      // onDelete: "CASCADE",
    };
    const AccesorioCliente = sequelize.define(alias, cols, config);
    AccesorioCliente.associate = (models) => {
        AccesorioCliente.belongsTo(models.Equipos, {
          as: "EquiposAccesorio",
          foreignKey: "serie_equipo",
        });

        AccesorioCliente.belongsTo(models.Accesorios, {
          as: "Accesorio",
          foreignKey: "serie_accesorio",
        });
    };
    
    return AccesorioCliente;
  };