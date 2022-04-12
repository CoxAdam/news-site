import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ArticlePage from './pages/ArticlePage';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={ <HomePage/> }/>
        <Route exact path="/articles/:article_id" element={ <ArticlePage/> }/>
      </Routes>
    </HashRouter>
  );
}

export default App;
