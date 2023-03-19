import '../../../css/board/search/Home.css'
import bgTxt from '../../../img/bgTxt.png'

import quick1 from '../../../img/quick1.png'
import quick2 from '../../../img/quick2.png'
import quick3 from '../../../img/quick3.png'
import quick4 from '../../../img/quick4.png'
import quick5 from '../../../img/quick5.png'
import quick6 from '../../../img/quick6.png'
import quick7 from '../../../img/quick7.png'
import quick8 from '../../../img/quick8.png'

import $ from 'jquery'
import {useState,useEffect} from 'react';
import BoardTab from '../tab/BoardTab';
import BookTab from '../tab/BookTab';
import MainSlide from '../slide/MainSlide';


function Home () {
    useEffect(()=>{
        $('.quick>span').on({
            "mouseover":function(){
                var idx=$(this).index()
                console.log(idx)
                $('.quick span').eq(idx).find('.circle').show()
            },
            "mouseout":function(){
                $('.quick span').find('.circle').hide()
            }
        })
    },[])

    const [query,setQuery]=useState('')
    const searchBook=(e)=>{
        alert("검색")
        e.preventDefault()
        if(query.trim()===''){
            alert('검색어를 입력하세요')
            return
        }
        window.location.href=`/search?query=${query}`
    }
    const inputChange=(e)=>{
        console.log(e.target.value)
        setQuery(e.target.value)
    }

    return(
        <div id="home">
           <div id='search-area'>
                <img id='bg-img'/>
                <img id="bg-txt" src={bgTxt}/>
                <form id='search-form'>
                    <div id="input-area">
                        <label>통합자료검색</label>
                        <input type="text" 
                        placeholder='검색어를 입력하세요'
                        onChange={inputChange}
                        />
                        <button 
                        id='search-input'
                        onClick={searchBook}>검색</button>
                    </div>
                </form>
           </div>
           <div id='quick-menu'>
                <div className='quick'>
                    <div className='circle'>
                        <img src={quick1} alt='quick1'/>
                    </div>
                    <span>대출조회</span>
                </div>
                <div className='quick'>
                    <div className='circle'>
                        <img src={quick2} alt='quick2'/>
                    </div>
                    <span>희망도서신청</span>
                </div>
                <div className='quick'>
                    <div className='circle'>
                        <img src={quick3} alt='quick3'/>
                    </div>
                    <span>수강신청</span>
                </div>
                <div className='quick'>
                    <div className='circle'>
                        <img src={quick4} alt='quick4'/>
                    </div>
                    <span>자료검색</span>
                </div>
                <div className='quick'>
                    <div className='circle'>
                        <img src={quick5} alt='quick5'/>
                    </div>
                    <span>이달의행사</span>
                </div>
                <div className='quick'>
                    <div className='circle'>
                        <img src={quick6} alt='quick6'/>
                    </div>
                    <span>대구전자도서관</span>
                </div>
                <div className='quick'>
                    <div className='circle'>
                        <img src={quick7} alt='quick7'/>
                    </div>
                    <span>대구학생전자도..</span>
                </div>
                <div className='quick'>
                    <div className='circle'>
                        <img src={quick8} alt='quick8'/>
                    </div>
                    <span>낙육재원문DB</span>
                </div>
           </div>

           <div id='main-line'>
                <div id='main-slide'>
                    <MainSlide/>
                </div>
                <div id='main-left'>
                    <div id='main-contents'>
                        <div id='cont1'>
                            <BoardTab/>
                        </div>
                        <div id='cont2'>
                            <BookTab/>
                        </div>
                        <div id='lib-info'>
                            버튼영역
                        </div>
                        <div id='cont-area'>
                            콘텐츠영역
                        </div>

                    </div>
                    
                </div>
           </div>
        </div>
    )
}
export default Home;