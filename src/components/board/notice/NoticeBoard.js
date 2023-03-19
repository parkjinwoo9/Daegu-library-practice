import '../../../css/board/notice/NoticeBoard.css';

function NotcieBoard (props){
    return(
        <div id='notice-board-list'>
            <span>{props.no}</span>
            <span>{props.title}</span>
            <span>{props.contents}</span>
            <span>{props.author}</span>
            <span>{props.regDate}</span>
            <span>{props.attach}</span>
            <span>{props.hits}</span>
        </div>
    )
}

export default NotcieBoard;