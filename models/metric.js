/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('metric', {
    mtid: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      comment: '지표 ID'
    },
    mtname: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: '지표 명칭'
    },
    mtunit: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: '지표 단위'
    },
    mtdesc: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      comment: '지표 설명'
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
    tableName: 'metric'
  });
};
