import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ArticlePage from './pages/ArticlePage';
import AppNav from './components/AppNav';
import SectionsPage from './pages/SectionsPage';


function App() {
  return (
    <div>
      <HashRouter>
        <AppNav/>
        <Routes>
          <Route exact path="/" element={ <HomePage/> }/>
          <Route exact path="/articles/:article_id" element={ <ArticlePage/> }/>
          <Route exact path="/:section" element={ <SectionsPage/> }/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
