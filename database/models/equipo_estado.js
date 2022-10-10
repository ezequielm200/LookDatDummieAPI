module.exports = (sequelize, dataTypes) => {
    let alias = "EstadoEquipo";
    let cols = {
        id_estado_equipo: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        estado_equipo_label: {
            type: dataTypes.STRING(30),
        },      
    };
    let config = {
      tableName: "EquipoEstado",
      timestamps: false,
      // onDelete: "CASCADE",
    };
    const EstadoEquipo = sequelize.define(alias, cols, config);
    EstadoEquipo.associate =  (models) => {
        EstadoEquipo.hasMany(models.Equipos, {
            as: "EquipoEstado",
            //foreignKey: "id_estado_equipo",
            foreignKey: "estado",
        });
    };
    return EstadoEquipo;
  };