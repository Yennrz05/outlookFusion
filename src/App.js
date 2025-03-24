import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import EmailList from './pages/EmailList';
import EmailCreator from './pages/EmailCreator';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/email-list" element={<EmailList />} />
        <Route path="/email-creator" element={<EmailCreator />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
