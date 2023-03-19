import '../../../css/board/notice/NoticePagination.css';

function NoticePagination (props) {
    const {total,boardPerPage}=props //비구조화할당 편하다....
    const endPage = Math.ceil(total/boardPerPage)
    //22/10 올림해주면됨..
    let pageNumbers=[]
    for(var i=1; i<=endPage; i++){
        pageNumbers.push(i)
    }
    console.log(pageNumbers)
    const result = pageNumbers.map(
        (page)=>(<span id='page' onClick={()=>pageClick(page)}>{page}</span>)
    )

    const pageClick = (page) =>{
        alert(page)
        props.setCurrentPage(page)//postMain으로 넘겨야댐
    }

    return(
        <div id="notice-pagination">
            <div id='page-numbers'>{result}</div>
        </div>
    )
}

export default NoticePagination;