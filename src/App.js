import logo from './logo.svg';
import './App.css';
import Navigation from './componentes/Navigation';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './componentes/Login/Login';
import Todos from './componentes/Todos/Todos';
import Categories from './componentes/Categories/Categories';
import NotFound from './componentes/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />
      <Routes>
        {/* <Route path='/' element={< />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
