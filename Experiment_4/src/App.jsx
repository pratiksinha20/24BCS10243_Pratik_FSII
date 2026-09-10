import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Public/home.jsx'
import About from './components/Public/about.jsx'
import Contact from './components/Public/contact.jsx'
import DashboardLayout from './components/Dashboard/Dashboard_Layout.jsx'
import DashboardProfile from './components/Dashboard/DashBoard_Profile.jsx'
import DashboardSettings from './components/Dashboard/Dashboard_setting.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
