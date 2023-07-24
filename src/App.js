import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navigation from './components/Navigation'
import DogEdit from "./pages/DogEdit"
import DogIndex from "./pages/DogIndex"
import DogNew from "./pages/DogNew"
import DogShow from "./pages/DogShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import AboutUs from "./pages/AboutUs"

import mockUsers from './assets/MockUsers'

const App = () => {
  const [dogs, setDogs] = useState()
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const navigate = useNavigate()
  useEffect(() => {
    readDogs()
  }, [])

  const readDogs = () => {
    fetch("http://localhost:3000/dogs")
    .then((response) => response.json())
    .then((payload) => {
      setDogs(payload)
    })
    .catch((error) => console.log(error))
  }  
  
  const createDog = (dog) => {
    const createdDog = {...dog,["user_id"]: currentUser.id} 
    
    fetch("http://localhost:3000/dogs", {
      body: JSON.stringify(createdDog),
      method: 'POST',
      headers: {
        'Content-Type':'application/json'   }
      })
      .then((response) => response.json())
      .then(() => readDogs())
      .catch((error) => console.log(error))
      }
 
  const editDog = (dog, id) => {
    fetch(`http://localhost:3000/dogs/${id}`, {
      body: JSON.stringify(dog),
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then((response) => response.json())
    .then(() => readDogs())
    .catch((error) => console.log(error))
  }
  const deleteDog = (dog, id) => {
    fetch(`http://localhost:3000/dogs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then((response) => response.json())
    .then(() => readDogs())
    .catch((error) => console.log(error))    
    navigate('/dogindex/')
  }
  const signUp = (user) => {
    console.log(user);

  }
  const signIn = (user) => {
    console.log(user);
  }
  return (
    <>
    <Header signIn = {signIn} signUp = {signUp}/>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dogindex" element={<DogIndex dogs = {dogs}/>} />
      <Route path="/dogshow/:id" element={<DogShow dogs = {dogs} deleteDog = {deleteDog}/>} />
      <Route path="/dognew" element={<DogNew createDog={createDog} />} />
      <Route path="/dogedit/:id" element={<DogEdit dogs = {dogs} editDog = {editDog}/>} />
      <Route path="/aboutus" element={<AboutUs />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>

)}

export default App




