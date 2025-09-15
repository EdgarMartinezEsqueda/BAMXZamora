import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import DonatePage from "components/donate/Donate";

const ContactUsPage = () =>{
    return (
      <main className="bg-gray-50">
        <Header/>
        <Breadcrumb titulo="Dona ahora" />
        <DonatePage />
        <Footer />
      </main>
    );
};

export default ContactUsPage;