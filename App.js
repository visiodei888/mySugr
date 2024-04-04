import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Upload from './Upload';
import Chat from './Chat';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/upload"
            element={<Upload setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/sign-up" element={<Chat />} />
        </Routes>
      </Router>
      </UserProvider>
  );
}


export default App;
