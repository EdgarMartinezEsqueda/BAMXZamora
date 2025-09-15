import { BrowserRouter as Router, Routes, Route } from "react-router";

import PageName from "components/title/PageName";
import HomePage from "pages/home";
import ErrorPage  from "pages/404";
import Programs  from "pages/programs";
import Contact from "pages/contact";
import AboutUs from "pages/about";
import Donate from "pages/donate";
import FAQs from "pages/questions";
import Beneficiaries from "pages/beneficiaries";

function App() {

  const routes = [
    { path: "/", element: <HomePage />, title: "Inicio" },
    { path: "/programas", element: <Programs />,  title: "Nuestros programas" },
    { path: "/contacto", element: <Contact />,  title: "Contáctanos" },
    { path: "/nosotros", element: <AboutUs />,  title: "Nosotros" },
    { path: "/donar", element: <Donate />,  title: "Dona ahora" },
    { path: "/preguntas", element: <FAQs />,  title: "Preguntas frecuentes" },
    { path: "/beneficiarios", element: <Beneficiaries />,  title: "Se parte de nuestro padrón" },
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
