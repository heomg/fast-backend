/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('s_random', {
    rcd: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true,
      comment: '랜덤코드 R0000 '
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: '랜덤명'
    },
    mail: {
      type: DataTypes.STRING(80),
      allowNull: true,
      comment: '랜덤메일'
    },
    pwd: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: '랜덤비번'
    },
    phone: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: '랜덤전화'
    },
    sex: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: '랜덤성별'
    },
    remark: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: '랜덤주석'
    }
  }, {
    sequelize,
    tableName: 's_random'
  });
};
