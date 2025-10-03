import Breadcrumb from "components/breadcrumb/Breadcrumb";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import ApadrinamientoSection from "components/media/Apadrinamiento";
import CatalogoApadrinados from "components/media/CatalogoApadrinados"; // Nuevo

const Apadrinamiento = () => {
  return (
    <main className="bg-gray-50">
      <Header />
      <Breadcrumb titulo="Apadrinamiento" subtitulo="Por menos hambre y más sonrisas"/>
      <ApadrinamientoSection />
      <CatalogoApadrinados />
      <Footer />
    </main>
  );
};

export default Apadrinamiento;