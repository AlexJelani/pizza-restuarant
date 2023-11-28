import About from './pages/About.jsx'
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Home from "./pages/./Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Headermain from "./components/Headermain.jsx";
import Headersecond from "./components/Headersecond.jsx";


function App() {

  return (
      <BrowserRouter>
          <Headersecond/>
          <Headermain/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/gallery' element={<Gallery/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/about' element={<About/>}/>
          </Routes>
      </BrowserRouter>


  )
}

export default App
