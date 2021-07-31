import styled from 'styled-components';



const MainContainer = styled.div`

        min-height: 725px;
        width: 100%;
        z-index: 15;
        background: url('https://i.pinimg.com/originals/10/cb/e8/10cbe8dbf58d255307efce49b60f0472.jpg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    

        .features-web {
            position: relative;
            height: 300px;
            max-width: 415px;
            backdrop-filter: blur(0px);
            border-radius: 20px;
            display: flex;
            flex-wrap: wrap;
            background-color: rgb(122,122,122,0.1);
            transition: all 0.15s ease-in;
            font-smooth: always;
            backface-visibility: hidden;
            backdrop-filter: blur(3px);
            -webkit-font-smoothing: subpixel-antialiased;
            
        }

        .features-web:hover {
            background-color: rgb(255,255,255,0.3);
            backdrop-filter: blur(10px);
        }

       .features-web h3 {
            font-family: 'Itim';
            font-size: 27px;
            width: 100%
            margin: 0 auto;
            
       }

        .features-web p {
            margin: 0 auto;
            padding-right: 3px;
            font-size: 20px;
            font-weight: 500;
            font-family: 'Itim';
            letter-spacing: 1px;
            text-shadow: 0.1px 0.1px 2px black, 0.1px 0.1px 2px black, 0.1px 0.1px 2px black, 0.1px 0.1px 2px black;
        }

        .cardMainContainer {
            margin-top: 10%;
            opacity: 0;
            transition: all 0.1s ease-in;
        }

        
        .visibleCardContainer {
            transition: all 0.5s ease-in;
            margin-top: 5%;
            display: flex;
            flex-direction: column;
            width: 78% !important;
            height: 70%;
            opacity: 1;

        }

        .visibleCardContainer div:nth-child(2) {
            left: 320px;
        }

        .visibleCardContainer div:nth-child(3) {
            left: 640px;
        }


        @media (max-width: 600px) {
            .visibleCardContainer {
                width: 100%;
                
            }

            

            .features-web {
                
                height: 320px;
                left: 0 !important;
            }

            .features-web h3 {
                font-size: 36px;
            }
        }
   
`

export {
    MainContainer
}