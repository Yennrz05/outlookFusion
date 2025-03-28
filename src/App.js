import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import { Toaster } from "react-hot-toast";
import "./App.css";
import EmailCreator from "./pages/EmailCreator";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
        <Route
          path="/email-creator"
          element={<PrivateRoute component={EmailCreator} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
