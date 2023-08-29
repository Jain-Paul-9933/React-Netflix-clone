import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import'./App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action,orginals,trending,ComedyMovies,Documentaries,HorrorMovies,RomanceMovies } from "./urls";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={trending} title='Trending' isSmall/>
      <RowPost url={ComedyMovies} title='Comedy Movies' isSmall/>
      <RowPost url={Documentaries} title='Documentaries' isSmall/>
      <RowPost url={HorrorMovies} title='Horror Movies' isSmall/>
      <RowPost url={RomanceMovies} title='Romance Movies' isSmall/>
    </div>
  );
}

export default App;
