import { useRef, useState } from "react";
import { FaCheckCircle, FaEdit, FaEnvelope, FaHome, FaPhone, FaSpinner, FaUser } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

const ContactPage = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = 'Ingresa un correo válido';
    }
    
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simular EmailJS (reemplaza con tu implementación real)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // emailjs.sendForm(...) aquí
      
      setSubmitStatus('success');
      setFormData({ nombre: '', correo: '', mensaje: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaHome />,
      title: "Domicilio",
      content: "Calle Terrerito #1326",
      subtitle: "Tepatitlán de Morelos, Jalisco",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaPhone />,
      title: "Teléfono",
      content: "(378) 782 5552",
      subtitle: "8 am a 4 pm",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaEnvelope />,
      title: "Correos",
      content: "direcciongeneral@batepa.mx",
      subtitle: "trabajosocial@batepa.mx",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <IoShareSocial />,
      title: "Enlaces útiles",
      content: "Más sobre nosotros",
      subtitle: "linktr.ee/bamxtepatitlan",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Cards de información */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                
                {/* Icono con gradiente */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mx-auto shadow-lg`}>
                    <div className="text-white text-2xl">
                      {item.icon}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-medium mb-1">
                    {item.content}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {item.subtitle}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Sección principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Información y mapa */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                ¿Cómo llegar?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Si tienes alguna duda o necesitas más información sobre nuestros programas y servicios, por favor escríbenos o visítanos. Estamos aquí para ayudarte.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7070.034355634964!2d-102.73812937530205!3d20.804396476665833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429262b38e504dd%3A0xf4f3353f8d429646!2sBANCO%20DE%20ALIMENTOS%20DE%20TEPA!5e1!3m2!1ses-419!2smx!4v1748460650362!5m2!1ses-419!2smx" 
                className="w-full h-80 border-0" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-3 text-gray-800">
                Envía un mensaje
              </h2>
              <p className="text-gray-600">
                Tu correo no será compartido. Todos los campos son obligatorios.
              </p>
            </div>

            {/* Notificaciones de estado */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="text-green-700 font-medium">
                  ¡Mensaje enviado con éxito! Te contactaremos pronto.
                </span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <span className="text-red-700 font-medium">
                  Hubo un error al enviar el mensaje. Inténtalo más tarde.
                </span>
              </div>
            )}

            <div className="space-y-6">
              
              {/* Campo Nombre */}
              <div className="relative">
                <div className="flex items-center space-x-4 border-b-2 border-gray-200 focus-within:border-blue-500 transition-colors">
                  <FaUser className="text-gray-400 text-lg" />
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre completo"
                    className="flex-1 py-4 text-gray-700 text-lg bg-transparent focus:outline-none"
                    required
                  />
                </div>
                {errors.nombre && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.nombre}</span>
                )}
              </div>

              {/* Campo Email */}
              <div className="relative">
                <div className="flex items-center space-x-4 border-b-2 border-gray-200 focus-within:border-blue-500 transition-colors">
                  <FaEnvelope className="text-gray-400 text-lg" />
                  <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className="flex-1 py-4 text-gray-700 text-lg bg-transparent focus:outline-none"
                    required
                  />
                </div>
                {errors.correo && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.correo}</span>
                )}
              </div>

              {/* Campo Mensaje */}
              <div className="relative">
                <div className="flex items-start space-x-4 border-b-2 border-gray-200 focus-within:border-blue-500 transition-colors">
                  <FaEdit className="text-gray-400 text-lg mt-4" />
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Escribe tu mensaje aquí..."
                    rows="4"
                    className="flex-1 py-4 text-gray-700 text-lg bg-transparent focus:outline-none resize-none"
                    required
                  />
                </div>
                {errors.mensaje && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.mensaje}</span>
                )}
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                onClick={sendEmail}
                disabled={isSubmitting}
                className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
                } text-white`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <FaSpinner className="animate-spin" />
                    <span>Enviando...</span>
                  </div>
                ) : (
                  'Enviar mensaje'
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;