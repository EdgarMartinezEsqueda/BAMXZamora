import { useRef, useState } from "react";
import { FaCheckCircle, FaEdit, FaEnvelope, FaExclamationCircle, FaHome, FaPhone, FaUser } from "react-icons/fa";
import { IoSend, IoShareSocial } from "react-icons/io5";

const ContactPage = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // "success", "error", null
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    }
    
    if (!formData.correo.trim()) {
      newErrors.correo = "El correo es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = "Ingresa un correo válido";
    }
    
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio";
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
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
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
    
    // Limpiar status si hay alguno
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Importación dinámica de EmailJS
      const emailjs = (await import("@emailjs/browser")).default;
      
      // Crear un objeto FormData para simular el comportamiento del form
      const formElement = document.createElement("form");
      
      // Crear inputs temporales con los valores
      Object.keys(formData).forEach(key => {
        const input = document.createElement("input");
        input.name = key;
        input.value = formData[key];
        formElement.appendChild(input);
      });

      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formElement,
        import.meta.env.VITE_PUBLIC_KEY,
      );
      
      setSubmitStatus("success");
      setFormData({ nombre: "", correo: "", mensaje: "" });
      
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaHome />,
      title: "Domicilio",
      content: "Av. Valladolid #328",
      subtitle: "Zamora, Michoacán",
      color: "from-rojo-500 to-rojo-600"
    },
    {
      icon: <FaPhone />,
      title: "Teléfono",
      content: import.meta.env.VITE_BAMXTelefono,
      subtitle: import.meta.env.VITE_BAMXHorario,
      color: "from-verde-500 to-verde-600",
      action: `tel:${import.meta.env.VITE_BAMXTelefono}`
    },
    {
      icon: <FaEnvelope />,
      title: "Correos Electrónicos",
      content: import.meta.env.VITE_BAMXCorreoDireccion,
      subtitle: import.meta.env.VITE_BAMXCorreoTS,
      color: "from-amarillo-500 to-amarillo-600",
      action: `mailto:${import.meta.env.VITE_BAMXCorreoDireccion}`
    },
    {
      icon: <IoShareSocial />,
      title: "Enlaces útiles",
      content: "Síguenos en redes sociales",
      subtitle: import.meta.env.VITE_BAMXLinktree,
      color: "from-gris-500 to-gris-600",
      action:  `https://${import.meta.env.VITE_BAMXLinktree}`
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-rojo-50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Información de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-medium mb-1">
                  {item.content}
                </p>
                <p className="text-sm text-gray-500">
                  {item.subtitle}
                </p>
                {item.action && (
                  <a
                    href={item.action}
                    target="_blank"
                    className="inline-block mt-4 text-sm font-medium text-rojo-600 hover:text-rojo-800 transition-colors"
                  >
                    {item.action.startsWith("http") ? "Visitar" : "Contactar"} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sección principal de contacto */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Información y mapa */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-rojo-600 to-verde-600 bg-clip-text text-transparent">
                  Contáctanos
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Si tienes alguna duda o necesitas más información sobre nuestros programas y servicios, por favor escríbenos o visítanos. Estamos aquí para ayudarte.
              </p>
            </div>

            {/* Mapa mejorado */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2594.578791132544!2d-102.2912982!3d20.005118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842e8f2fb85b3eb5%3A0xa6537d61131d2ebb!2sBanco%20de%20Alimentos%20Zamora%20A.C..!5e1!3m2!1ses-419!2smx!4v1757570282053!5m2!1ses-419!2smx" 
                className="w-full h-80 border-0" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Banco de Alimentos de Tepatitlán"
              />
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Envía un mensaje</h2>
              <p className="text-gray-600">
                Tu información está segura con nosotros. Todos los campos son obligatorios.
              </p>
            </div>

            {/* Status del envío */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-verde-50 border border-verde-200 rounded-xl flex items-center">
                <FaCheckCircle className="text-verde-500 text-xl mr-3" />
                <div>
                  <p className="text-verde-800 font-medium">¡Mensaje enviado con éxito!</p>
                  <p className="text-verde-600 text-sm">Te contactaremos a la brevedad.</p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center">
                <FaExclamationCircle className="text-red-500 text-xl mr-3" />
                <div>
                  <p className="text-red-800 font-medium">Error al enviar el mensaje</p>
                  <p className="text-red-600 text-sm">Por favor, inténtalo más tarde.</p>
                </div>
              </div>
            )}

            <div className="space-y-6">
              {/* Campo Nombre */}
              <div className="relative">
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre completo*"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-4 text-gray-700 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                      errors.nombre 
                        ? "border-red-300 focus:ring-red-500" 
                        : "border-gray-200 focus:ring-rojo-500 focus:border-rojo-500"
                    }`}
                  />
                </div>
                {errors.nombre && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <FaExclamationCircle className="mr-1" />
                    {errors.nombre}
                  </p>
                )}
              </div>

              {/* Campo Email */}
              <div className="relative">
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    type="email"
                    name="correo"
                    placeholder="tu.email@ejemplo.com*"
                    value={formData.correo}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-4 text-gray-700 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                      errors.correo 
                        ? "border-red-300 focus:ring-red-500" 
                        : "border-gray-200 focus:ring-rojo-500 focus:border-rojo-500"
                    }`}
                  />
                </div>
                {errors.correo && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <FaExclamationCircle className="mr-1" />
                    {errors.correo}
                  </p>
                )}
              </div>

              {/* Campo Mensaje */}
              <div className="relative">
                <div className="relative">
                  <FaEdit className="absolute left-4 top-4 text-gray-400 text-lg" />
                  <textarea
                    name="mensaje"
                    placeholder="Escribe tu mensaje aquí... (mínimo 10 caracteres)*"
                    rows="5"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-4 text-gray-700 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all resize-none ${
                      errors.mensaje 
                        ? "border-red-300 focus:ring-red-500" 
                        : "border-gray-200 focus:ring-rojo-500 focus:border-rojo-500"
                    }`}
                  ></textarea>
                </div>
                {errors.mensaje && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <FaExclamationCircle className="mr-1" />
                    {errors.mensaje}
                  </p>
                )}
                <p className="mt-2 text-xs text-gray-500">
                  {formData.mensaje.length}/500 caracteres
                </p>
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                onClick={sendEmail}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-verde-600 to-verde-700 hover:from-verde-700 hover:to-verde-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                    Enviando mensaje...
                  </>
                ) : (
                  <>
                    <IoSend className="mr-2 text-lg" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactPage;