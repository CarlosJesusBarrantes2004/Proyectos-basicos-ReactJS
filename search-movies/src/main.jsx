import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DataProvider from "./context/DataProvider.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>
);
