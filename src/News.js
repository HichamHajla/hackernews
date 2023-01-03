import "./App.css"
import Moment from 'react-moment';

const News = ({title, url, points, author, created_at, num_comments}) =>{
    if (title !== null){
    return(
        <div>
        <li><p className="info1"><b>{title}</b> <a href={url} className='url'>({url})</a></p>
            <p className="info2">{points} points by <a className="url" href={`https://news.ycombinator.com/user?id=${author}`}>{author}</a> <Moment fromNow>{created_at}</Moment> | hide | {num_comments} comments</p>
        </li>
        </div>
    )}
}


export default News