import styled from 'styled-components';



const SwiperContainer = styled.div`

    min-height: auto;
    height: 40vw;
    width: 100%;
    background: url('https://wallpaperaccess.com/full/2135518.jpg');
    background-size: cover;
   /*  background-color: rgb(0, 0, 0, 0.8); */
    
    .swiper-container {
        
        width: 100%;
        height: 100%;
     
        background-color: rgb(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
    }
    
    .swiper-pagination {
        bottom: 45px;
    }

    .swiper-button-next {
        color: red;
    }
    
    .swiper-pagination-bullet-active {
        background-color: white;
        box-shadow: 0px 0px 4px 2px white;
    }
    
    @media screen and (max-width: 600px) {
        height: 450px;

        .swiper-container {
            padding-top: 0;
            height: inherit;
        }
    }
    `

export {SwiperContainer};