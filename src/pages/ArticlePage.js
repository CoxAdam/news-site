import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ArticleAPI from '../api/ArticlesAPI';
import Article from '../components/Article';

function ArticlePage() {
  const [article, setArticle] = useState([])

  const params = (useParams())

  const loadArticle = async () => {
    const data = await ArticleAPI.fetchArticle(params.article_id)
    setArticle(data)
  }

  useEffect(() => {
    loadArticle()
  }, [])

  return (
    <div className='App'>
      <Article {...article}/>
    </div>
  )
}

export default ArticlePage