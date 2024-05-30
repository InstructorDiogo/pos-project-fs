import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import CheckoutPage from './pages/CheckoutPage'
import ProductsPage from './pages/ProductsPage'
import AdminDashboardPage from './pages/AdminDashboardPage'
import AddProductPage from './pages/AddProductPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'
import NavBar from './components/NavBar'
import IsAnon from './components/IsAnon'
import IsPrivate from './components/IsPrivate'

function App() {

  return (
    <div className={`app light`}>

      <NavBar />

      <Routes>
        <Route path='/' element={<IsAnon> <HomePage /> </IsAnon>} />
        <Route path='/admin-dashboard' element={<IsPrivate> <AdminDashboardPage /> </IsPrivate>} />
        <Route path='/add-product' element={<IsPrivate> <AddProductPage /> </IsPrivate>} />
        <Route path='/login' element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path='/signup' element={<IsAnon><SignUpPage /></IsAnon>} />
        <Route path='/cart' element={<IsPrivate> <CartPage /> </IsPrivate>} />
        <Route path='/checkout' element={<IsPrivate> <CheckoutPage /> </IsPrivate>} />
        <Route path='/products' element={<IsPrivate> <ProductsPage /> </IsPrivate>} />
        <Route path='/products/:productId' element={<IsPrivate> <ProductDetailsPage /> </IsPrivate>} />
        <Route path='*' element={<div> 404 Page Not Found </div>} />
      </Routes>

    </div>
  )
}

export default App
