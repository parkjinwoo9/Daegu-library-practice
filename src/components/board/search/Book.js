import '../../../css/board/search/Book.css';


//post.js
function Book (props){
    return(
        <div id='book'>
            <span>
                {props.title}
            </span>
            <span>
                {props.author}
            </span>
            <span>
                {props.publisher}
            </span>
        </div>
    )
}
export default Book;