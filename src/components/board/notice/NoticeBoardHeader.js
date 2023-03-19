import '../../../css/board/notice/NoticeBoardHeader.css'


function NoticeBoardHeader (){

    return(
        <div id='notice-board-header'>
            <div className='number'>번호</div>
            <div className='wpahr'>제목</div>
            <div className='sodyd'>내용</div>
            <div className='wkrtjdwk'>작성자</div>
            <div className='regdate'>등록일</div>
            <div className='attach'>첨부</div>
            <div className='hits'>조회</div>
        </div>
    )
}

export default NoticeBoardHeader;