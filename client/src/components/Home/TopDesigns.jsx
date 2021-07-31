import React, { useState, useEffect } from 'react'
import {MainContainer} from '../../StyledComponents/TopDesigns';
import {ReactComponent as HandMade} from '../../assets/svg/1186803.svg';
import {ReactComponent as OnRequests} from '../../assets/svg/2558424.svg';
import {ReactComponent as Address} from '../../assets/svg/411763.svg';
import { GiRingBox } from 'react-icons/gi';
export default function TopDesigns () {

    const [scrollState, setScrollState] = useState(window.pageYOffset)

    useEffect(()=> {
        const setWindowY=()=> {
            return setScrollState(prevScroll => prevScroll = window.pageYOffset);
        }
        window.addEventListener('scroll', setWindowY);

        return ()=> window.removeEventListener('scroll', setWindowY);

    },[])
    const fillData = [{

    },{

    },{

    },{

    }]

    
    return (
        <MainContainer>
            <div className={scrollState < 350 ? 'cardMainContainer' : 'visibleCardContainer'}
            
                style={{
                    display: 'flex',
                    
                    width: `${window.innerWidth > 600 ? '60%' : '100%' }`,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    justifyContent: 'space-between'
            }}> 
                <div className="features-web">
                    <div style={{width: 'max-content'}}>
                        <HandMade style={{fill:'pink', height: '110px', width: '145px'}}/>
                    </div>
                    <div style={{color: 'white'}}>
                        <h3>Hecho a mano</h3>
                        
                    </div>
                    <div style={{color: 'white'}}>
                        <p>
                        Todo lo que ves está hecho 100% a mano, tomando cada detalle como imprescindible 
                            para el diseño final.
                        </p>
                    </div>
                </div>
                <div className="features-web">
                    <div style={{width: 'max-content'}}>
                        <OnRequests style={{fill: 'rgb(215, 215, 12)', marginTop:'8%', height: '110px', width: '145px'}}/>
                    </div>
                    <div style={{color: 'white'}}>
                        <h3>Pedidos</h3>
                    </div>
                    <div style={{color: 'white'}}>
                    <p>Podés realizar un pedido para la creación de un diseño en particular que no hayas visto antes en 
                            la galería.
                        </p>
                    </div>
                </div>
                <div className="features-web">
                    <div style={{width: 'max-content'}}>
                        <Address style={{fill: 'rgb(12, 165, 220)', height: '122px', width: '125px', paddingLeft: '10px', paddingRight: '10px', margin: '0 auto'}}/>
                    </div>
                    <div style={{color: 'white'}}>
                        <h3>Envíos</h3>
                    </div>
                    <div style={{color: 'white'}}>
                        <p>
                            Realizamos envíos a toda la República Argentina. En caso de estar en CABA el tiempo
                            de entrega es inmediato.
                        </p>
                    </div>
                </div>
            </div>

        </MainContainer>
    )
}