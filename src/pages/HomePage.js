import { useState, useEffect } from 'react';
import ArticlesAPI from '../api/ArticlesAPI';
import ArticleList from '../components/ArticlesList';


function HomePage() {
  let [articles, setArticles] = useState([])

  const loadArticles = async () => {
    const data = await ArticlesAPI.GetArticles("topstories")
    setArticles(data.map((data) => {
      return data
    }))
  }

  useEffect(() => {
    loadArticles()
  }, [])

  return (
    <div className="App">
      <ArticleList articles={articles}/>
    </div>
  )
}

export default HomePage