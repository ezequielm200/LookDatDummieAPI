module.exports = (sequelize, dataTypes) => {
    let alias = "EquipoCliente";
    let cols = {
        serie_cliente: {
            type: dataTypes.STRING(30),
            primaryKey: true,
            //autoIncrement: false,
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
        direccion: {
            type: dataTypes.STRING(200),
        },
        ubicacion: {
            type: dataTypes.STRING(130),
        },
        localidad: {
            type: dataTypes.INTEGER,
        },
        provincia: {
            type: dataTypes.INTEGER,
        },
        pais: {
            type: dataTypes.INTEGER,
        },
        cp: {
            type: dataTypes.STRING(30),
        },
        zona: {
            type: dataTypes.INTEGER,
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
        
        EquipoCliente.belongsTo(models.Alias, {
        as: "AliasCliente",
        foreignKey: "alias",
        });

        EquipoCliente.belongsTo(models.Paises, {
            as: "PaisEquipo",
            foreignKey: "pais",
        });
        EquipoCliente.belongsTo(models.Localidad, {
           as: "LocalidadEquipo",
           foreignKey: "localidad",
        });
        EquipoCliente.belongsTo(models.Provincia, {
            as: "ProvinciaEquipo",
            foreignKey: "provincia",
        });
        EquipoCliente.belongsTo(models.Usuario, {
            as: "Tecnico",
            foreignKey: "tecnico",
        });
    };
    return EquipoCliente;
  };