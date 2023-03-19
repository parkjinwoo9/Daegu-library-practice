import '../../../css/board/router/MemberRouter.css';
import Login from './Login';
import Register from './Register';

import {Routes,Route} from 'react-router-dom';

function MemberBoardRouter () {
    return(
        <div id='member-router'>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </div>
    )
}
export default MemberBoardRouter;
