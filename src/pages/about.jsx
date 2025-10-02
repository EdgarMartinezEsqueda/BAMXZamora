import About from "components/about/About";
import HistoryTimeline from "components/about/HistoryTimeline";
import IntegralApproach from "components/about/IntegralApproach";
import ProgramsSection from "components/about/ProgramsAbout";
import SupportNetworks from "components/about/SupportNetworks";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import CallToAction from "components/cta/CallToAction";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Map from "components/map/Mapa";
import PartnersSection from "components/media/PartnersSection";

const AboutUs = () =>{
    return (
      <main className="bg-gray-50">
        <Header/>
        <Breadcrumb titulo="Nosotros" />
        {/* <History /> */}
        <About />
        <HistoryTimeline />
        <IntegralApproach />
        <Map conMapa={true}/>
        <ProgramsSection />
        <SupportNetworks />
        {/* <FunfactSimple /> */}
        <PartnersSection />
        <CallToAction />
        <Footer />
      </main>
    );
};

export default AboutUs;