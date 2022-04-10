import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Auth/Login';
import Todos from './components/Todos/Todos';
import Categories from './components/Categories/Categories';
import NotFound from './components/NotFound';
import AuthProvider from './contexts/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import ToDo from './components/ToDo/ToDo';
import TrainingRoomToDo from './components/ToDo/TrainingRoomToDo';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<TrainingRoomToDo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/todos' element={<ProtectedRoute><Todos /></ProtectedRoute>} />
        <Route path='/categories' element={<ProtectedRoute><Categories /></ProtectedRoute>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
