module.exports = (sequelize, dataTypes) => {
  let alias = "Contadores";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    serie: {
      type: dataTypes.STRING(30),
    },
    ContAnt_BYN: {
      type: dataTypes.INTEGER,
    },
    ContAct_BYN: {
      type: dataTypes.INTEGER,
    },
    Acumulado_BYN: {
      type: dataTypes.INTEGER,
    },
    Acumulado_BYN_Facturado: {
      type: dataTypes.INTEGER,
    },
    ContAnt_Col: {
      type: dataTypes.INTEGER,
    },
    ContAct_Col: {
      type: dataTypes.INTEGER,
    },
    Acumulado_COL: {
      type: dataTypes.INTEGER,
    },
    Acumulado_COL_Facturado: {
      type: dataTypes.INTEGER,
    },
    ContAnt_Scan: {
      type: dataTypes.INTEGER,
    },
    ContAct_Scan: {
      type: dataTypes.INTEGER,
    },
    Acumulado_Scan: {
      type: dataTypes.INTEGER,
    },
    Acumulado_Scan_Facturado: {
      type: dataTypes.INTEGER,
    },
    estado: {
      type: dataTypes.INTEGER,
    },
    cliente: {
      type: dataTypes.STRING(30),
    },
    fecha_full: {
      type: dataTypes.DATE,
    },
    contrato: {
      type: dataTypes.STRING(200),
    },
    nro_pedido: {
      type: dataTypes.INTEGER,
    },
  };
  let config = {
    tableName: "Contadores",
    timestamps: false,
    // onDelete: "CASCADE",
  };
  const Contador = sequelize.define(alias, cols, config);
  return Contador;
};
