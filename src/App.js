import './App.css';
//import Node from './Node';
import Arrow1 from './Arrow1';
import {useState} from 'react';

function App() {

  const [searchText, setSearchText] = useState("");
 

  console.log(searchText);
  return (
    <div className="App">
      <input className="text" type="text"  value={searchText}
                onChange={e => setSearchText(e.target.value)}/>
      {searchText && (
        <Arrow1 />
        
       )} 
    </div>
  );

  
}

export default App;
