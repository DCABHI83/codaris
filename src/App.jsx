import React from 'react'
import { HashRouter, Route, Routes,} from 'react-router-dom'
import Home from './pages/Home'
import Header from './ui/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './ui/Footer'
const App = () => {
  return (
    <>
  
<HashRouter>
<Header/>
<Routes>


<Route path='/' element={<Home/>}  />
<Route path='/about' element={<About/>}  />
<Route path='/contact' element={<Contact/>}  />
<Route path='/' element={<Home/>}  />



</Routes>
<Footer/>

</HashRouter>
    
    </>
  )
}

export default App
