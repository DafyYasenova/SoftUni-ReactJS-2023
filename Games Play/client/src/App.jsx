import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Create from "./components/Create/Create";
import Catalog from './components/Catalog/Catalog';
import Edit from './components/Edit/Edit';
import Details from './components/Details/Details';

function App() {

  return (
    <>
      <Header />
      <Routes>

       <Route path="/" element={<Welcome />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/create" element={<Create />} />
       <Route path="/catalog" element={<Catalog />} />
       <Route path="/edit" element={<Edit />} />
       <Route path="/details" element={<Details />} />
       
        
      </Routes>

    </>
  )
}

export default App
