import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import Appoinment from './pages/Appoinment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyAppointments from './pages/MyAppointments';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer/>
       <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/doctors' element={<Doctors/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/doctors/:speciality' element={<Doctors/>} />
      <Route path='/my-profile' element={<MyProfile/>} />
      <Route path='/appointment/:docId' element={<Appoinment/>} />
      <Route path='/my-appointment' element={<MyAppointments/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App