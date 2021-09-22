const tablaModel = (connection, Sequelize) => {
  const tabla = connection.define('tabla', {
    campo: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    otrocampo: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  });
  return Tabla
}
