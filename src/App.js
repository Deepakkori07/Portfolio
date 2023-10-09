import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}  />
      <Route path='/AboutMe' element = {<AboutMe/>}  />
      <Route path='/Skills' element = {<Skills/>}  />
      <Route path='/Contact' element = {<Contact/>}  />
      <Route path='/SocialLinks' element = {<SocialLinks/>}  />
    </Routes>
  );
}

export default App;
