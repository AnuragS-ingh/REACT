
import { createRoot } from "react-dom/client";
import App from "./App";
import First from "./first.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <First/>
    <App />
  </>
);
