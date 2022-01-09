import './App.css';
import React from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Card from './components/card';
import Jumbotron from './components/jumbotron';


function App() {
  return (
    <div>
      <NavBar />
      <Jumbotron />
      <Card/>
      <Footer/>
    </div>
  );
}

export default App