import '../../../css/board/tab/BoardTab.css';

import RecentNoticeList from './RecentNoticeList';
import RecentBidList from './RecentBidList';

import {useEffect} from 'react';
import $ from 'jquery';

function BoardTab () {

    useEffect(()=>{
        tab()
    },[])

    const tab=()=>{
        $('#tab-btn>ul>li').on('click',function(){
            var idx=$(this).index()
            console.log(idx)
            $('#tab-contents>div').hide()
            $('#tab-contents>div').eq(idx).show()
        })
    }
    return(
        <div id='board-tab'>
            <div id='tab-btn'>
                <ul>
                    <li id='tab'>
                        공지사항
                    </li>
                    <li className='slush'>/</li>
                    <li id='tab' >
                        입찰정보
                    </li>
                </ul>
            </div>
            <div id='tab-contents'>
                <div id='notice-list'>
                    <RecentNoticeList/>
                </div>
                <div></div>
                <div id='bid-list'>
                    <RecentBidList/>
                </div>
            </div>
        </div>
    )
}
export default BoardTab;