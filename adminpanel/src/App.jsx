import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Gallery from './pages/AddGallery'
import MartCards from './pages/MartCards'
import FoodItems from './pages/AddFood'
import AddHospitalityCards from './pages/AddHospitalityCards'
import AddHandpicked from './pages/AddHandpicked'
import AddFarmerStories from './pages/AddFarmerStories'
import AddTestimonial from './pages/AddTestimonial'
import AddHealthTestimonial from './pages/AddHealthTestimonial'
import AddFoodTestimonials from './pages/AddFoodTestimonials'
import ViewContacts from './pages/ViewContacts'
import ViewEmails from './pages/ViewEmails'
import AddMedicalDevice from './pages/AddMedicalDevice'
import ViewMedicalDevices from './pages/ViewMedicalDevices'

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/mart' element={<MartCards />} />
          <Route path='/food' element={<FoodItems />} />
          <Route path='/hospitality' element={<AddHospitalityCards />} />
          <Route path='/handpicked' element={<AddHandpicked />} />
          <Route path='/farmer-stories' element={<AddFarmerStories />} />
          <Route path='/testimonials' element={<AddTestimonial />} />
          <Route path='/health-testimonials' element={<AddHealthTestimonial />} />
          <Route path='/food-testimonials' element={<AddFoodTestimonials />} />
          <Route path='/view-contacts' element={<ViewContacts />} />
          <Route path='/view-emails' element={<ViewEmails />} />
          <Route path='/medical-devices' element={<ViewMedicalDevices />} />
          <Route path='/add-medical-device' element={<AddMedicalDevice />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
