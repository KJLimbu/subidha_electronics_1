import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from "./components/LandingPage";
// import Navbar from "./components/Navbar";
import Login from "./pages/authPages/Login";
import Register from "./pages/authPages/Register";

function App() {
  return (
    // <>
    // <Navbar />
    // <LandingPage />
    // </>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/register'  element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
