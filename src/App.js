import logo from './logo.svg';
import './App.css';
import NavBar from './core/components/layout/NavBar';
import MainRoutes from './core/components/routes/MainRoutes';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <MainRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
