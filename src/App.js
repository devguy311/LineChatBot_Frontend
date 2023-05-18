import Home from './pages/Home/home';
import Main from './pages/Main/main';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import RedirectPage from './pages/Redirect/redirect';

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path='/main' Component={Main}/>
      <Route path='/redirect' Component={RedirectPage}/>
    </Routes>
  );
}

export default App;
