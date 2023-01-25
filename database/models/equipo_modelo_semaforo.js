module.exports = (sequelize, dataTypes) => {
  let alias = "EquipoModeloSemaforo";
  let cols = {
    modelo: {
        type: dataTypes.STRING(100),
        primaryKey: true,
      },
    version: {
        type: dataTypes.INTEGER,
    },
    semaforo_rojo_i: {
        type: dataTypes.INTEGER,
    },
    semaforo_rojo_f: {
        type: dataTypes.INTEGER,
    },
    semaforo_amarillo_i: {
        type: dataTypes.INTEGER,
    },
    semaforo_amarillo_f: {
        type: dataTypes.INTEGER,
    },
    semaforo_verde_i: {
        type: dataTypes.INTEGER,
    },
    semaforo_verde_f: {
        type: dataTypes.INTEGER,
    },
    semaforo_tolerancia: {
        type: dataTypes.INTEGER,
    },
    semaforo_alarma_parque: {
        type: dataTypes.INTEGER,
    },
};
  let config = {
    tableName: "EquipoModeloSemaforo",
    timestamps: false,
    // onDelete: "CASCADE",
  };
  const EquipoModeloSemaforo = sequelize.define(alias, cols, config);
  EquipoModeloSemaforo.associate = (models) => {
    EquipoModeloSemaforo.hasMany(models.ModeloEquipo, {
        as: "Semaforo",
       foreignKey: "modelo",
    });

    
    // Equipo.belongsTo(models.AccesorioCliente, {
    //   as: "EquiposAccesorio",
    //   foreignKey: "serie",
    // });

  };
  return EquipoModeloSemaforo;
};
