
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Dashboard from "./pages/Dashbord";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Header from './components/Header';
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/singup" element={<Signup />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
