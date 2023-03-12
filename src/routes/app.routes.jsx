import { Routes, Route } from "react-router-dom"

import Home from "../pages/home/Home" 
import Profile from "../pages/profile/Profile" 

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
  )
}