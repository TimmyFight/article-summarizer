import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Radar from "./Pages/Summarizer/Summarizer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Radar />} />
      </Routes>
    </BrowserRouter>
  );
}

const domNode = document.getElementById("root");
const root = createRoot(domNode as HTMLElement);

root.render(<App />);
