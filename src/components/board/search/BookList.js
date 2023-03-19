import '../../../css/board/search/BookList.css';
import Book from './Book';

function BookList (props){
    const result=props.bookList.map(
        (data)=>(<Book title={data.title}
        author={data.author}
        publisher={data.publisher}/>)
    )
    return(
        <div id='book-list'>
            {result}
        </div>
    )
}
export default BookList;