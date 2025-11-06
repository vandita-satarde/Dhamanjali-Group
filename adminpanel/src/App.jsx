import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Gallery from './pages/AddGallery'
import MartCards from './pages/MartCards'
import './App.css'

function App() {

  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/' element={<Dashboard />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/mart' element={<MartCards />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
