import {} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Fooldal from "./pages/Fooldal";
import Masik from "./pages/Masik";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Fooldal/>} />
          <Route path="masik" index element={<Masik/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}