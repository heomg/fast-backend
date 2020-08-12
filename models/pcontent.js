/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pcontent', {
    pcid: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      comment: '환자 컨텐츠 플레이 ID'
    },
    ptid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: '환자 ID',
      references: {
        model: {
          tableName: 'patient',
        },
        key: 'ptid'
      }
    },
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
    score: {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: '종합 점수'
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
      comment: '생성일'
    },
    ctime: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: '생성시간'
    }
  }, {
    sequelize,
    tableName: 'pcontent'
  });
};
