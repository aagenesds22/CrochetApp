import styled, {keyframes} from 'styled-components';

const UnderlineAnimation = keyframes`
    0% {width: 0%}
    5% {width: 5%}
    10% {width: 25%}
    90% {width: 90%}
    100% {width: 100%}
`

const OpacityAnimation = keyframes`
    0% {opacity: 0}
    20% {opacity:0.25}
    40% {opacity:0.45}
    60% {opacity: 0.65}
    80% {opacity: 0.85}
    100% {opacity: 1}
    `


const MainNavBarContainer = styled.div`
    background-color:rgb(255, 255, 255, 0.96);
    height: 127px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; `


const WelcomeLogo = styled.div`
    background-color: transparent;
    width: 36vw;
    margin: 0 auto 0 48px;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;

    .welcome-message {
        font-size: 55px;
        font-weight: 900;
        color: black;
        font-family: 'Great Vibes';
    }

    .logo {
        position: relative;
        height: 105px;
        max-height: 100%;
        min-height: 45%;
        max-width: 11em;
        margin-right: 35px;
        width: 110px;
        transform: scale(1.15, 1.15);
        top: 5px;
        
    }

    @media screen and (max-width: 600px) {
        margin-left: 0;
        width: 100%;
        

        .welcome-message {
            font-size: 34px;
        }

        .logo {
            width: 90px;
            height: 88px;
        }
    }
`

const ButtonBattery = styled.div`
    min-width: 38%;
    height: 80%;
    display: flex;
    background-color: transparent;
    margin: 0 48px 0 auto;



    `

const BackgroundBtnAnim = keyframes`
    0% {background-color: transparent}
    100% {background-color: rgb(0, 0, 0, 0.1)}`


const Buttonex = styled.button`
    max-width: 7.6em;
    width: 11.5vw;
    min-width: max-content;
    height: 99%;
    background-color: transparent;
    font-size: 15px;
    
    border: none;
    position: relative;
    outline: none;

    

    .smooth-appearing {
        animation-name: ${OpacityAnimation};
        animation-duration: 0.29s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;   
    }

   


    .content  {
        
        width: 70%;
        height: 65%;
        opacity: 1;
        
    }

    &:hover{
        animation-name: ${BackgroundBtnAnim};
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
    }

    
    
    @media screen and (max-width: 600px) {
        color: black;
    }
    `




const UnderBar = styled.div`
    border-bottom: 4px solid black;
    position: absolute;
    width: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0 auto;

    ${Buttonex}:hover & {
        animation-name: ${UnderlineAnimation};
        animation-duration: 0.24s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        
    }
    

    `
const deployable = styled.div`
    width: 7em;
    height: max-content;
    border-radius: 14px;
    `

export {
    ButtonBattery, 
    Buttonex, 
    BackgroundBtnAnim, 
    deployable,
    UnderBar,
    WelcomeLogo,
    MainNavBarContainer
}