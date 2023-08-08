import './App.css';
import { useState } from 'react';
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar/Navbar";
export default function App() {
  return <div className="App">
    <Navbar/>
    <AllRoutes />
  </div>;
}
export default App;
