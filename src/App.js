import React from 'react';
import './App.css';
import Home from './Chapter8/Home';
import Todolist from './Chapter8/Todolist';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/todolist">Todolist</Link>{' '}
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/todolist' element={<Todolist/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App; 