module.exports = (sequelize, dataTypes) => {
    let alias = "ActividadCliente";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      actividad_label: {
        type: dataTypes.STRING(150),
      },
      
    };
    let config = {
      tableName: "ClienteActividad",
      timestamps: false,
    };
    const ActividadCliente = sequelize.define(alias, cols, config);
        ActividadCliente.associate =  (models) => {
            ActividadCliente.belongsTo(models.Clientes, {
                as: "actividadCliente",
                foreignKey: "id",
            });
        };
    return ActividadCliente;
  };