import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router";
import HomeMovie from "./pages/HomeMovie";
import OneMovie from "./pages/OneMovie";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<HomeMovie/>} />
            <Route path="/movies/:id" element={<OneMovie/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
