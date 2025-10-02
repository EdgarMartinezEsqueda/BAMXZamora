import React from "react";
import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";

const MidBar = () => (
  <div className="max-lg:hidden bg-navbar-bg py-4 px-6 lg:px-10 xl:px-32 ">
    <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto gap-6">
      {/* Logo */}
      <a href="/" className="shrink-0">
        <img src="/assets/images/zamora.webp" alt="Logo" className="h-16" />
      </a>

      {/* Info Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {[
          {
            icon: <FiClock />,
            title: "Horario",
            text: import.meta.env.VITE_BAMXHorario,
          },
          {
            icon: <FiMapPin />,
            title: "Nuestro Domicilio",
            text: import.meta.env.VITE_BAMXDomicilio,
          },
          { icon: <FiPhone />, title: "Contáctanos", text: import.meta.env.VITE_BAMXTelefono },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl shadow-sm">
              {React.cloneElement(item.icon, {
                className: "text-green-500 text-2xl",
              })}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MidBar;