/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('znum', {
    nseq: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      comment: '숫자순번'
    }
  }, {
    sequelize,
    tableName: 'znum'
  });
};
