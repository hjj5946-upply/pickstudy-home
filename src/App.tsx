import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './App.css'
import './index.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* 앞으로 추가할 페이지들은 여기에 추가 */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
