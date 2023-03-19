import '../../../css/board/router/BoardRouter.css';

import NoticeBoardMain from '../notice/NoticeBoardMain';
import UserBoardMain from '../user/UserBoardMain';
import {Routes,Route} from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react';


function BoardRouter () {
    const [postList,setPostList]=useState([]);

    useEffect(()=>{
        getBoardData()
      },[])

      const getBoardData = async() => {
        const result = await axios('/notice')
        console.log(result)
        console.log(result.data)
        setPostList(result.data)
      }

    return(
        <div id="board-router">
            <Routes>
                <Route path="/notice" element={<NoticeBoardMain postList={postList}/>}/>
                <Route path="/user" element={<UserBoardMain />}/>
            </Routes>
        </div>
    )
}

export default BoardRouter;