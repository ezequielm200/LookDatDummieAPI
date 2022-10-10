module.exports = (sequelize, dataTypes) => {
    let alias = "AccesorioModeloPrecio";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_accesorio: {
        type: dataTypes.STRING(100),
      },
      precio: {
        type: dataTypes.INTEGER,
      },
      version_lista: {
        type: dataTypes.INTEGER,
      },
      vigencia_lista: {
        type: dataTypes.DATE,
      },
      precio_venta: {
        type: dataTypes.INTEGER,
      },
      precio_renta: {
        type: dataTypes.INTEGER,
      },
      iva: {
        type: dataTypes.INTEGER,
      },
      utilidad_anios: {
        type: dataTypes.INTEGER,
      },
      usuario_modificacion: {
        type: dataTypes.INTEGER,
      },
      fecha_modificacion: {
        type: dataTypes.DATE,
      },      
    };
    let config = {
      tableName: "AccesorioModeloPrecio",
      timestamps: false,
      // onDelete: "CASCADE",
    };
    const AccesorioModeloPrecio = sequelize.define(alias, cols, config);
    //Marcas.associate =  (models) => {
    //  Marcas.hasMany(models.ModeloEquipo, {
    //    as: "ModeloMarca",
    //    foreignKey: "id",
    //  });
    //};
    
    return AccesorioModeloPrecio;
  };