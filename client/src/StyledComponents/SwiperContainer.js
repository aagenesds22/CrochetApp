import styled from 'styled-components';



const SwiperContainer = styled.div`

    min-height: auto;
    height: max-content;
    width: 100%;
    
   
    background-color: rgb(0, 0, 0, 0.4);
    
    .swiper-container {
        
        width: 100%;
        height: max-content;
        padding-bottom: 1vw;
        padding-top: 1vw;
        
    }
    

    .swiper-button-next {
        color: red;
    }
    
    .swiper-pagination-bullet-active {
        background-color: red;
        box-shadow: 0px 0px 4px 2px white;
    }
    
    @media screen and (max-width: 700px) {
        height: 82vw;

        .swiper-container {
            padding-top: 0;
            height: inherit;
        }
    }
    `

export {SwiperContainer};