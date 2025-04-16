import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Trilha2Page from "./pages/Trilha2/Trilha2Page";
import Trilha3Page from "./pages/Trilha3/Trilha3Page";

import Home from "./pages/Trilha3/Navegação/Home";
import About from "./pages/Trilha3/Navegação/About";
import Contact from "./pages/Trilha3/Navegação/Contact";
import Animal from "./pages/Trilha3/Animal";
import Rooms from "./pages/Trilha3/ReservasDeHotel/Rooms";
import RoomDetails from "./pages/Trilha3/ReservasDeHotel/RoomDetails";
import BookingSuccess from "./pages/Trilha3/ReservasDeHotel/BookingSuccess";
import Trilha4Page from "./pages/Trilha4/Trilha4Page";
import Trilha1Page from "./pages/Trilha1/Trilha1Page";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Início App</Link>
            </li>
            <li>
              <Link to="/trilha1">Trilha 1</Link>
            </li>
            <li>
              <Link to="/trilha2">Trilha 2</Link>
            </li>
            <li>
              <Link to="/trilha3">Trilha 3</Link>
            </li>
            <li>
              <Link to="/trilha4">Trilha 4</Link>
            </li>
          </ul>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/trilha1" element={<Trilha1Page />} />

            <Route path="/trilha2" element={<Trilha2Page />} />

            <Route path="/trilha3" element={<Trilha3Page />} />

            <Route path="/trilha3/navegacao/home" element={<Home />} />
            <Route path="/trilha3/navegacao/about" element={<About />} />
            <Route path="/trilha3/navegacao/contact" element={<Contact />} />

            <Route path="/trilha3/animal/:name" element={<Animal />} />

            <Route path="/trilha3/reservas/rooms" element={<Rooms />} />
            <Route
              path="/trilha3/reservas/room/:roomId"
              element={<RoomDetails />}
            />
            <Route
              path="/trilha3/reservas/booking-success"
              element={<BookingSuccess />}
            />

            <Route path="/trilha4/" element={<Trilha4Page />} />

            <Route
              path="/"
              element={
                <div>
                  <h1>Página Inicial do App</h1>
                  <p>Selecione uma trilha.</p>
                </div>
              }
            />

            <Route
              path="*"
              element={
                <div>
                  <h1>A página não existe</h1>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
