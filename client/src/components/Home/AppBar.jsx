import React, {useState, useEffect, useLayoutEffect} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {VscChromeClose} from 'react-icons/vsc';
import {Route, Link} from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import '../../App.css';
import ViewPort from '../../hooks/WidthHook'; 
import cerebro from '../../assets/images/cerebro_svg.png';
import {ButtonBattery, UnderBar, deployable, Buttonex, WelcomeLogo, MainNavBarContainer} from '../../StyledComponents/index';



/* 
         *************************************   TO-DO LIST **************************************


                    1) AGREGAR FUNCIONALIDAD RESPONSIVE A LA BARRA
                    2) CAMBIAR FUENTE DE LOS BOTONES
                    3) PREGUNTAR POR ESTILOS 

*/

/* background-color:rgb(25, 170, 95); */



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
        <MainNavBarContainer>
            
            <WelcomeLogo>
                <img className="logo" src={cerebro} alt="any" />
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

                   {!closeIcon ? <GiHamburgerMenu className="content"/> : (
                   <><VscChromeClose className="content" />
                        <div className="smooth-appearing" 
                            style={{position: 'absolute', width: '100vw', height: '9em', right: '0%', top: '92px', zIndex:'2', backgroundColor: 'rgb(255, 255, 255, 0.85)'}}>
                            <ul style={{height: '100%', display: 'flex', flexDirection: 'column', padding: '0', justifyContent: 'space-between', listStyleType: 'none'}}>
                                {['Home', 'Galeria', 'Contacto'].map(elem => (<li style={{height: '33%'}}>{elem}</li>))}
                            </ul>
                        </div>
                   </>)}
                </Buttonex>)
            }
            
        </MainNavBarContainer>
        </header>
    )
}