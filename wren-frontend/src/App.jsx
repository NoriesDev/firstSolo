import { Routes, Route } from "react-router-dom";
import  Navbar  from './Components/NavBar'
import Footer from './Components/Footer'
import './App.css'
import AboutPage from './pages/AboutWren'
import LandingPage from "./pages/LandingPage";
import CollectionPage from './pages/CollectionPage'
import SingleItemPage from './pages/SingleItemPage'


function App() {


  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/about" element={<AboutPage />} />
    <Route path="/"  element={<LandingPage />} />
    <Route path="/collection"  element={<CollectionPage />} />
    <Route path="/item"  element={<SingleItemPage />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
