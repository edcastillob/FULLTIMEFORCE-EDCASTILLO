import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import { Commits } from './components/commits/Commits'
import { MyNavbar } from './components/navbar/MyNavbar'
import { Home } from './components/home/Home';
import { Footer } from './components/footer/Footer';
import { Landing } from './landing/Landing';
import { CommitsDetail } from './components/commits/CommitsDetail';


function App() {
  const location = useLocation();
  return (
    
      <div>
        {location.pathname !== "/" && <MyNavbar />}           
        <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/commits" element={<Commits />} />        
        <Route exact path="/commits/:sha" element={<CommitsDetail />} />        
      </Routes>
      <Footer />
      </div>
     
    
  )
}

export default App
