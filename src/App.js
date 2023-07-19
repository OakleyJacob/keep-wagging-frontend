import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import DogEdit from "./pages/DogEdit"
import DogIndex from "./pages/DogIndex"
import DogNew from "./pages/DogNew"
import DogShow from "./pages/DogShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import AboutUs from "./pages/AboutUs"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import { mockDog } from './assets/MockDog'


const App = () => {

  const [dogs, setDogs] = useState(mockDog)
  
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dogindex" element={<DogIndex />} />
      <Route path="/dogshow" element={<DogShow />} />
      <Route path="/dognew" element={<DogNew />} />
      <Route path="/dogedit" element={<DogEdit />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>

)}

export default App




