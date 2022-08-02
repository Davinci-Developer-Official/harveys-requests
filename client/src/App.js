
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom'
import NavBar from './components/Navbar'
import Men from './pages/Men'
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer'
import Store from './pages/Store';
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route  path="/" element={<Dashboard/>} />
        <Route path="/men" element={<Men />}  />
        <Route path="/store" element={<Store/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App