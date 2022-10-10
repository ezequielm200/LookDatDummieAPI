module.exports = (sequelize, dataTypes) => {
    let alias = "PedidoEstado";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
      },
      estado: {
        type: dataTypes.INTEGER,
        primaryKey: true,
      },
      estado_nombre: {
        type: dataTypes.STRING(150),
      },
    };
    let config = {
      tableName: "PedidoEstado",
      timestamps: false,
      // onDelete: "CASCADE",
    };
    const PedidoEstado = sequelize.define(alias, cols, config);
    PedidoEstado.associate =  (models) => {
        PedidoEstado.hasMany(models.Pedido, {
          as: "PedidoEstado",
          foreignKey: "estado",
        });
      };
    return PedidoEstado;
  };
  