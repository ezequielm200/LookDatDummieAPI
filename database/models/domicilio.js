module.exports = (sequelize, dataTypes) => {
    let alias = "Domicilio";
    let cols = {
      ID: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_cliente: {
        type: dataTypes.STRING(30),
      },
      Label: {
        type: dataTypes.STRING(200),
      },
      
      Telefono: {
        type: dataTypes.STRING(200),
      },
      
      Domicilio: {
        type: dataTypes.STRING(200),
      },
      Localidad_id: {
        type: dataTypes.INTEGER,
      },
  
      Provincia_id: {
        type: dataTypes.INTEGER,
      },
      Pais_id: {
        type: dataTypes.INTEGER,
      },
      CP: {
        type: dataTypes.STRING(20),
      },
      
      Piso: {
        type: dataTypes.STRING(200),
      },
      Oficina: {
        type: dataTypes.STRING(200),
      },
      zona: {
        type: dataTypes.INTEGER,
        primaryKey: true,
      },
        
    };
    let config = {
      tableName: "Domicilio",
      timestamps: false,
      // onDelete: "CASCADE",
    };
    const Domicilio = sequelize.define(alias, cols, config);
    Domicilio.associate = (models) => {
        Domicilio.hasMany(models.Clientes, {
            as: "DomicilioCliente",
            foreignKey: "id_domicilio",
        });
        
        Domicilio.hasMany(models.EquipoCliente, {
            as: "DomicilioEquipo",
            foreignKey: "id_domicilio",
        });  

        Domicilio.belongsTo(models.Paises, {
            as: "pais",
            foreignKey: "Pais_id",
        });
        Domicilio.belongsTo(models.Localidad, {
            as: "Localidad",
            foreignKey: "Localidad_id",
        });
        Domicilio.belongsTo(models.Provincia, {
            as: "Provincia",
            foreignKey: "Provincia_id",
        });
        // Domicilio.belongsTo(models.Zona, {
        //   as: "Zona",
        //   foreignKey: "zona",
        // });
      
    };
    return Domicilio;
  };
  