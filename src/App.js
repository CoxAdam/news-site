import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={ <HomePage/> }/>
      </Routes>
    </HashRouter>
  );
}

export default App;
