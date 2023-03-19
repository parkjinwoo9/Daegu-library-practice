사용한 쿼리문
번호, 제목, 작성자, 등록일, 첨부 , 조회
create table notice_board(
no int NOT NULL AUTO_INCREMENT PRIMARY KEY,
title varchar(50),
contents text,
author char(10),
regDate Date,
attach char(2),
hits int
);


insert into  notice_board (title,contents,author,regDate,attach,hits) values('시스템 장애신고 전화번호 070-8823-6974입니다.', '글1 내용', '관리자' , '2017-12-16' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('문화가 있는날', '글2 내용', '관리자' , '2017-12-27' , 244);
insert into notice_board (title,contents,author,regDate,attach,hits) values('2018년 시민안전테마파크 예약일정 공지사항', '글3 내용', '관리자' , '2018-01-02' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('통합예약시스템 정상운영 안내', '글4 내용', '관리자' , '2018-01-19' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('대구문화예술회관 시설대관(공연장,전시실)관련 안내', '글5 내용', '손은진' , '2018-01-22' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('체육시설사용허가신청 관련 서식', '글6 내용', '최희진' , '2018-01-22' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('통합예약시스템 서비스 개시 "옥의 티를 찾아주세요"', '글7 내용', '관리자' , '2018-01-26' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('파계 오토 캠핑장 이용중단안내(13일~15일).', '글8 내용', '관리자' , '2018-02-14' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('대구시민대학 대학연계과정 무료 수강생 모집', '글9 내용', '관리자', '2018-02-15' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('종합복지회관 제2기 기술기능교육생 모집', '글10 내용', '관리자' , '2018-02-16' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('동부여성문화회관 제2기 교육생 모집', '글11 내용', '관리자' , '2018-02-17' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('2018년 2기 여성회관 교육생 모집', '글12 내용', '관리자' , '2018-02-18' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('대구시민안전테마파크 체험증 발급관련 공지사항 입니다.', '글13 내용', '관리자' , '2018-02-19' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('팔공산 파계오토캠핑장 예약시 주의사항 안내', '글14 내용', '관리자' , '2018-02-20' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('동부여성문화회관 야간 심리상담실 운영(화,목).', '글15 내용', '관리자' , '2018-02-21' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('대구문화예술회관 제2기 예술아카데미 수강생 모집', '글16 내용', '관리자' , '2018-02-22' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('네트워크 장비 교체에 따른 홈페이지 일시중단 안내', '글17 내용', '관리자' , '2018-02-23' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('통합예약시스템 접속지연 개선.', '글18 내용', '관리자' , '2018-02-24' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('여성회관 2018년 3기 교육생 모집안내.', '글19 내용', '관리자' , '2018-02-25' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('대구시민 대학 특별과정 및 직업연계과정 수강생 모집.', '글20 내용', '관리자' , '2018-02-26' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('여름방학 청소년정치아카데미 참여자 모집(마감).', '글21 내용', '관리자' , '2018-02-27' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('동부여성문화회관 2018년 제3기 교육생모집.', '글22 내용', '관리자' , '2018-02-28' , 'N', 0);
insert into notice_board (title,contents,author,regDate,attach,hits) values('[대구시민대학 특별과정]웰다잉리더양성아카데미 수강생모집.', '글23 내용', '관리자' , '2018-02-28' , 'N', 0);

검색창 반틈 구현,,,,

페이지 네이션 구현,,,,

react-express-mysql 연동,,,,

crud 실패,,,,

react-slick 사용,,,

