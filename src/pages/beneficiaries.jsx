import Breadcrumb from "components/breadcrumb/Breadcrumb";
import Footer from "components/footer/Footer";
import Gallery from "components/gallery/Gallery";
import Header from "components/header/Header";
import BeneficiariesSection from "components/media/Beneficiaries";

const Beneficiaries = () =>{
  return (
    <main className="bg-gray-50">
      <Header />
      <Breadcrumb titulo="Beneficiarios" subtitulo="Apoyo alimentario para quienes más lo necesitan"/>
      <BeneficiariesSection />
      <Gallery />
      <Footer />
    </main>
  );
};

export default Beneficiaries;