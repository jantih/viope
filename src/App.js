import React from 'react';
import './App.css';
import GitHubAPI from './Chapter6/GitHubAPI';
import Trivia from './Chapter6/Trivia';
import Userlist from './Chapter6/Userlist';
function App() {
  return (
    <>
      <Userlist/>
      <Trivia/>
      <GitHubAPI/>
    </>
  )
}
export default App; 