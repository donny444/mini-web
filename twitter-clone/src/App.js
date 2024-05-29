import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
