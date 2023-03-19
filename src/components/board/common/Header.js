import '../../../css/board/common/Header.css';
import logo from '../../../img/logo.png';
import faceBook from "../../../img/facebook.png";
import instagram from "../../../img/instagram.png";
import $ from 'jquery';
import {useEffect} from 'react';

function Header () {
    useEffect(()=>{
        $('#gnb>li').on({
            "mouseover":function(){
                var idx=$(this).index()
                console.log(idx)
                $("#gnb>li").eq(idx).find("#lnb-wrap").show()
            },
            "mouseout":function(){
                $('#gnb>li').find("#lnb-wrap").hide()
            }
        })
    },[])
    return(
        <div id="header">
            <div id='header-top'>
                <div id="logo">
                    <a href="/">
                        <img src={logo} alt="logo"/>
                    </a>    
                </div>
                <div id='util'>
                    <ul>
                        <li>
                            <a href="">통합허브시스템 로그인</a>
                        </li>
                        <li>
                            <a href="">회원가입</a>
                        </li>
                        <li>
                            <a href="">아이디찾기</a>
                        </li>
                        <li>
                            <a href="">비밀번호찾기</a>
                        </li>
                        <li>
                            <a href="">통합회원인증</a>
                        </li>
                    </ul>
                </div>
                <div id='sns'>
                    <a href=''>
                        <img src={faceBook} alt="페북"/>
                    </a>
                    <a href=''>
                        <img src={instagram} alt="인스타"/>
                    </a>
                </div>
            </div>


            
            <div id='header-bottom'>
                <ul id='gnb'>   
                    <li>
                        <a href="">자료검색</a>
                        <div id="lnb-wrap">
                            <ul id="lnb">
                                <li>
                                    <a  href="">자료검색</a>
                                </li>
                                <li>
                                    <a href="">신착자료</a>
                                </li>
                                <li>
                                    <a href="">대출베스트</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="">평생교육</a>
                        <div id="lnb-wrap">
                            <ul id="lnb">
                                <li>
                                    <a href="">강좌소개</a>
                                </li>
                                <li>
                                    <a href="">수강신청</a>
                                </li>
                                <li>
                                    <a href="">평생교육정보센터</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="">독서문화행사</a>
                        <div id="lnb-wrap">
                            <ul id="lnb">
                                <li>
                                    <a href="">독서문화행사</a>
                                </li>
                                <li>
                                    <a href="">온라인 독서문화행사</a>
                                </li>
                                <li>
                                    <a href="">독서회</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="">열린공간</a>
                        <div id="lnb-wrap">
                            <ul id="lnb">
                                <li>
                                    <a href="">공지사항</a>
                                </li>
                                <li>
                                    <a href="">이달의행사</a>
                                </li>
                                <li>
                                    <a href="">자주묻는질문</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="">정보공개</a>
                        <div id="lnb-wrap">
                            <ul id="lnb">
                                <li>
                                    <a href="">입찰정보</a>
                                </li>
                                <li>
                                    <a href="">수의계약내역공개</a>
                                </li>
                                <li>
                                    <a href="">학교장터(S2B)</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="">도서관안내</a>
                        <div id="lnb-wrap">
                            <ul id="lnb">
                                <li>
                                    <a href="">인사말</a>
                                </li>
                                <li>
                                    <a href="">일반현황</a>
                                </li>
                                <li>
                                    <a href="">이용안내</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="">나의도서관</a>
                        <div id="lnb-wrap">
                            <ul id="lnb">
                                <li>
                                    <a href="">대출현황</a>
                                </li>
                                <li>
                                    <a href="">예약현황</a>
                                </li>
                                <li>
                                    <a href="">희망도서 신청현황</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;