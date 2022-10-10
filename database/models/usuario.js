module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      User_Login: {
        type: dataTypes.STRING(150),
      },
      User_Password: {
        type: dataTypes.STRING(150),
      },
      User_Nombre: {
        type: dataTypes.STRING(150),
      },
      
      User_Activo: {
        type: dataTypes.INTEGER,
      },
      User_Visible: {
        type: dataTypes.INTEGER,
      },
      User_Mail: {
        type: dataTypes.STRING(150),
      }
    };
    let config = {
      tableName: "Usuario",
      timestamps: false,
    };
    const Usuario = sequelize.define(alias, cols, config);
        Usuario.associate =  (models) => {
            Usuario.belongsTo(models.Clientes, {
            as: "ejecutivo",
            foreignKey: "id",
            });
        };
    return Usuario;
  };