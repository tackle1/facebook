
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./components/header/Header.jsx"
function App() {
  

  return (
    <>
     
     <Header/>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/news' element ={<News/>}/>
      <Route path='/contact' element ={<Contact/>}/>
      <Route path='/about' element ={<About/>}/>
    </Routes>
    </>
  )
}

export default App
