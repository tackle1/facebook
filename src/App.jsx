import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./components/header/Header.jsx"
import News from "./pages/News.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Home from "./pages/home/Home.jsx"
function App() {


  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}


export default App