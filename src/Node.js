import './App.css';
import Arrow1 from './Arrow1';
import {useState} from 'react';
import App from './App';


function Node() {

    const [left, setLeft] = useState("");
    const [right, setRight] = useState("");


    return(
        <div>
       
        <input className="text" type="text" style={{marginLeft : '400px'}} onChange={e => setLeft(e.target.value)} />
        <input className="text" type="text" style={{marginRight : '400px'}} onChange={e => setRight(e.target.value)} />
        

        
        </div>
    )
}
export default Node;