module.exports = (sequelize, dataTypes) => {
    let alias = "Alias";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_cliente: {
        type: dataTypes.STRING(30),
      },
      alias_label: {
        type: dataTypes.STRING(100),
      },
      
    };
    let config = {
      tableName: "ClienteAlias",
      timestamps: false,
      // onDelete: "CASCADE",
    };
    const Alias = sequelize.define(alias, cols, config);
    Alias.associate =  (models) => {
        Alias.belongsTo(models.EquipoCliente, {
        as: "AliasCliente",
        foreignKey: "id",
      });
    };
   
    return Alias;
  };