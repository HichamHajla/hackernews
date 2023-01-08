import {useEffect, useState} from 'react';
import HashLoader from "react-spinners/ClipLoader";
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';

const App = ({ toRouterData }) => {

  // console.log(toRouterData)

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [hitsPerPage, setHitsPerPage] = useState(30)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=${hitsPerPage}`)
    .then(res => {
        setData(res.data.hits)
        setLoading(false)
        toRouterData(res.data.hits)
        // console.log(res.data.hits)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData();
  }, [hitsPerPage, query])

  return (
    <div className="app">
      { loading ?
        (<HashLoader color="#ff6600" />) :
        <>
          <Navbar />
          <News parentHitsPerPage={hitsPerPage} parentSetHitsPerPage={setHitsPerPage} {...data}/>
          <Footer parentQuery={query} parentSetQuery={setQuery}/>
        </>
      }
    </div>
  );
}

export default App;