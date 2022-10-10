module.exports = (sequelize, dataTypes) => {
    let alias = "ContratoTipo";
    let cols = {
        id_tipo: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            },
        tipo_contrato_label: {
            type: dataTypes.STRING(100),
            },
        tipo_contrato_sigla: {
            type: dataTypes.STRING(100),
            },
        };
    let config = {
      tableName: "ContratoTipo",
      timestamps: false,
    };
    const ContratoTipo = sequelize.define(alias, cols, config);
        ContratoTipo.associate =  (models) => {
            ContratoTipo.hasMany(models.Contratos, {
                as: "TipoContrato",
                foreignKey: "tipo",
            });
        };
    return ContratoTipo;
  };