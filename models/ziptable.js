/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ziptable', {
    zipno: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: '순번'
    },
    zipcode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: '우편번호'
    },
    sido: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: '시도'
    },
    gungu: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: '군구'
    },
    dong: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: '읍면동'
    },
    dong2: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: '읍면동검색'
    },
    lee: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: '리'
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: '표기주소'
    },
    schadds: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: '검색주소'
    },
    adate: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: '변경일자'
    }
  }, {
    sequelize,
    tableName: 'ziptable'
  });
};
