import { useState } from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import FAQs from "../components/faqs/FAQS";

const ContactUsPage = () =>{
    const [activeAccordion, setActiveAccordion] = useState(null);
  
    const toggleAccordion = (index) => {
      setActiveAccordion(activeAccordion === index ? null : index);
    };
    return (
      <main className="bg-gray-50">
        <Header/>
        <Breadcrumb titulo="Preguntas frecuentes" />
        <FAQs 
          activeAccordion={activeAccordion}
          toggleAccordion={toggleAccordion}
        />
        <Footer />
      </main>
    );
};

export default ContactUsPage;