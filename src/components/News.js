import "../App.css"
import Moment from 'react-moment';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const News = (props) =>{

  const data =  Object.values(props)
  // console.log(data)

  const hideNews = (string) => {
    const element = document.getElementById(string);
    element.style.display = "none";
  };

  return (
    <div className="news">
      <ol className='list'>
        { data.map((e, index) => {
          if (e.title && e.title !== null && e.title !== ""){
            return (
              <li id={e.objectID} key={e.objectID}>
                <p className="info1">
                  <b>{e.title}</b> 
                  <a href={e.url} className='url'>({e.url})</a>
                </p>
                <p className="info2">{e.points} points by{" "}
                  <a className="url" href={`https://news.ycombinator.com/user?id=${e.author}`}>{e.author}</a>{" "}
                  <Moment fromNow>{e.created_at}</Moment>{" "}
                  <span style={{cursor: 'pointer'}} className="url" onClick={() => hideNews(e.objectID)}>hide</span>{" "}
                  {e.num_comments}{" "}
                  <Link className="url" to={`/${e.objectID}/comments`}>comments</Link>
                </p>
              </li>
            )
          }
        })}
      </ol>
      <Button onClick={() => props.parentSetHitsPerPage(props.parentHitsPerPage + 30)} className='button' variant="contained">NEXT</Button>
    </div>
  );
};

export default News;
