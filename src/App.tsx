import React from 'react';
import './App.css';
import  Navbar from './components/Navbar/Navbar';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

 function App() {
  return (
    <div className="app-wrapper">
        <Header/>
      <div className="flex">
          <Navbar/>
          <Profile/>
      </div>

    </div>
  );
}

export default App;
