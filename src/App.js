
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Pokemons from './Components/Pokemons';
import PokemonsDetails from './Components/PokemonsDetails';
import ProtectedRoutes from './Components/ProtectedRoutes';
import TrainerName from './Components/TrainerName';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TrainerName/>}/>
        <Route element={<ProtectedRoutes/>}>
             <Route path="/pokemons" element={<Pokemons/>}/>
             <Route path="/pokemons/:id" element={<PokemonsDetails/>}/>
        </Route>

      </Routes>
    </HashRouter>
  );
}

export default App;
