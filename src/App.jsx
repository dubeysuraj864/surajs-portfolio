import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>

          <Route index element={<Home className="Home"/>} />
          <Route path='/about' element={<About className="About" />} />
          <Route path='/contact' element={<Contact className="Contact" />}/>
          <Route path='/project' element={<Project className="Project" />} />

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
