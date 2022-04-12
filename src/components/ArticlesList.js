import ArticleTeaser from './ArticleTeaser'

function ArticleList(props) {
  return (
    <div>
      {
        props.articles.map((article, index) => (
          <div key={index}>
            <ArticleTeaser {...article}/>
            <br/>
          </div>
        ))
      }
    </div>
  )
}

export default ArticleList