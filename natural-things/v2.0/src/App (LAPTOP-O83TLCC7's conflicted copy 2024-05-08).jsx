import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/home_components"
import AllPlantsPage from "./components/allplants_components"
import ContactPage from "./components/contact_components"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allplants" element={<AllPlantsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
