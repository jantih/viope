import React from 'react';
import './App.css';
import GitHubAPI from './Chapter6/GitHubAPI';
import GitHubAPIWInput from './Chapter6/GitHubWInput';
import Trivia from './Chapter6/Trivia';
import Userlist from './Chapter6/Userlist';
function App() {
  return (
    <>
      <Userlist/>
      <Trivia/>
      <GitHubAPI/>
      <GitHubAPIWInput/>
    </>
  )
}
export default App; 