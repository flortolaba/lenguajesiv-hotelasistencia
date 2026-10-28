import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="contenido">
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>

      <footer className="pie">
        <p>© 2026 Hotel Aurora · Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;