import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams, useLocation } from "react-router-dom";
import ArticleAPI from '../api/ArticlesAPI';
import ArticleList from '../components/ArticlesList';

function SectionsPage() {
  const [articles, setArticles] = useState([])

  const params = useParams()  
  const location = useLocation()

  const loadArticles = async () => {
    let data = await ArticleAPI.GetArticles(params.section)
    setArticles(data)
  }

  useEffect(() => {
    loadArticles()
  }, [location.key])

  return (
    <Container>
      <ArticleList articles={articles}/>
    </Container>
  )
}

export default SectionsPage