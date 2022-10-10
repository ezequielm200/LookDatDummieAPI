module.exports = (sequelize, dataTypes) => {
    let alias = "Accesorio_Equipo";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      modelo_accesorio: {
        type: dataTypes.INTEGER,
      },
      modelo_equipo: {
        type: dataTypes.INTEGER,
      },
      estado: {
        type: dataTypes.INTEGER,
      },
      vinculado: {
        type: dataTypes.INTEGER,
      },

      user_vinculado: {
        type: dataTypes.INTEGER,
      },
      fecha_vinculado: {
        type: dataTypes.DATE,
      },
      
      user_desvinculado: {
        type: dataTypes.INTEGER,
      },
      fecha_desvinculado: {
        type: dataTypes.DATE,
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
      tableName: "Accesorio_Equipo",
      timestamps: false,
      // onDelete: "CASCADE",
    };
    const Accesorio_Equipo = sequelize.define(alias, cols, config);
    //Marcas.associate =  (models) => {
    //  Marcas.hasMany(models.ModeloEquipo, {
    //    as: "ModeloMarca",
    //    foreignKey: "id",
    //  });
    //};
    
    return Accesorio_Equipo;
  };