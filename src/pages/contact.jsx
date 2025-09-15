import Breadcrumb from "components/breadcrumb/Breadcrumb";
import ContactPage from "components/contact/ContactUs";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";

const ContactUsPage = () =>{
    return (
      <main className="bg-gray-50">
        <Header/>
        <Breadcrumb titulo="Contáctanos" subtitulo="Juntos, hacemos más"/>
        <ContactPage />
        <Footer />
      </main>
    );
};

export default ContactUsPage;