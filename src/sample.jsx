// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// );



{
  "React Router App Scaffold": {
    "prefix": "viterouter",
    "body": [
      "import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';",
      "import Login from './pages/Login';",
      "import Dashboard from './pages/Dashboard';",
      "",
      "export default function App() {",
      "  return (",
      "    <BrowserRouter>",
      "      <Routes>",
      "        <Route path=\"/login\" element={<Login />} />",
      "        <Route path=\"/\" element={<Navigate to=\"/login\" replace />} />",
      "      </Routes>",
      "    </BrowserRouter>",
      "  );",
      "}"
    ],
    "description": "Scaffold custom React Router setup instantly"
  }
}
