import { useState } from "react";
import { FiCheck, FiChevronRight, FiCopy, FiCreditCard, FiExternalLink, FiGlobe, FiHeart, FiHome, FiShield, FiTarget, FiUsers } from "react-icons/fi";

const Donate = () => {
  const [copiedItem, setCopiedItem] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState("bank");

  const copyToClipboard = async (text, item) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Error copying to clipboard:", err);
    }
  };

  const bankingMethods = [
    {
      id: "clabe",
      label: "CLABE Interbancaria",
      value: import.meta.env.VITE_clabe,
      icon: FiHome,
      description: "Transferencias desde cualquier banco"
    },
    {
      id: "cuenta",
      label: "Cuenta BANBAJÍO",
      value: import.meta.env.VITE_cuenta,
      icon: FiCreditCard,
      description: "Depósito directo en para cuentas BANBAJÍO"
    }
  ];

  const onlineMethods = [
    // {
    //   id: "paypal",
    //   label: "PayPal",
    //   url: import.meta.env.VITE_paypal,
    //   icon: "💙",
    //   description: "Donación segura con PayPal",
    //   color: "from-blue-500 to-blue-600"
    // }
  ];

  const impactStats = [
    {
      number: "10,000+",
      label: "Familias beneficiadas",
      icon: FiUsers,
      color: "text-blue-600"
    },
    {
      number: "70+",
      label: "Toneladas de alimentos",
      icon: FiTarget,
      color: "text-green-600"
    },
    {
      number: "7+",
      label: "Municipios atendidos",
      icon: FiGlobe,
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header principal */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <FiHeart className="w-8 h-8 text-red-500" />
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-green-700">Haz la diferencia</span>
            <span className="block mt-2 text-yellow-500 relative">
              hoy mismo
              <svg 
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-3 text-yellow-400" 
                viewBox="0 0 200 12" 
                fill="currentColor"
              >
                <path d="M0 8c40 0 60-6 100-6s60 6 100 6v4c-40 0-60-6-100-6S40 12 0 12V8z"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Con tu apoyo, podemos continuar nuestra misión de combatir el hambre y brindar esperanza a quienes más lo necesitan en Michoacán.
          </p>
        </div>

        {/* Estadísticas de impacto */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                <Icon className={`w-12 h-12 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform`} />
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Sección izquierda - Métodos de donación */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Formas de donar</h2>
              <p className="text-gray-600 text-lg">
                Elige el método que más te convenga. Tu donación es 100% segura y va directamente a ayudar a las familias que más lo necesitan.
              </p>
            </div>

            {/* Selector de método */}
            <div className="flex bg-gray-100 rounded-2xl p-2 mb-8">
              <button
                onClick={() => setSelectedMethod("bank")}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
                  selectedMethod === "bank"
                    ? "bg-white text-green-700 shadow-md"
                    : "text-gray-600 hover:text-green-700"
                }`}
              >
                <FiHome className="w-5 h-5 inline mr-2" />
                Transferencia Bancaria
              </button>
              <button
                onClick={() => setSelectedMethod("online")}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
                  selectedMethod === "online"
                    ? "bg-white text-green-700 shadow-md"
                    : "text-gray-600 hover:text-green-700"
                }`}
              >
                <FiGlobe className="w-5 h-5 inline mr-2" />
                Donación Online
              </button>
            </div>

            {/* Métodos bancarios */}
            {selectedMethod === "bank" && (
              <div className="space-y-4">
                {bankingMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div 
                      key={method.id}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                            <Icon className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{method.label}</h3>
                            <p className="text-sm text-gray-500">{method.description}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                        <code className="text-lg font-mono text-gray-800 flex-1">
                          {method.value}
                        </code>
                        <button
                          onClick={() => copyToClipboard(method.value, method.id)}
                          className="ml-4 p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all flex items-center gap-2 group"
                        >
                          {copiedItem === method.id ? (
                            <>
                              <FiCheck className="w-4 h-4" />
                              <span className="text-sm">¡Copiado!</span>
                            </>
                          ) : (
                            <>
                              <FiCopy className="w-4 h-4" />
                              <span className="text-sm">Copiar</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Métodos online */}
            {selectedMethod === "online" && (
              <div className="grid gap-4">
                {onlineMethods.length === 0 ? (
                  <p className="text-gray-600">
                    Actualmente no hay métodos de donación en línea disponibles. Por favor, considera hacer una transferencia bancaria.
                  </p>
                ) : (
                  onlineMethods.map((method, index) => (
                    <a
                      key={method.id}
                      href={method.url}
                      Fitarget="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-1 group"
                      style={{
                        animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s both`
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-2xl mr-4`}>
                            {method.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                              {method.label}
                            </h3>
                            <p className="text-sm text-gray-500">{method.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center text-green-600 group-hover:text-green-700">
                          <span className="text-sm font-medium mr-2">Donar</span>
                          <FiExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </a>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Sección derecha - Información y garantías */}
          <div className="space-y-8">
            
            {/* Misión */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FiTarget className="w-7 h-7 text-green-600 mr-3" />
                Nuestra Misión
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Combatimos el hambre rescatando alimentos en la región y distribuyéndolos a familias, comunidades e instituciones que más lo necesitan.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cada donación contribuye directamente a ampliar nuestro impacto. Nos comprometemos a usar tu apoyo de forma responsable y transparente, asegurando que cada peso se transforme en alimentos y esperanza.
              </p>
            </div>

            {/* Garantías de seguridad */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FiShield className="w-7 h-7 text-blue-600 mr-3" />
                Tu Donación es Segura
              </h3>
              
              <div className="space-y-4">                
                <div className="flex items-start">
                  <FiCheck className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Pagos Seguros</h4>
                    <p className="text-gray-600 text-sm">Todas las transacciones están protegidas y encriptadas por tu banca en línea</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiCheck className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Impacto Directo</h4>
                    <p className="text-gray-600 text-sm">El 100% de tu donación va directamente a programas de alimentación</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Call to action final */}
        <div className="bg-gradient-to-r from-green-600 to-yellow-500 rounded-3xl p-8 text-white text-center mt-8">
          <FiHeart className="w-12 h-12 mx-auto mb-4 text-white" />
          <h3 className="text-2xl font-bold mb-4">¡Gracias por tu generosidad!</h3>
          <p className="text-lg opacity-90 mb-6">
            Juntos estamos construyendo un futuro donde nadie pase hambre.
          </p>
          <div className="flex items-center justify-center text-sm opacity-80">
            <span>Cada donación cuenta</span>
            <FiChevronRight className="w-4 h-4 ml-1" />
            <span>Cada familia importa</span>
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
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Donate;