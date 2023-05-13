import Home from './pages/Home/home';
import Main from './pages/Main/main';
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}>
      </Route>
      <Route path='/main' element={<Main />}>
      </Route>
    </Routes>
  );
}

export default App;
