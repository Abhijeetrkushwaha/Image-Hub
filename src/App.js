import React from 'react';
import Search from './components/Search';
import Body from './components/Body';
import './App.css';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Search />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
