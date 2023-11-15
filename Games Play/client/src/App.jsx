import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Create from "./components/Create/Create";

function App() {

  return (
    <>
      <Header />
      <Routes>

       <Route path="/" element={<Welcome />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/create" element={<Create />} />
       
        
      </Routes>

    </>
  )
}

export default App
