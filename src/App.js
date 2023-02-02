import { Route, Routes } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Routes/Dashboard";

export default function App() {
  return <div className="App">
    <AllRoutes />
    <Routes>
      <Route
        path='/dashboard'
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  </div>;
}
