import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar';
import "./App.css"
import InicioPage from './pages/InicioPage';
import ServiciosPage from './pages/ServiciosPage';
import EquipoPage from './pages/EquipoPage';
import RazonPage from './pages/RazonPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Navigate to="/inicio"/>}/>
          <Route path='/inicio' element={<InicioPage/>}/>
          <Route path='/servicio' element={<ServiciosPage/>}/>
          <Route path='/equipo' element={<EquipoPage/>}/>
          <Route path='/porquecsc' element={<RazonPage/>}/>
          <Route path='*' element={<Navigate to="/inicio"/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
