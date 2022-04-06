import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './components/Auth/Login';
import Todos from './components/Todos/Todos';
import Categories from './components/Categories/Categories';
import NotFound from './components/NotFound';
import AuthProvider from './contexts/AuthContext';
import ToDo from './components/ToDo/ToDo';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<ToDo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/todos' element={<ProtectedRoute><Todos /></ProtectedRoute>} />
        <Route path='/categories' element={<Categories />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
