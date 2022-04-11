import React from 'react';
import Login1 from '../src/components/Login1'
import Login from '../src/components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from '../src/components/Signup'
import Main from '../src/components/Main'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/main" element={<Main/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
