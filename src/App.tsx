import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <div className='min-h-[80vh]'>
          <Routes>
              <Route path="/" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
