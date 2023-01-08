import './App.css';
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import App from './App'
import NotFound from './components/NotFound';
import Comments from './components/Comments';

const MyRouter = () => {

  const [routerData, setRouterData] = useState([]);
  // console.log(routerData);

  return (
    <>
      <Routes>
        <Route path="/" element={<App toRouterData={setRouterData}/>} />
        <Route path="/:articleID/comments" element={<Comments fromRouterData={routerData} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default MyRouter