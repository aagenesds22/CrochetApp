import React, {useState, useEffect, useLayoutEffect} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {VscChromeClose} from 'react-icons/vsc';
import {Route, Link} from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import '../../App.css';
import ViewPort from '../Complementary/WidthHook';
import loro from '../../assets/images/eebc39cfb8730adc1fb9f0698d187660.jpg';



/* 
         *************************************   TO-DO LIST **************************************


                    1) AGREGAR FUNCIONALIDAD RESPONSIVE A LA BARRA
                    2) CAMBIAR FUENTE DE LOS BOTONES
                    3) PREGUNTAR POR ESTILOS 

*/

/* background-color:rgb(25, 170, 95); */


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


const StyledComponent = styled.div`
    background-color:rgb(255, 255, 255, 0.85);
    height: 92px;
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
    justify-content: space-between;
    align-items: center;

    .welcome-message {
        font-size: 4.6vw;
        font-weight: 900;
        color: black;
        font-family: 'Great Vibes';
    }

    .logo {
        height: 7.2vw;
        max-height: 80%;
        min-height: 45%;
        max-width: 3.2em;
        width: 7.2vw;
        border-radius: 50%;
        box-shadow: 0px 0px 1px 2px black;
    }

    @media screen and (max-width: 700px) {
        margin-left: 0;
        width: 100%;
        justify-content: space-around;

        .welcome-message {
            font-size: 42px;
        }
    }
`

const ButtonBattery = styled.div`
    min-width: 38%;
    height: 100%;
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
    color: rgb(21, 75, 200);
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

    
    
    @media screen and (max-width: 700px) {
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
        animation-duration: 0.2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        
    }
    

    `
const deployable = styled.div`
    width: 7em;
    height: max-content;
    border-radius: 14px;
    `

/* const CloseBtnContainer =  */

export default function NavBar() {

   /*  const [width, setWidth] = useState(window.innerWidth); */
    
   const [closeIcon, setCloseIcon] = useState(false);
    const {width} = ViewPort();


    useEffect(() => {

        const closeMenu = () => {
             setCloseIcon(false);
        }

        
        window.addEventListener('resize', closeMenu);

        

        return ()=> {
            
            window.removeEventListener('resize', closeMenu)};
    }, [])

   /*  useEffect(()=> {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);


        return () => window.removeEventListener('resize', handleWindowResize);

    }, []) */

  /*   const deployableMenu = () => {
        return (

        )
    } */

    return (
        <header className="App-header">
        <StyledComponent>
            
            <WelcomeLogo>
                <img className="logo" src={loro} alt="any" />
                <span className="welcome-message">Y me puse a tejer</span>
                </WelcomeLogo>
                
            {width > 700 ? (<ButtonBattery>
                <Link to='/'>
                    <Buttonex key={1}>Home
                    <UnderBar />
                    </Buttonex>
                    </Link>
                    
                    <Link to ='/galleryCrochet'>
                    <Buttonex key={3}>Galería
                    <UnderBar /></Buttonex>
                    </Link>

                    <Buttonex key={2}>Contacto
                    <UnderBar />
                    </Buttonex>

               </ButtonBattery>) : (
               
               <Buttonex onClick={()=> setCloseIcon(!closeIcon)}>

                   {!closeIcon ? <GiHamburgerMenu className="content"/> : (<><VscChromeClose className="content" />
                   <div className="smooth-appearing" style={{position: 'absolute', width: '100vw', height: '9em', right: '0%', top: '92px', zIndex:'2', backgroundColor: 'rgb(255, 255, 255, 0.85)'}}>
                       <ul style={{height: '100%', display: 'flex', flexDirection: 'column', padding: '0', justifyContent: 'space-between', listStyleType: 'none'}}>
                           {['Home', 'Galeria', 'Contacto'].map(elem => (<li style={{height: '33%'}}>{elem}</li>))}
                       </ul>
                   </div>
                   </>)}
                </Buttonex>)
            }
            
        </StyledComponent>
        </header>
    )
}