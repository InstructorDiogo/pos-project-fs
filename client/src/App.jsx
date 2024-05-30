import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ProductsPage from './pages/ProductsPage'
import DashboardPage from './pages/DashboardPage'
import NavBar from './components/NavBar'
import IsAnon from './components/IsAnon'
import IsPrivate from './components/IsPrivate'

function App() {

  return (
    <div className={`app light`}>

      <NavBar />

      <Routes>
        <Route path='/' element={<IsAnon> <HomePage /> </IsAnon>} />
        <Route path='/dashboard' element={<IsPrivate> <DashboardPage /> </IsPrivate>} />
        <Route path='/login' element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path='/signup' element={<IsAnon><SignUpPage /></IsAnon>} />
        <Route path='/products' element={<IsPrivate> <ProductsPage /> </IsPrivate>} />
        <Route path='*' element={<div> 404 Page Not Found </div>} />
      </Routes>

    </div>
  )
}

export default App
