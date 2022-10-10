module.exports = (sequelize, dataTypes) => {
    let alias = "PedidoTipo";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
      },
      tipo_pedido: {
        type: dataTypes.INTEGER,
        primaryKey: true,
      },
      tipo_pedido_nombre: {
        type: dataTypes.STRING(150),
      },
    };
    let config = {
      tableName: "PedidoTipo",
      timestamps: false,
      // onDelete: "CASCADE",
    };
    const PedidoTipo = sequelize.define(alias, cols, config);
    PedidoTipo.associate =  (models) => {
        PedidoTipo.hasMany(models.Pedido, {
          as: "PedidoTipo",
          foreignKey: "tipo_pedido",
        });
      };
    return PedidoTipo;
  };
  