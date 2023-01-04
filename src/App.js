import {useEffect, useState, CSSProperties} from 'react';
//import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
//import HashLoader from "react-spinners/ClipLoader";
import './App.css';
import axios from 'axios';
import News from './News';

const App = () => {

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [hitsPerPage, setHitsPerPage] = useState(30)
  //const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData();
  }, [hitsPerPage, query])

  const fetchData = async () => {
    await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=${hitsPerPage}`)
    .then(res => {
        setData(res.data.hits)
        //setLoading(!loading)
        console.log(res.data.hits)
    })
    .catch(err => console.log(err))
  }


  return (
    <div className="app">
    <div className="navbar">
    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg" alt="logo"/>
    <h3 className='title'>Hacker News</h3>
    <p className="links"><a href="#new">new</a> | <a href="#past">past</a> | <a href={"https://news.ycombinator.com/newcomments"}>comments</a> | <a href="#ask">ask</a> | <a href="#show">show</a> | <a href="#jobs">jobs</a> | <a href="#submit">submit</a> <a className="login" href="#login">login</a> </p>
    </div>
    <div className="news">

    <ol className='list'>
        {data.map((element, index) => {
        return(
        <div key={index}>
        
        <News {...element}/>
        
        </div>
      )
    })}
    </ol>
    <Button onClick={() => setHitsPerPage(hitsPerPage + 30)} className='button' variant="contained">NEXT</Button>
    </div> 

    <footer className='footer'>
    <div className='footerLinks'><a href="#Guidelines">Guidelines</a> | <a href="#FAQ">FAQ</a> | <a href="#API">comments</a> | <a href="#Security">Security</a> | <a href="#Legal">Legal</a> | <a href="#Apply">Apply to YC</a> | <a href="#contact">Contact</a></div>
    <div className='search'>Search : <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)}/></div>
    </footer>
    </div>
  );
}

export default App;


//loading ? (<HashLoader color="#ff6600" />) : 
//<Pagination className="pagination" count={10}>