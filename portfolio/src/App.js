import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route />
      </Route>
    </Routes>
  );
}

export default App;
