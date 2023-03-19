import '../../../css/board/notice/NoticeBoardList.css';
import NoticeBoard from './NoticeBoard';

function NoticeBoardList (props) {
    const result = props.postList.map(
        (data)=>(<NoticeBoard no={data.no} title={data.title}
            contents={data.contents} author={data.author}
            regDate={data.regDate} attach={data.attach}
            hits={data.hits}/>)
    )
    return(
        <div id='notice-board-list'>
            {result}
        </div>
    )
}

export default NoticeBoardList;