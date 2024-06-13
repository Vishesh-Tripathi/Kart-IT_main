import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import NoPage from './pages/nopage/NoPage'
import ProductInfo from './pages/productInfo/ProductInfo'
import ScrollTop from './components/scrollTop.jsx/ScrollTop'
import CartPage from './pages/cart/CartPage'
import AllProduct from './pages/allProduct/AllProduct'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import UserDashboard from './pages/user/UserDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import AddProductPage from './pages/admin/AddProductPage'
import UpdateProductPage from './components/admin/UpdateProductPage'
import MyState from './context/MyState'
import Toast,{Toaster} from 'react-hot-toast'
import Avatar from './components/Avatar/Avatar'

function App() {
  return (
    <MyState>
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NoPage />} />
        <Route path="/productInfo/:id" element={<ProductInfo />} />
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/addproduct" element={<AddProductPage/>} />
        <Route path="/updateproduct" element={<UpdateProductPage/>} />
        <Route path="/avatar" element={<Avatar/>} />
      </Routes>
      <Toaster />
    </Router>
    </MyState>
  )
}

export default App