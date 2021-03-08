import Arrow from '@elsdoerfer/react-arrow';
import './App.css';
import Node from './Node';

function Arrow1() {
    return(
        <div>
        <Arrow angle={225} length={25} style={{width: '55px'}}/>  
        <Arrow angle={135} length={25} style={{width: '55px'}}/> 
       
        <Node/>
        </div>
    )
}
export default Arrow1;