import {useState} from 'react';
import './App.css';
import axios from 'axios';
import Button from '@mui/material/Button';
import News from './News';

const App = () => {

  const [data, setData] = useState([])
  //const [loading, setLoading] = useState(false)

  const fetchData = () => {
    axios.get(`http://hn.algolia.com/api/v1/search?query=`)
    .then(res => {
        setData(res.data.hits)
        console.log(res.data.hits)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="app">
    <Button onClick={()=> fetchData()} variant="contained">Call data</Button>

    <div className="navbar">
    </div>
    <div className="news">
    <ol>
    {data.map((element, index) => {
      return(
        <div key={index}>
        
        <News {...element}/>
        
        </div>
      )
    })}
    </ol>
    </div> 
    <footer>
    </footer>
    </div>
  );
}

export default App;
