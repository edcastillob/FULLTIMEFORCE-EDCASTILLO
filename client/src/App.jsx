import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import { Commits } from './components/commits/Commits'
import { MyNavbar } from './components/navbar/MyNavbar'
import { Home } from './components/home/Home';


function App() {
  const location = useLocation();
  return (
    
      <div>
        {location.pathname !== "/" && <MyNavbar />}     
       
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/commits" element={<Commits />} />
        {/* <Route exact path="/docs" element={<Result />} /> */}
        {/* <Route path="/commits/:id" element={<EditSurvey />} /> */}
      </Routes>
      </div>
     
    
  )
}

export default App
