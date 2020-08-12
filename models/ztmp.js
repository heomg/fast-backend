/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ztmp', {
    ncd: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      comment: '코드'
    },
    nseq: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      comment: '숫자순번'
    }
  }, {
    sequelize,
    tableName: 'ztmp'
  });
};
