import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./css/style.css";
import Settings from "./pages/Settings";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html")!.style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html")!.style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
