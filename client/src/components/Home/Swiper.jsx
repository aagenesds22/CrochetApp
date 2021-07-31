import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube, EffectFlip, Parallax, EffectCoverflow } from 'swiper';
import ViewPort from '../../hooks/widthHook';
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
    SlideContainer,
    SlideTextContainer,
    SlidePar
} from '../../StyledComponents/index';
import video from '../../assets/mp4/final_60fe332c7a68bd012f9f34cc_315621.mp4';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube, Parallax]);


function SlideCard(props) {

    return(
        <SlideContainer>
            
                    <SizedImage src={props.crcName} />
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
            <video autoPlay muted loop id="test-background">
                <source src={video} type="video/mp4" />
            </video>
        <Swiper
          spaceBetween={0}
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