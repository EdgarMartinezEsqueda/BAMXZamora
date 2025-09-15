import Breadcrumb from "components/breadcrumb/Breadcrumb";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Programs from "components/programs/Programs";

const ProgramsPage = () =>{
    return (
      <main className="bg-gray-50">
        <Header/>
        <Breadcrumb titulo="Nuestros programas" subtitulo="Juntos movemos esperanza" />
        <Programs />
        <Footer />
      </main>
    );
};

export default ProgramsPage;