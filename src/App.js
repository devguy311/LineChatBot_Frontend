import Home from './pages/Home/home';
import Main from './pages/Main/main';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import RedirectPage from './pages/Redirect/redirect';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path='/main' element={<Main />}/>
      <Route exact path='/redirect' element={<RedirectPage />}/>
    </Routes>
  );
}

export default App;
