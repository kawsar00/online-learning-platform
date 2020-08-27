import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Courses from './Components/Courses/Courses';

function App() {
  return (
    <div>
      <Navbar></Navbar> 
      <Courses></Courses>
      <footer className="text-muted text-center py-4"><small>Copyright © 2020 || <span className="text-danger font-weight-bold">KAWSAR MAHMUD</span> All Rights Reserved</small></footer>
    </div>
  );
}

export default App;
