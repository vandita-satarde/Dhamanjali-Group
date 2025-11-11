import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Gallery from './pages/AddGallery'
import MartCards from './pages/MartCards'
import FoodItems from './pages/AddFood'
import AddHospitalityCards from './pages/AddHospitalityCards'
import AddHandpicked from './pages/AddHandpicked'
import AddFarmerStories from './pages/AddFarmerStories'

function App() {

  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/' element={<Dashboard />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/mart' element={<MartCards />} />
          <Route path='/food' element={<FoodItems />} />
          <Route path='/hospitality' element={<AddHospitalityCards />} />
          <Route path='/handpicked' element={<AddHandpicked />} />
          <Route path='/farmer-stories' element={<AddFarmerStories />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
