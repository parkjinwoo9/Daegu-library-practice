import '../../../css/board/notice/NoticeBoardMain.css';
import NoticeBoardHeader from './NoticeBoardHeader';
import NoticeBoardList from './NoticeBoardList';
import NoticePagination from './NoticePagination';
import {useState} from 'react';

function NoticeBoardMain(props){
   //불러오기
   const [noticeBoardHeader,setNoticeBoardHeader] = useState([{
    no:'번호',title:'제목',writer:'작성자',write_date:'등록일',attach:'첨부',hits:'조회'
   }])
   const [currentPage, setCurrentPage]=useState(1)
   const [boardPerPage, setBoardPerPage]=useState(10)

   const currentBoardList = () =>{  
    const startIndex = (currentPage-1)*boardPerPage;
    const endIndex = startIndex+boardPerPage;
    const slicedList = props.postList.slice(startIndex,endIndex)
    return slicedList
   }

    return(
        <div id='notice-board-main'>
            <NoticeBoardHeader noticeBoardHeader={noticeBoardHeader}/>
            <NoticeBoardList postList={currentBoardList(props.postList)}/>
            <NoticePagination total={props.postList.length}
            boardPerPage={boardPerPage}
            setCurrentPage={setCurrentPage}/>
        </div>
    )
}
export default NoticeBoardMain;