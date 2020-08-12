/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tresult', {
    tacd: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      comment: '테스크 수행 결과 코드 ex) 20000001-10140-121-42412-100000 ex)tacd-ptid-ctid-pcid-tacd'
    },
    pcid: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      comment: '환자 콘텐츠 플레이 ID'
    },
    ptid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: '환자 ID'
    },
    ctid: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      comment: '콘텐츠 ID'
    },
    epoint: {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: '태스크 수행 점수'
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
    tableName: 'tresult'
  });
};
