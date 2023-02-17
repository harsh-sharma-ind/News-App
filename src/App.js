import Home from './components/Home';
import Article from './components/Article';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  

  return (
    <div className="App">
      
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' exact element= {<Home supp={supp}/>}/>
          <Route path='/article'  element= {<Article/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
