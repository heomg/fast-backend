/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient', {
    ptid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: '환자 ID'
    },
    ptname: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: '환자 성명'
    },
    ptage: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '환자 나이'
    },
    ptphone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: '환자 전화번호'
    },
    ptemail: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: '환자 이메일'
    },
    ptaddress: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: '환자 주소'
    },
    remark: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      comment: '주석'
    },
    cdatetime: {
      type: DataTypes.STRING(14),
      allowNull: true,
      comment: '생성일시'
    },
    cdate: {
      type: DataTypes.STRING(8),
      allowNull: true,
      comment: '생성일자'
    },
    ctime: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: '생성시간'
    }
  }, {
    sequelize,
    tableName: 'patient'
  });
};
