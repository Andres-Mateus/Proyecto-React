import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import NewHeroe from './pages/NewHero';
import DeleteHero from './pages/DeleteHero';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  const API = "https://peticiones-giweb-3-8e48d-default-rtdb.firebaseio.com";

  useEffect(() => {
    fetchHeroes();
  }, []);

  const [heroes, setHeroes] = useState(
    {
      1: {
        Apodo: "",
        Nombre: "",
        Edad: "",
        Imagen: "",
        Genero: "",
        Especie: "",
        FechaNacimiento: ""
      }
    }
  );
  
  const handleSubmit = (heroe) => {
    sendHeroe(heroe)
    fetchHeroes();
  }

  const fetchHeroes = async () => {
    const response = await fetch(API +`/Heroes.json`);
    const data = await response.json();

    setHeroes(data);
  }
  
  const sendHeroe = async (heroe) => {
    const response = await fetch(API + `/Heroes.json`
                    , {
                        method: `POST`, 
                        body: JSON.stringify(heroe),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
    const data = await response.json();
    
    //console.log(data);
  }

  //JSX
  return(
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <br></br>
        <Routes>
          <Route path='/home' element={<Home heroes={heroes}></Home>}></Route>
          <Route path='/newHeroe' element={<NewHeroe onSubmit={handleSubmit}></NewHeroe>}></Route>
          {/* <Route path='/deleteHero' element={<DeleteHero heroes={heroes}></DeleteHero>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;