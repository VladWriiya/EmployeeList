import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Favorites from './pages/Favorites'
import Page404 from './pages/Page404'
import EmployeeDetails from './pages/EmployeeDetails'; 
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { AppContextProvider } from './context/AppContext'

function App() {
  return (
    <BrowserRouter>
    <AppContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/employee" element={<EmployeeDetails />} /> 
        <Route path="*" element={<Page404 />} />
      </Routes>
    </AppContextProvider>
    </BrowserRouter>
    

   
  )
}

export default App
