/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('s_temp', {
    tno: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: '임시번호'
    },
    tname: {
      type: DataTypes.STRING(400),
      allowNull: true,
      comment: '임시입력'
    }
  }, {
    sequelize,
    tableName: 's_temp'
  });
};
