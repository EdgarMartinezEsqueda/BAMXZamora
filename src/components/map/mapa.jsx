import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highmaps";
import { useState } from "react";
import { FaHeart, FaMap, FaMapMarkerAlt, FaThLarge, FaToggleOff, FaToggleOn, FaUsers } from "react-icons/fa";
import data from "./mapa.json";

// Datos de los municipios
const municipiosData = [
  { 
    nombre: "Zamora", 
    estado: "Michoacán",
    comunidades: 23,
    familias: 2900,
    tipo: "sede"
  },
  { 
    nombre: "Ixtlán", 
    estado: "Michoacán",
    comunidades: 7,
    familias: 1500,
    tipo: "regular"
  },
  { 
    nombre: "Chavinda", 
    estado: "Michoacán",
    comunidades: 5,
    familias: 500,
    tipo: "regular"
  },
  { 
    nombre: "Jacona", 
    estado: "Michoacán",
    comunidades: 13,
    familias: 2100,
    tipo: "regular"
  },
  { 
    nombre: "Santiago Tangamandapio", 
    estado: "Michoacán",
    comunidades: 5,
    familias: 700,
    tipo: "regular"
  },
  { 
    nombre: "Tangacicuaro", 
    estado: "Michoacán",
    comunidades: 11,
    familias: 1400,
    tipo: "regular"
  },
  { 
    nombre: "Chilchota", 
    estado: "Michoacán",
    comunidades: 6,
    familias: 900,
    tipo: "regular"
  },
];

const options = {
  series: data,
  title: { text: "" },
  legend: { enabled: false },
  credits: { enabled: false },
  tooltip: {
    shared: true,
    useHTML: true,
    headerFormat: "<table>",
    pointFormat:
      "<tr><td>Localidad:</td><td style='text-align:right'><b>{point.name}</b></td></tr>",
    footerFormat: "</table>",
  },
  chart: {
    backgroundColor: "transparent",
    map: "countries/mx/ja-mx-all",
    panning: false,
  },
  mapView: {
    zoom: 0.5,
    center: [ 289,200], // ajusta coordenadas (long, lat) al centro de Michoacan
  },
  mapNavigation: {
    enabled: false, // bloquea botones de zoom y arrastre
    enableDoubleClickZoom: false,
    enableMouseWheelZoom: false,
  },
  navigation: {
    buttonOptions: {
      enabled: false
    }
  }
};

// VERSIÓN 1: CON MAPA
const MapaConMapa = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Contenido de texto mejorado */}
      <div className="lg:w-1/2 text-center lg:text-left">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-verdeLogo font-edu-hand text-xl font-semibold mb-3 flex items-center justify-center lg:justify-start gap-2">
            <FaMapMarkerAlt className="text-amarilloLogo" />
            Unidos por un mismo propósito.
          </h2>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-800">
            Municipios a los que{" "}
            <span className="text-amarilloLogo relative inline-block group/highlight">
              llegamos
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amarilloLogo to-verdeLogo rounded-full transform scale-x-0 group-hover/highlight:scale-x-100 transition-transform duration-300"></div>
            </span>
          </h3>
        </div>

        {/* Descripción mejorada */}
        <div className="space-y-4 mb-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            Gracias a la dedicación de nuestro equipo y al respaldo de empresas, voluntarios y aliados, hoy llegamos a más de{" "}
            <span className="font-bold text-rojoLogo bg-rojoLogo/10 px-2 py-1 rounded-lg">70 grupos comunitarios</span>{" "}
            en 7 municipios de Michoacán, llevando alimentos, apoyo y esperanza a miles de familias.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Nuestra labor se extiende desde rancherías hasta colonias urbanas, tejiendo una{" "}
            <span className="font-semibold text-verdeLogo">red solidaria</span> que combate el hambre y fortalece el bienestar de nuestra región.
          </p>
        </div>

        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="text-2xl font-bold text-verdeLogo">7</div>
            <div className="text-sm text-gray-600">Municipios</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="text-2xl font-bold text-amarilloLogo">70+</div>
            <div className="text-sm text-gray-600">Grupos comunitarios</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 sm:col-span-1 col-span-2">
            <div className="text-2xl font-bold text-rojoLogo">10,000+</div>
            <div className="text-sm text-gray-600">Familias beneficiadas</div>
          </div>
        </div>
      </div>

      {/* Mapa mejorado */}
      <div className="lg:w-1/2 w-full">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300">
          <div className="mb-4 text-center">
            <h4 className="text-lg font-bold text-verdeLogo mb-2">Cobertura Regional</h4>
            <p className="text-sm text-gray-600">Michoacán</p>
          </div>
          
          <div className="rounded-xl overflow-hidden">
            <HighchartsReact
              highcharts={Highcharts}
              constructorType="mapChart"
              options={options}
            />
          </div>
          
          {/* Leyenda del mapa */}
          <div className="mt-4 flex justify-center">
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-verdeLogo rounded-full"></div>
                <span className="text-gray-600">Cobertura activa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// VERSIÓN 2: SIN MAPA - CON GRID DE MUNICIPIOS
const MapaSinMapa = () => {
  const [activeFilter, setActiveFilter] = useState("todos");
  
  const filteredMunicipios = municipiosData.filter(municipio => 
    activeFilter === "todos" || municipio.tipo === activeFilter
  );

  const totalComunidades = municipiosData.reduce((sum, m) => sum + m.comunidades, 0);
  const totalFamilias = municipiosData.reduce((sum, m) => sum + m.familias, 0);

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-verdeLogo font-edu-hand text-xl font-semibold mb-3 flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-amarilloLogo" />
          Unidos por un mismo propósito.
        </h2>

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-800">
          Municipios a los que{" "}
          <span className="text-amarilloLogo relative inline-block group/highlight">
            llegamos
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amarilloLogo to-verdeLogo rounded-full transform scale-x-0 group-hover/highlight:scale-x-100 transition-transform duration-300"></div>
          </span>
        </h3>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Nuestra red solidaria se extiende por Zamora y municipios aledaños de Michoacán, 
          llevando esperanza y alimentos a comunidades rurales y urbanas.
        </p>
      </div>

      {/* Estadísticas principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-verdeLogo to-verdeLogo/80 text-white rounded-2xl p-6 text-center shadow-xl">
          <FaMapMarkerAlt className="text-4xl mb-3 mx-auto opacity-80" />
          <div className="text-3xl font-bold mb-2">{municipiosData.length} Municipios</div>
          <div className="text-verdeLogo/20 text-sm uppercase tracking-wider">Municipios</div>
          <div className="text-sm mt-2 opacity-90">Todos en Michoacán</div>
        </div>
        
        <div className="bg-gradient-to-br from-amarilloLogo to-amarilloLogo/80 text-white rounded-2xl p-6 text-center shadow-xl">
          <FaUsers className="text-4xl mb-3 mx-auto opacity-80" />
          <div className="text-3xl font-bold mb-2">{totalComunidades}+ Comunidades</div>
          <div className="text-amarilloLogo/20 text-sm uppercase tracking-wider">Comunidades</div>
          <div className="text-sm mt-2 opacity-90">Rurales y urbanas</div>
        </div>
        
        <div className="bg-gradient-to-br from-rojoLogo to-rojoLogo/80 text-white rounded-2xl p-6 text-center shadow-xl">
          <FaHeart className="text-4xl mb-3 mx-auto opacity-80" />
          <div className="text-3xl font-bold mb-2">{totalFamilias.toLocaleString()}+ Familias</div>
          <div className="text-rojoLogo/20 text-sm uppercase tracking-wider">Familias</div>
          <div className="text-sm mt-2 opacity-90">Beneficiadas mensualmente</div>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-xl p-1 shadow-md border border-gray-200">
          {[
            { id: "todos", label: "Todos", icon: "🏘️" },
            { id: "sede", label: "Sede Principal", icon: "🏛️" },
            { id: "regular", label: "Municipios", icon: "🏘️" }
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "bg-verdeLogo text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span>{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de municipios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {filteredMunicipios.map((municipio, index) => (
          <div
            key={municipio.nombre}
            className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Header del municipio */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className={`w-3 h-3 rounded-full ${
                  municipio.tipo === "sede" ? "bg-rojoLogo" : "bg-verdeLogo"
                }`}></div>
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {municipio.estado}
                </span>
              </div>
              
              <h4 className="font-bold text-gray-800 text-lg group-hover:text-verdeLogo transition-colors duration-200">
                {municipio.nombre}
              </h4>
              
              {municipio.tipo === "sede" && (
                <span className="inline-block bg-rojoLogo/10 text-rojoLogo px-2 py-1 rounded-full text-xs font-medium mt-1">
                  Sede Principal
                </span>
              )}
            </div>

            {/* Estadísticas */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Comunidades:</span>
                <span className="font-bold text-verdeLogo">{municipio.comunidades}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Familias:</span>
                <span className="font-bold text-amarilloLogo">{municipio.familias.toLocaleString()}</span>
              </div>
              
              {/* Barra de progreso visual */}
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div 
                  className="bg-gradient-to-r from-verdeLogo to-amarilloLogo h-2 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${Math.min((municipio.familias / 2500) * 100, 100)}%` 
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer con mensaje */}
      <div className="text-center mt-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-bold text-verdeLogo">Cada municipio</span> representa familias con historias únicas, 
            pero todas unidas por la esperanza de un mejor mañana. 
            <span className="font-bold text-amarilloLogo"> Juntos construimos</span> una red de apoyo que trasciende fronteras y 
            transforma vidas en toda nuestra región.
          </p>
        </div>
      </div>
    </div>
  );
};

// Componente principal con switch de vistas
const Mapa = ({ conMapa = true }) => {
  const [vistaActual, setVistaActual] = useState(conMapa);

  const toggleVista = () => {
    setVistaActual(!vistaActual);
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-verdeLogo/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amarilloLogo/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Switch de vistas */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200 flex items-center gap-4">
            {/* Indicador de vista activa */}
            <div className="flex items-center gap-3">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                vistaActual 
                  ? "bg-verdeLogo text-white shadow-md" 
                  : "text-gray-600 hover:bg-gray-50"
              }`}>
                <FaMap className="text-sm" />
                <span className="font-medium text-sm">Vista Mapa</span>
              </div>
              
              {/* Toggle Switch */}
              <button
                onClick={toggleVista}
                className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 group cursor-pointer"
                aria-label="Cambiar vista"
              >
                {vistaActual ? (
                  <FaToggleOn className="text-3xl text-verdeLogo group-hover:text-verdeLogo/80 transition-colors duration-200" />
                ) : (
                  <FaToggleOff className="text-3xl text-gray-400 group-hover:text-verdeLogo/60 transition-colors duration-200" />
                )}
              </button>
              
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                !vistaActual 
                  ? "bg-verdeLogo text-white shadow-md" 
                  : "text-gray-600 hover:bg-gray-50"
              }`}>
                <FaThLarge className="text-sm" />
                <span className="font-medium text-sm">Vista Detalles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido con transición */}
        <div className="transition-all duration-500 ease-in-out">
          {vistaActual ? <MapaConMapa /> : <MapaSinMapa />}
        </div>
      </div>
    </section>
  );
};

export default Mapa;