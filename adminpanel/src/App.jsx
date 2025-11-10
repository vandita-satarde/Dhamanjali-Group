import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Gallery from './pages/AddGallery'
import MartCards from './pages/MartCards'
import FoodItems from './pages/AddFood'
import AddHospitalityCards from './pages/AddHospitalityCards'

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
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
