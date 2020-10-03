/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tresult', {
    tacd: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      comment: '테스크 수행 결과 코드 ex) 1000002-1004-10021-412-1000 ex)ptid-ctid-pcid-tkid-seqno'
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
    pcid: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      comment: '환자 콘텐츠 플레이 ID'
    },
    tkid: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      comment: '태스크 ID'
    },
    seqno: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      comment: '태스크 수행 순번'
    },
    etime: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      comment: '측정결과값: 태스크 수행 시간'
    },
    rtime: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      comment: '측정결과값: 태스크 반응 시간'
    },
    epoint: {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: '태스크 수행 점수'
    },
    lthumbfirstmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 엄지 손가락 첫 번째 관절의 최소값',
    },
    lthumbfirstmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 엄지 손가락 첫 번째 관절의 최대값',
    },
    lthumbsecondmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 엄지 손가락 두 번째 관절의 최소값',
    },
    lthumbsecondmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 엄지 손가락 두 번째 관절의 최대값',
    },
    lindexfirstmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 검지 손가락 첫 번째 관절의 최소값',
    },
    lindexfirstmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 검지 손가락 첫 번째 관절의 최대값',
    },
    lindexsecondmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 검지 손가락 두 번째 관절의 최소값',
    },
    lindexsecondmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 검지 손가락 두 번째 관절의 최대값',
    },
    lmiddlefirstmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 중지 손가락 첫 번째 관절의 최소값',
    },
    lmiddlefirstmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 중지 손가락 첫 번째 관절의 최대값',
    },
    lmiddlesecondmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 중지 손가락 두 번째 관절의 최소값',
    },
    lmiddlesecondmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 중지 손가락 두 번째 관절의 최대값',
    },
    lringfirstmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 약지 손가락 첫 번째 관절의 최소값',
    },
    lringfirstmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 약지 손가락 첫 번째 관절의 최대값',
    },
    lringsecondmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 약지 손가락 두 번째 관절의 최소값',
    },
    lringsecondmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 약지 손가락 두 번째 관절의 최대값',
    },
    lpinkyfirstmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 새끼 손가락 첫 번째 관절의 최소값',
    },
    lpinkyfirstmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 새끼 손가락 첫 번째 관절의 최대값',
    },
    lpinkysecondmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 새끼 손가락 두 번째 관절의 최소값',
    },
    lpinkysecondmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 왼손 새끼 손가락 두 번째 관절의 최대값',
    },
    rthumbfirstmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 엄지 손가락 첫 번째 관절의 최소값',
    },
    rthumbfirstmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 엄지 손가락 첫 번째 관절의 최대값',
    },
    rthumbsecondmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 엄지 손가락 두 번째 관절의 최소값',
    },
    rthumbsecondmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 엄지 손가락 두 번째 관절의 최대값',
    },
    rindexfirstmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 검지 손가락 첫 번째 관절의 최소값',
    },
    rindexfirstmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 검지 손가락 첫 번째 관절의 최대값',
    },
    rindexsecondmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 검지 손가락 두 번째 관절의 최소값',
    },
    rindexsecondmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 검지 손가락 두 번째 관절의 최대값',
    },
    rmiddlefirstmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 중지 손가락 첫 번째 관절의 최소값',
    },
    rmiddlefirstmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 중지 손가락 첫 번째 관절의 최대값',
    },
    rmiddlesecondmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 중지 손가락 두 번째 관절의 최소값',
    },
    rmiddlesecondmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 중지 손가락 두 번째 관절의 최대값',
    },
    rringfirstmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 약지 손가락 첫 번째 관절의 최소값',
    },
    rringfirstmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 약지 손가락 첫 번째 관절의 최대값',
    },
    rringsecondmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 약지 손가락 두 번째 관절의 최소값',
    },
    rringsecondmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 약지 손가락 두 번째 관절의 최대값',
    },
    rpinkyfirstmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 새끼 손가락 첫 번째 관절의 최소값',
    },
    rpinkyfirstmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 새끼 손가락 첫 번째 관절의 최대값',
    },
    rpinkysecondmin: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 새끼 손가락 두 번째 관절의 최소값',
    },
    rpinkysecondmax: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: '측정결과값: 오른손 새끼 손가락 두 번째 관절의 최대값',
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
