module.exports = (sequelize, dataTypes) => {
    let alias = "ContratoSellado";
    let cols = {
        id_condicion: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            },
        condicion_detalle: {
            type: dataTypes.STRING(100),
            },
        };
    let config = {
      tableName: "ContratoCondicionSellado",
      timestamps: false,
    };
    const ContratoSellado = sequelize.define(alias, cols, config);
        ContratoSellado.associate =  (models) => {
            ContratoSellado.hasMany(models.Contratos, {
                as: "SelladoContrato",
                foreignKey: "sellado",
            });
        };
    return ContratoSellado;
  };