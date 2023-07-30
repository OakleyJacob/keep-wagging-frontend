import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom"

import Header from "./components/Header"
import Navigation from './components/Navigation'
import DogEdit from "./pages/DogEdit"
import DogIndex from "./pages/DogIndex"
import DogNew from "./pages/DogNew"
import DogShow from "./pages/DogShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import AboutUs from "./pages/AboutUs"
import Donations from './pages/Donations'



const App = () => {
  const [dogs, setDogs] = useState()
  const [donations, setDonations] = useState()
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    readDogs()
    getDonations()
  }, [])
  
  const urlDeployed = "https://dogpoundheavenbackend.onrender.com"
  const url = "http://localhost:3000"
  
  
  const readDogs = () => {
    fetch(`${url}/dogs`)
    .then((response) => response.json())
    .then((payload) => {
      setDogs(payload)
    })
    .catch((error) => console.log(error))
  }  
  
  const createDog = (dog) => {
    const createdDog = {...dog,["user_id"]: currentUser.id} 
    
    fetch(`${url}/dogs`, {
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
    fetch(`${url}/dogs/${id}`, {
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
  const deleteDog = (id) => {
    fetch(`${url}/dogs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then((response) => response.json())
    .then(() => readDogs())
    .catch((error) => console.log(error))    

  }
  const signUp = (userInfo) => {
    console.log(userInfo)
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(!response.ok) {
        throw Error(response.statusText)
      }
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then(payload => setCurrentUser(payload))
    .catch(errors => console.log("login errors:", errors))
  }

  
  const signIn = (userInfo) => {
    console.log(userInfo.email)
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      // store the token
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then(payload => {
      setCurrentUser(payload)
    })
    .catch(error => console.log("login errors: ", error))
  }
  const signOut = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token") //retrieve the token
      },
      method: "DELETE"
    })
    .then(payload => {
      localStorage.removeItem("token")  // remove the token
      setCurrentUser(null)
    })
    .catch(error => console.log("log out errors: ", error))

  }
  const getDonations = () => {
    fetch(`${url}/donations`).then((response) => response.json())
      .then((payload) => {
        setDonations(payload.amount)
        console.log(payload.amount);
      })
      .catch((error) => console.log(error))

    }  
    
    const donate = (value) => {
      fetch(`${url}/donations/${value}`, {
        method: 'PATCH',
        headers: {
          'Content-Type':'application/json'
        }
      })
      .then((response) => response.json())
      .then(() => getDonations())
      .catch((error) => console.log(error))
    }
    
  return (
    <>
    <Header currentUser = {currentUser} signIn = {signIn} signUp = {signUp} signOut = {signOut}/>
    <Navigation currentUser = {currentUser}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dogindex" element={<DogIndex dogs = {dogs} readDogs = {readDogs}/>} />
      <Route path="/dogshow/:id" element={<DogShow dogs = {dogs} deleteDog = {deleteDog} currentUser = {currentUser}/>} />
      <Route path="/dognew" element={<DogNew createDog={createDog} />} />
      <Route path="/dogedit/:id" element={<DogEdit dogs = {dogs} editDog = {editDog}/>} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/donations" element={<Donations donate = {donate} donations = {donations}/>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
    
  </>

)}

export default App







