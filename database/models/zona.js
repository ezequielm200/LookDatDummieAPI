module.exports = (sequelize, dataTypes) => {
    let alias = "Zonas";
    let cols = {
      ID: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      zona_label: {
        type: dataTypes.STRING(30),
      },
      
      
    };
    let config = {
      tableName: "Zona",
      timestamps: false,
      // onDelete: "CASCADE",
    };
    const Zona = sequelize.define(alias, cols, config);
    // Zona.associate =  (models) => {
    //     Zona.hasMany(models.Domicilio, {
    //     as: "Zona",
    //     foreignKey: "zona"
    //     });
      
     
    // };
    return Zona;
  };
  