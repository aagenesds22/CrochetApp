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
    background-color:rgb(65, 165, 235, 0.66);
    height: 115px;
    width: 100%;
    
    
    display: flex;
    flex-direction: row;
    box-shadow: inset 0px -15px 22px 0.5px white;
    justify-content: space-between;
    align-items: center; `


const WelcomeLogo = styled.div`
    background-color: transparent;
    height: 95%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 65px;

    .brand-title {
        font-size: 46px;
        font-weight: 900;
        color: white;
        text-shadow: 0.1px 0.1px 1px black, 0.1px 0.1px 1px black, 0.1px 0.1px 1px black, 0.1px 0.1px 1px black;
        font-family: 'Great Vibes';
    }

    .logo {
        position: relative;
        height: 105px;
        margin-right: 12px;
        max-height: 100%;
        min-height: 45%;
        
        
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
    100% {background-color: rgb(255, 255, 255, 0.50)}`


const Buttonex = styled.button`
    max-width: 7.6em;
    width: 11.5vw;
    min-width: max-content;
    height: 99%;
    background-color: transparent;
    font-size: 16px;
    font-family: Itim;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    border: none;
    position: relative;
    outline: none;
    

    

    .smooth-appearing {
        animation-name: ${OpacityAnimation};
        animation-duration: 0.5s;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;   
    }

   
    .content  {
        
        width: 70%;
        height: 65%;
        opacity: 1;
        
    }

    &:hover{
        animation-name: ${BackgroundBtnAnim};
        animation-duration: 0.39s;
        animation-fill-mode: forwards;
    }

    svg {
        height: 30px;
        width: 30px;
    }
    
    
    @media screen and (max-width: 600px) {
        color: black;
    }
    `




const UnderBar = styled.div`
    border-bottom: 2px solid black;
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