import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import './App.css'
import './index.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/academy/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
