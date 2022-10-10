module.exports = (sequelize, dataTypes) => {
    let alias = "ModeloAccesorio";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
      },
      id_accesorio: {
        type: dataTypes.STRING(100),
        primaryKey: true,
      },
      modelo: {
        type: dataTypes.STRING(100),
      },
      descripcion: {
        type: dataTypes.STRING(150),
      },
      tipo_accesorio: {
        type: dataTypes.INTEGER,
      },
      marca: {
        type: dataTypes.INTEGER,
      },
      rendimiento_original: {
        type: dataTypes.INTEGER,
      },
      rendimiento_generico: {
        type: dataTypes.INTEGER,
      },
      cod_distribuidor: {
        type: dataTypes.STRING(150),
      },
      cod_fabricante: {
        type: dataTypes.STRING(150),
      },
      omitir_reporte_vinculacion: {
        type: dataTypes.INTEGER,
      },
      estado: {
        type: dataTypes.INTEGER,
      },
      fecha_alta: {
        type: dataTypes.DATE,
      },
      usuario_alta: {
        type: dataTypes.INTEGER,
      },
    };
    let config = {
      tableName: "AccesorioModeloParque",
      timestamps: false,
      // onDelete: "CASCADE",
    };
    const ModeloAccesorio = sequelize.define(alias, cols, config);
    ModeloAccesorio.associate =  (models) => {
      ModeloAccesorio.hasMany(models.Accesorios, {
        as: "ModeloAccesorio",
        foreignKey: "id_accesorio",
      });
      ModeloAccesorio.belongsTo(models.Marcas, {
        as: "ModeloMarcaAccesorio",
        foreignKey: "marca",
      });
      ModeloAccesorio.belongsTo(models.AccesorioTipo, {
        as: "TipoAccesorio",
        foreignKey: "tipo_accesorio",
      });
    };
    
    return ModeloAccesorio;
  };