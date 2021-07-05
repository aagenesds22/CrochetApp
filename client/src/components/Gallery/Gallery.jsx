import SideBar from './SideBar';
import Grid from './Grid';


function Gallery(props) {

    return (
        <div style={{
            display: 'flex'
        }}>
            <SideBar/>
            <Grid />
        </div>
    )
}

export default Gallery;