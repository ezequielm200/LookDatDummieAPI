module.exports = (sequelize, dataTypes) => {
    let alias = "PagoModalidad";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Modalidad_label: {
        type: dataTypes.STRING(150),
      },
      
    };
    let config = {
      tableName: "PagoModalidad",
      timestamps: false,
    };
    const PagoModalidad = sequelize.define(alias, cols, config);
        PagoModalidad.associate =  (models) => {
            PagoModalidad.belongsTo(models.Clientes, {
                as: "pagoModalidad",
                foreignKey: "id",
            });
        };
    return PagoModalidad;
  };