module.exports = (sequelize, dataTypes) => {
    let alias = "ContratoEstado";
    let cols = {
        id_estado: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            },
        estado_label: {
            type: dataTypes.STRING(100),
            },
        };
    let config = {
      tableName: "ContratoEstado",
      timestamps: false,
    };
    const ContratoEstado = sequelize.define(alias, cols, config);
        ContratoEstado.associate =  (models) => {
            ContratoEstado.hasMany(models.Contratos, {
                as: "ContratoEstado",
                foreignKey: "estado",
            });
        };
    return ContratoEstado;
  };