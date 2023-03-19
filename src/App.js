import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './components/board/search/Home.js';
import Search from './components/board/search/Search';
import BoardRouter from './components/board/router/BoardRouter';
import MemberRouter from './components/board/member/MemberRouter';

import Header from './components/board/common/Header';
import Footer from './components/board/common/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/board/*' element={<BoardRouter/>}/>
          <Route path='/member/*' element={<MemberRouter/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
