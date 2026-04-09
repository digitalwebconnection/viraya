import './App.css'

import Footer from './Component/Footer'
import Header from './Component/Header'
import HomeMain from './Component/HomeMain/HomeMain'
import WhatsAppButton from './Component/WhatsAppButton'
import PrivacyPolicy from './Component/PrivacyPolicy'

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App