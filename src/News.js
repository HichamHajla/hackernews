
const News = ({title, url, points, author, created_at, num_comments}) =>{
    return(
        <div>
        <li><p><b>{title}</b> ({url})</p>
            <p>{points} points by {author} {created_at} | hide | {num_comments} comments</p>
        </li>
        </div>
    )
}


export default News