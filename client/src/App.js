import './App.css';
/* import NavBar from './components/AppBar';
import Swip from './components/Home/Swiper'; */
import {Route} from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/AppBar/AppBar';
import GlobalFonts from './assets/fonts/fonts';
import Gallery from './components/Gallery/Gallery';






/* 

            ************************** TODO LIST ***************************

            1) TERMINAR LA BARRA 
            2) AGREGAR SWIPER.JS (carousel)
            3) COMPLETAR LA GALERÍA CON MODELOS, FILTROS Y BÚSQUEDA
            4) COMPLETAR LA PESTAÑA DE CONTACTO
            5) PREGUNTAR POR OTRA FUNCIONALIDAD EXTRA
            6) DEPLOY

*/


function App() {
  return (
    <div className="App">
      <GlobalFonts />  
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={Home}/>
        <Route exact path='/galleryCrochet' component={Gallery} />
        <Route exact path='/galleryCrochet/:type' component={'NONE'} />
    
    </div>
  );
}

export default App;
