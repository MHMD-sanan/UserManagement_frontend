import Register from "./componets/pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./componets/pages/Login";
import Profile from "./componets/pages/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
