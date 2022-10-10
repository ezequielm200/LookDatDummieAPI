module.exports = (sequelize, dataTypes) => {
    let alias = "EstadoCliente";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estado_cliente_label: {
        type: dataTypes.STRING(150),
      },
      
    };
    let config = {
      tableName: "ClienteEstado",
      timestamps: false,
    };
    const EstadoCliente = sequelize.define(alias, cols, config);
        EstadoCliente.associate =  (models) => {
            EstadoCliente.belongsTo(models.Clientes, {
            as: "estadoCliente",
            foreignKey: "id",
            });
        };
    return EstadoCliente;
  };