import '../../../css/board/search/Pagination.css';

function Pagination(props){
    const {total,booksPerPage,currentPage}=props
    const endPage=Math.ceil(total/booksPerPage)
    let pageNumber=[]
    for(var i=1; i<=endPage; i++){
        pageNumber.push(i)
    }
    const result=pageNumber.map(
        (page)=>(<span id='page'
        className={currentPage===page? 'active':''}
        onClick={()=>pageClick(page)}>{page}</span>)
    )
    const pageClick=(page)=>{
        props.setCurrentPage(page)
    }
    const prevPage=()=>{
        const {currentPage}=props
        const prevPageNo=currentPage-1
        if(prevPageNo<1){
            alert('이동불가')
        }else{
            props.setCurrentPage(prevPageNo)
        }
    }
    const nextPage=()=>{
        const{currentPage,total,booksPerPage}=props
        const nextPageNo=currentPage+1
        const endPage=Math.ceil(total/booksPerPage)
        if(nextPageNo>endPage){
            alert('이동불가')
        }else{
            props.setCurrentPage(nextPageNo)
        }
    }
    return(
        <div id='pagination'>
            <div id='pagination-inner'>
                <div>
                    총 글갯수:{props.total}<br/>
                    페이지당 글갯수:{props.booksPerPage}<br/>
                </div>
                <span id='page' onClick={prevPage}>&lt;</span>
                {result}
                <span id='page' onClick={nextPage}>&gt;</span>
            </div>
        </div>
    )
}

export default Pagination;