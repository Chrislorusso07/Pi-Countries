import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./view/home/home";
import Landing from "./view/landing page/landingpage";
import NavBar from "./components/navBar/nav";
import Form from "./view/form/form";
import Detail from "./view/detail/detail";
import AcitividadDetalle from "./components/DetalleActividad/detalleActividad";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" ? <NavBar></NavBar> : null}
      <Routes>
        <Route
          path="/countries/:id/actividad"
          element={<AcitividadDetalle></AcitividadDetalle>}
        ></Route>
        <Route path="/countries/:id" element={<Detail></Detail>}></Route>
        <Route path="/create" element={<Form />}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Landing></Landing>}></Route>
      </Routes>
    </div>
  );
}

export default App;
