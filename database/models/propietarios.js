module.exports = (sequelize, dataTypes) => {
    let alias = "Propietarios";
    let cols = {
        id_propietario: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        propietario_label: {
            type: dataTypes.STRING(30),
        },
    };
    let config = {
      tableName: "Propietario",
      timestamps: false,
      // onDelete: "CASCADE",
    };
    const Propietarios = sequelize.define(alias, cols, config);
    Propietarios.associate =  (models) => {
        Propietarios.hasMany(models.Equipos, {
            as: "EquiposPropietarios",
            foreignKey: "propiedad",
        });
    };
    return Propietarios;
  };