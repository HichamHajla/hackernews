
import Moment from 'react-moment';

const News = ({title, url, points, author, created_at, num_comments}) =>{
    if (title !== null){
    return(
        <div>
        <li><p><b>{title}</b> ({url})</p>
            <p>{points} points by {author} <Moment fromNow>{created_at}</Moment> | hide | {num_comments} comments</p>
        </li>
        </div>
    )}
}


export default News