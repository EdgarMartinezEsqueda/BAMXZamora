import About from "components/about/About";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import CallToAction from "components/cta/CallToAction";
import Footer from "components/footer/Footer";
import FunfactSimple from "components/funfact/FunfactSimple";
import Header from "components/header/Header";
import Map from "components/map/Mapa";
import PartnersSection from "components/media/PartnersSection";
import History from "components/sliders/History";

const AboutUs = () =>{
    return (
      <main className="bg-gray-50">
        <Header/>
        <Breadcrumb titulo="Nosotros" />
        <History />
        <About />
        <Map conMapa={true}/>
        <FunfactSimple />
        <PartnersSection />
        <CallToAction />
        <Footer />
      </main>
    );
};

export default AboutUs;