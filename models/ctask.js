/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctask', {
    ctid: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      comment: '콘텐츠 ID',
      references: {
        model: {
          tableName: 'content',
        },
        key: 'ctid'
      }
    },
    tkid: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      comment: '태크스 ID'
    },
    tkname: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: '테스크 명칭'
    },
    tkdesc: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      comment: '주석'
    },
    point: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      comment: '태스크 최대 점수'
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
    tableName: 'ctask'
  });
};
