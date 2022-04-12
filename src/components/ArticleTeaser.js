import { Link } from 'react-router-dom'

function ArticleTeaser(props) {
  return (
    <div>
      <Link to={`/articles/${props.id}`}>
        { props.title }
      </Link>
      <div className="name">Author: {props.by}</div>
      <br/>
    </div>
    
  )
}

export default ArticleTeaser