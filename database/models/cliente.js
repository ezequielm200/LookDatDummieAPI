module.exports = (sequelize, dataTypes) => {
  let alias = "Clientes";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_cliente: {
      type: dataTypes.STRING(30),
    },
    Id_cliente_tmp: {
      type: dataTypes.STRING(30),
    },
    Id_prefijo: {
      type: dataTypes.STRING(2),
    },
    Nombre_Empresa: {
      type: dataTypes.STRING(200),
    },
    cuit: {
      type: dataTypes.STRING(15),
    },
    estado: {
      type: dataTypes.INTEGER,
    },
    Telefono: {
      type: dataTypes.STRING(200),
    },
    Mail: {
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
    Ejecutivo: {
      type: dataTypes.INTEGER,
    },
    Piso: {
      type: dataTypes.STRING(200),
    },
    Oficina: {
      type: dataTypes.STRING(200),
    },
    Web: {
      type: dataTypes.STRING(200),
    },
    Actividad: {
      type: dataTypes.STRING(200),
    },
    modalidad_pago_id: {
      type: dataTypes.INTEGER,
    },
    estadio_cliente: {
      type: dataTypes.INTEGER,
    },
  };
  let config = {
    tableName: "Cliente",
    timestamps: false,
    // onDelete: "CASCADE",
  };
  const Cliente = sequelize.define(alias, cols, config);
  Cliente.associate = (models) => {
    Cliente.belongsTo(models.Paises, {
      as: "pais",
      foreignKey: "Pais_id",
    });
    Cliente.belongsTo(models.Localidad, {
      as: "Localidad",
      foreignKey: "Localidad_id",
    });
    Cliente.belongsTo(models.Provincia, {
      as: "Provincia",
      foreignKey: "Provincia_id",
    });
    Cliente.belongsTo(models.Usuario, {
      as: "ejecutivo",
      foreignKey: "Ejecutivo",
    });

    Cliente.belongsTo(models.EstadoCliente, {
      as: "estadoCliente",
      foreignKey: "estado",
    });

    Cliente.belongsTo(models.EstadioCliente, {
      as: "estadioCliente",
      foreignKey: "estadio_cliente",
    });

    Cliente.belongsTo(models.ActividadCliente, {
      as: "actividadCliente",
      foreignKey: "Actividad",
    });

    Cliente.belongsTo(models.PagoModalidad, {
      as: "pagoModalidad",
      foreignKey: "modalidad_pago",
    });
  };
  return Cliente;
};
