import styled from 'styled-components';



const SwiperContainer = styled.div`

    min-height: auto;
    height: 40vw;
    width: 100%;
    background-size: cover;
    
    
    .swiper-container {
        
        width: 100%;
        height: 100%;
        background-color: rgb(255, 255, 255, 0.15);
        
    }

    #test-background {
        position: absolute;
        min-height: 100%;
        min-width: 100%;
        z-index: 0;
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


    const SlideContainer = styled.div`
   
    width: 90%;
    display: flex;
    margin: 0 auto;
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
           text-shadow: 0.1px 0.1px 2px black, 0.1px 0.1px 2px black, 0.1px 0.1px 2px black, 0.1px 0.1px 2px black ;
           
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


export {
    SlideContainer,
    SlideTextContainer,
    SlidePar,
    SwiperContainer};