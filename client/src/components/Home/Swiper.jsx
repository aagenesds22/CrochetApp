import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube, EffectFlip, Parallax, EffectCoverflow } from 'swiper';
import ViewPort from '../../hooks/WidthHook';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../App.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-cube/effect-cube.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/effect-flip/effect-flip.scss';
import CrochetOne from '../../assets/images/151999238_250214350030646_6266559600849033044_n.jpg';
import CrochetTwo from '../../assets/images/158087904_2610875615878302_9091682248887231191_n.jpg';
import CrochetThree from '../../assets/images/158218562_765010324149459_8214090096182555794_n.jpg';
import CrochetFour from '../../assets/images/166593657_305612587567183_2443171526193574640_n.jpg';
import styled from 'styled-components';
import {
    SwiperContainer,
    SizedImage,
} from '../../StyledComponents/index';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube, Parallax]);



const SlideContainer = styled.div`
   
   width: 90%;
   display: flex;
   flex-direction: row;
   position: relative;
   align-items: center;
   top: 25px;
   justify-content: space-around;

   @media screen and (max-width: 600px) {
       width: 100%;
       top: 0;
       height: 100%;
   }
   
   `

const SlideTextContainer = styled.div`
      width: 49%;
      margin-bottom: 29px;
      display: flex;
      flex-direction: column;
      justify-content: baseline;

      .title-crochet {
          font-size: 72px;
          height: min-content;
          margin-top: 0px;
          letter-spacing: 9px;
          font-weight: 400;
          margin-bottom: 0;
          font-family: 'Itim';
          color: white;
          
      }

      @media screen and (max-width: 600px){
        position: absolute;
    
        top: 0;
        left: 0;
        right: 25%;
        width: 60%;

        .title-crochet {
            font-size: 60px;
            color: rgb(255, 255, 255, 0.7);
        }
      }
`

const SlidePar = styled.p`
        color: white;
        width: 100%;
        font-size: 21px;
        text-shadow: 1px 1px 0.1px black, 1px 1px 0.1px black, 1px 1px 0.1px black, 1px 1px 0.1px black;
        font-family: 'Itim';

`

function SlideCard(props) {
    return(
        <SlideContainer>
            
                    <SizedImage src={props.crcName}></SizedImage>
                    <SlideTextContainer>
                    <h3 className="title-crochet">{props.title}</h3>
                    <SlidePar>{props.textDescription}</SlidePar>
                    </SlideTextContainer>
            
        </SlideContainer>
    )
}


export default () => {

    const {width} = ViewPort();
    const renderSwiper = (effect) => {
        const textSlide = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea repellat minima tenetur! Quibusdam dolores deserunt sequi autem iste excepturi ut natus voluptas ab tenetur, placeat est assumenda. Dolore, odio vero.";
        return (
            <SwiperContainer>
        {/* {width > 700 ? ( */}
        <Swiper
          spaceBetween={0}
      /*     breakpoints={{
              640: {
                  width: 640,
                  slidesPerView: 1

              },
                768: {
                      width: 768,
                      slidesPerView: 2,
                      
                  },
              }
          } */
          parallax
          effect={effect}
          navigation
          pagination
          onSlideChange={() => console.log('slide changed')}
          onSwiper={(swiper) => console.log(swiper) }
        >
            
            <SwiperSlide><SlideCard crcName={CrochetOne} title={width > 600 && 'Amigurumis'} textDescription={width > 600 && textSlide}/></SwiperSlide>
            <SwiperSlide><SlideCard crcName={CrochetTwo} title='Abrigos' textDescription={width > 600 && textSlide} /></SwiperSlide>
            <SwiperSlide><SlideCard crcName={CrochetThree} title='Atrapasueños' textDescription={width > 600 && textSlide} /></SwiperSlide>
            <SwiperSlide><SlideCard crcName={CrochetThree} title='Sweters' textDescription={width > 600 && textSlide} /></SwiperSlide>
            <SwiperSlide><SlideCard crcName={CrochetFour} title='Hogar' textDescription={width > 600 && textSlide} /></SwiperSlide>
            <SwiperSlide><SlideCard crcName={CrochetFour} title='Ponchos' textDescription={width > 600 && textSlide} /></SwiperSlide>
          

        </Swiper>
        
        
   {/*  ) : (<h1>any</h1>)
        } */}
    </SwiperContainer> 
        )
    }

    return (

    <div>
        {width < 600 && renderSwiper('fade')}
        {width > 600 && renderSwiper('slide')}
    </div>
    )

}