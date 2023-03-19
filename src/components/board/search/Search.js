import '../../../css/board/search/Search.css';
import {useState,useEffect} from 'react';
import queryString from 'query-string';
import BookList from './BookList';
import Pagination from './Pagination';


//App.js
function Search () {
    const [bookList, setBookList]=useState([
        {title:'과학1',author:"이수찬",publisher:"한빛1"},
        {title:'과학2',author:"이현준",publisher:"한빛2"},
        {title:'과학3',author:"배이한",publisher:"한빛3"},
        {title:'과학4',author:"류승범",publisher:"한빛4"},
        {title:'과학5',author:"이혁찬",publisher:"한빛5"},
        {title:'과학6',author:"안세민",publisher:"한빛6"},
        {title:'과학7',author:"김태진",publisher:"한빛7"},
        {title:'과학8',author:"김대환",publisher:"한빛8"},
        {title:'과학9',author:"김지웅",publisher:"한빛9"},
        {title:'과학10',author:"구제희",publisher:"한빛10"},
    ])
    const [booksPerPage,setBooksPerPagae]=useState(3)
    const [currentPage,setCurrentPage]=useState(1);
   
    const currentBookList=(bookList)=>{
        const startIndex=(currentPage-1)*booksPerPage
        const endIndex=startIndex+booksPerPage
        const slicedList=bookList.slice(startIndex,endIndex)
        return slicedList
    }

    useEffect(()=>{
        console.log('search!')
        console.log(window.location)
        console.log(window.location.href)
        console.log(window.location.search)
        const queryObj=queryString.parse(window.location.search)
        const query=queryObj.query
        console.log('query')
        console.log(query)
    },[])

    return(
        <div id='search'>
            <div id='search-filter-area'>
                <form id='search-filter-form'>
                    <div id='input-area'>
                        <h1>자료검색</h1>
                        <div id='title-box'>
                            <input type='text' id='re-search-input'
                            placeholder='도서 제목을 입력하세요'/>
                        </div>
                    </div>
                    <div id='input-filter-area'>
                        <div id='filter-left'>
                            <div>
                                <label className='author'>저자</label>
                                <input className='author' type="text"/>
                            </div>
                            <div>
                                <label>키워드</label>
                                <input type="text"/>
                            </div>
                            <div>
                                <label className='subject'>주제</label>
                                <select className='subject'>
                                    <option>전체</option>
                                    <option>종류</option>
                                    <option>철학</option>
                                </select>
                            </div>
                        </div>
                        <div id="filter-right">
                            <div>
                                <label>발행처</label>
                                <input type="text" id='published'/>
                            </div>
                            <div id='published-year'>
                                <label>발행년도</label>
                                <input type="text" id='start-year'/>
                                <span>-</span>
                                <input type="text" id="end-year"/>
                            </div>
                            <div id='data-type'>
                                <input type='radio' name='book-type'/>
                                <label>자료형태</label>
                                <input type='radio' name='book-type'/>
                                <label>통합</label>
                                <input type='radio' name='book-type'/>
                                <label>도서</label>
                                <input type='radio' name='book-type'/>
                                <label>비도서</label>
                                
                            </div>
                        </div>
                    </div>
                    <div id='btn-area'>
                        <div id='btn-area-inner'>
                            <button>검색하기</button>
                            <button>다국어입력기</button>
                            <button>검색초기화</button>
                        </div>
                    </div>
                </form>
            </div>
            <div id='search-result'>
                <div id='re-search'>

                </div>
                <BookList bookList={currentBookList(bookList)}/>
                <Pagination total={bookList.length}
                    booksPerPage={booksPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    )
}
export default Search;