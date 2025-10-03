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
    { path: "/", element: <HomePage />, title: "Inicio" },
    { path: "/programas", element: <Programs />,  title: "Nuestros programas" },
    { path: "/contacto", element: <Contact />,  title: "Contáctanos" },
    { path: "/nosotros", element: <AboutUs />,  title: "Nosotros" },
    { path: "/donar", element: <Donate />,  title: "Dona ahora" },
    { path: "/preguntas", element: <FAQs />,  title: "Preguntas frecuentes" },
    { path: "/beneficiarios", element: <Beneficiaries />,  title: "Se parte de nuestro padrón" },
    { path: "/apadrinamiento", element: <Apadrinamiento />,  title: "Por menos hambre y más sonrisas" },
    { path: "*", element: <ErrorPage />,  title: "Ha surgido un error" },
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
                  <PageName title={route.title}>{route.element}</PageName>
                }
              /> } 
            )}
          </Routes>
        </Router>
      </div>
  );
}

export default App;
