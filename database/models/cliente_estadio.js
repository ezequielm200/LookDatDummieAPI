module.exports = (sequelize, dataTypes) => {
    let alias = "EstadioCliente";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estadio_cliente_label: {
        type: dataTypes.STRING(150),
      },
      
    };
    let config = {
      tableName: "ClienteEstadio",
      timestamps: false,
    };
    const EstadioCliente = sequelize.define(alias, cols, config);
        EstadioCliente.associate =  (models) => {
            EstadioCliente.belongsTo(models.Clientes, {
            as: "estadioCliente",
            foreignKey: "id",
            });
        };
    return EstadioCliente;
  };