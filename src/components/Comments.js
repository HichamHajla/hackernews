import "../App.css"
import Moment from 'react-moment';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import parse from 'html-react-parser';
import axios from 'axios';
import Navbar from "./Navbar"
import Footer from "./Footer"
import { padding } from '@mui/system';

const Comments = ({ fromRouterData }) => {

  const [commentsData, setCommentsData] = useState([]);
  const { articleID } = useParams();
  const articleData = fromRouterData && fromRouterData.find((e) => e.objectID === articleID);

  console.log(fromRouterData);
  console.log(articleID)
  console.log(articleData)
  console.log(commentsData);

  const fetchComments = async () => {
    await axios
    .get(`https://hn.algolia.com/api/v1/items/${articleID}`)
    .then(res => {
        setCommentsData(res.data.children)
        // console.log(res.data.children)
      })
    .catch( err => console.log(err))
  }

  useEffect(() => {
    fetchComments();
  }, [])

  return(
    <div className="Comments">
      <Navbar />
      <p>
        <a href={articleData.url} className='urlComments'><b>{articleData.title}</b></a>
      </p>
      <ul style={{listStyle: 'none', paddingLeft: '0'}}>
        { Object.values(commentsData).map( (e,i) => {
          if (e.text && e.text !== null && e.text !== "") {
            return(
                <li key={e.id}>
                  <p style={{fontSize: '12px'}}>
                    <b><a className="urlComments" href={`https://news.ycombinator.com/user?id=${e.author}`}>{e.author}</a></b>{" "}
                    <Moment fromNow>{e.created_at}</Moment>{" "}
                  </p>
                  <div className="info2">{parse(String(e.text))}</div>
                </li>
            );
          }
        })}
      </ul>
      {/* <Footer /> */}
    </div>
  )
}

export default Comments
