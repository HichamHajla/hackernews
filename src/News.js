import "./App.css"
import Moment from 'react-moment';

const News = ({title, url, points, author, created_at, num_comments, mykey}) =>{

  const hideNews = () => {
    const element = document.getElementById(mykey);
    element.style.display = "none";
  };

  if (title !== null && title !== ""){
    return (
      <li id={mykey}>
        <p className="info1"><b>{title}</b> <a href={url} className='url'>({url})</a></p>
        <p className="info2">{points} points by <a className="url" href={`https://news.ycombinator.com/user?id=${author}`}>{author}</a> <Moment fromNow>{created_at}</Moment>{" "}
          <span style={{cursor: 'pointer'}} className="url" onClick={() => hideNews()}>hide</span> {num_comments} comments</p>
      </li>
    );
  }
};

export default News;
