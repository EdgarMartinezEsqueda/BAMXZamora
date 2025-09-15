import AboutSection from "components/about/AboutSection";
import CallToAction from "components/cta/CallToAction";
import Footer from "components/footer/Footer";
import FunFact from "components/funfact/Funfact";
import Header from "components/header/Header";
import InstagramSection from "components/media/InstagramSection";
import PartnersSection from "components/media/PartnersSection";
import NewsletterSection from "components/newsletter/Newsletter";
import ProcessSection from "components/process/Process";
import Programs from "components/programs/ProgramsSection";
import Hero from "components/sliders/Hero";

function App() {
  return (
    <div className={`min-h-screen`}>
      <div className="dark:bg-gray-900 dark:text-white">
        <Header />
        <main>
          <Hero />
          <AboutSection />
          <ProcessSection />
          <NewsletterSection />
          <CallToAction />
          <Programs />          
          <FunFact />
          <PartnersSection />
          <InstagramSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App