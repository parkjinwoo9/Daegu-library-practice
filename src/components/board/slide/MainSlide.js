import '../../../css/board/slide/MainSlide.css';
import SlideImg1 from '../../../img/slideImg1.png';
import SlideImg2 from '../../../img/slideImg2.jfif';
import SlideImg3 from '../../../img/slideImg3.jfif';
import SlideImg4 from '../../../img/slideImg4.png';
import SlideImg5 from '../../../img/slideImg5.jfif';
import SlideImg6 from '../../../img/slideImg6.jfif';
import SlideImg7 from '../../../img/slideImg7.png';
import next from '../../../img/next.png'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function MainSlide () {

    const imgList = [SlideImg1,SlideImg2,SlideImg3,SlideImg4
        ,SlideImg5,SlideImg6,SlideImg7,]

    const result = imgList.map(
        (data)=>(<div className='img'><img src={data}/></div>)
    )
    const settings = {
        arrows:false,
        dots:false,
        infinte:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        nextArrow:(
            <div id='next'>
                <img src={next}/>
            </div>
        ),
        // prevArrow:(
        //     <div id='prev'>
        //         <img src={prev}/>
        //     </div>
        // ),

    }
    return(
        <div id='main-slide'>
            <Slider {...settings}>
                {result}
            </Slider>
        </div>
    )
}
export default MainSlide;