import './App.css';
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import App from './App'
import NotFound from './components/NotFound';
import Article from './components/Article';

const MyRouter = () => {
  const [parentsData, setParentsData] = useState([]);

  // console.log(parentsData);

  return (
    <>
      <Routes>
        <Route path="/" element={<App AddUsersToData={setParentsData}/>} />
        <Route path="/:articleID" element={<Article parentsData={parentsData} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default MyRouter