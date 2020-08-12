/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('content', {
    ctid: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      comment: '콘텐츠 ID'
    },
    ctname: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: '콘텐츠 명칭'
    },
    ctdesc: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      comment: '콘텐츠 설명'
    },
    ctwriter: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: '콘텐츠 저작자'
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
    tableName: 'content'
  });
};
