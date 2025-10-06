import { Route, BrowserRouter as Router, Routes } from "react-router";

import PageName from "components/title/PageName";
import ErrorPage from "pages/404";
import AboutUs from "pages/about";
import Apadrinamiento from "pages/apadrinamiento";
import Beneficiaries from "pages/beneficiaries";
import Contact from "pages/contact";
import Donate from "pages/donate";
import HomePage from "pages/home";
import Programs from "pages/programs";
import FAQs from "pages/questions";

function App() {

  const routes = [
    { path: "/", element: <HomePage />, title: "Inicio", description: "Banco de Alimentos de Zamora - Combatiendo el hambre con solidaridad y esperanza." },
    { path: "/programas", element: <Programs />,  title: "Nuestros programas", description: "Descubre las iniciativas del BAMX Zamora que apoyan a miles de familias en Michoacán." },
    { path: "/contacto", element: <Contact />,  title: "Contáctanos", description: "Comunícate con el BAMX Zamora. Estamos aquí para ayudarte y resolver tus dudas." },
    { path: "/nosotros", element: <AboutUs />,  title: "Nosotros", description: "Conoce la misión, visión e historia del Banco de Alimentos de Zamora." },
    { path: "/donar", element: <Donate />,  title: "Dona ahora", description: "Haz tu donación y ayuda a llevar alimentos a quienes más lo necesitan en Zamora y Michoacán." },
    { path: "/preguntas", element: <FAQs />,  title: "Preguntas frecuentes", description: "Resuelve tus dudas más comunes sobre el Banco de Alimentos de Zamora." },
    { path: "/beneficiarios", element: <Beneficiaries />,  title: "Sé parte de nuestro padrón", description: "Infórmate sobre cómo registrarte como beneficiario del BAMX Zamora." },
    { path: "/apadrinamiento", element: <Apadrinamiento />,  title: "Por menos hambre y más sonrisas", description: "Con el programa de apadrinamiento puedes cambiar vidas con tu apoyo mensual." },
    { path: "*", element: <ErrorPage />,  title: "Ha surgido un error", description: "Página no encontrada. Vuelve al inicio del Banco de Alimentos de Zamora." },
];

//     { path: "/faqs", element: < FAQs /> },
  return (
      <div className="min-h-screen dark:bg-slate-800 dark:text-white">
        <Router>
          <Routes>
            { routes.map( route => {
              return <Route
                key={route.path}
                path={route.path}
                element={
                  <PageName title={route.title} description={route.description}>{route.element}</PageName>
                }
              /> } 
            )}
          </Routes>
        </Router>
      </div>
  );
}

export default App;
