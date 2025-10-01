import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App() {
  return (
    // <>
    // <Navbar />
    // <LandingPage />
    // </>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/login' element={<Login/>} />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
