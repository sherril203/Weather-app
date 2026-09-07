import React from 'react'
import { Routes, Route } from "react-router";
import App from '../src/App';
import Weather from '../src/Pages/Weather/Weather';
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<App/>}/>
         <Route path="/weather" element={<Weather/>}/>
    </Routes>
  )
}

export default Router
