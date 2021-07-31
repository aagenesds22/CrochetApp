import React from 'react';
import Swip from './Swiper';
import {Route} from 'react-router-dom';
import TopDesigns from './TopDesigns';

function Home() {
    return (<>
            <Swip />
            <TopDesigns />
          </>
    )
}

export default Home;