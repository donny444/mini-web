import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import { useTheme } from "./ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <Router>
      <div className={`app ${theme}`}>
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
