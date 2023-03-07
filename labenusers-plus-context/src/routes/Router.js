import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
