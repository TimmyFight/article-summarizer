import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./mainStyles.css";

import Summarizer from "./Pages/Summarizer/Summarizer";

export default function App() {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route index element={<Summarizer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

const domNode = document.getElementById("root");
const root = createRoot(domNode as HTMLElement);

root.render(<App />);
