// import { useState } from 'react'
import './App.css'
import Login from './pages/login'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Signin from './pages/signin'
import ForgotPassword from './pages/forgotPassword'
import Home from './pages/home'
import PageLayout from './layouts/PageLayout'
import ProductPage from './pages/products'

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />

       <Route
          path="/home"
          element={
            <PageLayout>
              <Home/>
            </PageLayout>
          }
        />
        {/* <Route
          path="/earphone"
          element={
            <PageLayout>
              <EarphonePage/>
            </PageLayout>
          }
        /> */}
        {/* <Route path="/earphone" element={<ProductPage />} /> */}
        <Route path="/:category" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
