import './App.css';
import { useState } from 'react';
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar/Navbar";
import { ctx } from './Components/Context/LoginContext';
import LoginPage from "./Components/Login/LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <ctx.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {isLoggedIn && <Navbar />}
        {
          isLoggedIn ? <AllRoutes /> : <LoginPage />
        }
      </ctx.Provider>
    </div>
  );
}
export default App;