module.exports = (sequelize, dataTypes) => {
  let alias = "Equipos";
  let cols = {
    serie: {
      type: dataTypes.STRING(30),
      primaryKey: true,
    },
    serie_tmp: {
      type: dataTypes.STRING(40),
    },
    modelo: {
      type: dataTypes.INTEGER,
    },
    estado: {
      type: dataTypes.INTEGER,
    },
    vida_util: {
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
    estado_equipo: {
      type: dataTypes.INTEGER,
    },
    propiedad: {
      type: dataTypes.INTEGER,
  },
};
  let config = {
    tableName: "Equipo",
    timestamps: false,
    // onDelete: "CASCADE",
  };
  const Equipo = sequelize.define(alias, cols, config);
  Equipo.associate = (models) => {
    Equipo.belongsTo(models.ModeloEquipo, {
      as: "ModeloEquipo",
      foreignKey: "modelo",
    });

    Equipo.belongsTo(models.EquipoCliente, {
      as: "DetalleEquipo",
      foreignKey: "serie",
    });

    Equipo.belongsTo(models.EstadoEquipo, {
      as: "EquipoEstado",
      foreignKey: "estado_equipo",
    });

    Equipo.belongsTo(models.Propietarios, {
      as: "EquiposPropietarios",
      foreignKey: "propiedad",
    });

    Equipo.belongsTo(models.AccesorioCliente, {
      as: "EquiposAccesorio",
      foreignKey: "serie",
    });

  };
  return Equipo;
};
