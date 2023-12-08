import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './layouts/Layouts';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Interest from './components/Interest';
import Awards from './components/Awards';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layouts />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="experience" element={<Experience />} />
              <Route path="skills" element={<Skills />} />
              <Route path="interest" element={<Interest />} />
              <Route path="awards" element={<Awards />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
