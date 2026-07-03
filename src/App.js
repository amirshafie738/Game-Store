import React from 'react';
import Footer from './Component/Footer/Footer';
import Header from './Component/header/header';
import GamesFilterBar from './Components/gamesFilterBar/gamesFilterBar';

function App() {
  return (
    <div className="App">   
      <Header/>
      <GamesFilterBar/>
      <Footer/>    
    </div>
  );
}

export default App;