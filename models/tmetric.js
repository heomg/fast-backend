/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmetric', {
    cmid: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      comment: '태스크 지표 ID'
    },
    ctid: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      comment: '콘텐츠 ID',
      references: {
        model: {
          tableName: 'ctask',
        },
        key: 'ctid'
      }
    },
    tkid: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      comment: '태스크 ID',
      references: {
        model: {
          tableName: 'ctask',
        },
        key: 'tkid'
      }
    },
    mtid: {
      autoIncrement: true,
      type: DataTypes.INTEGER(3),
      allowNull: false,
      comment: '지표 ID',
      references: {
        model: {
          tableName: 'metric',
        },
        key: 'mtid'
      }
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
    tableName: 'tmetric'
  });
};
