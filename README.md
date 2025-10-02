# Banco de Alimentos de Zamora - Página Web
![BAMX Zamora](https://bamx.org.mx/wp-content/uploads/agile-store-locator/Logo/tepatitlan.webp)

Este proyecto es una página web para el BAMX ZAMORA, desarrollada con **Vite + React**. Está diseñada para informar sobre los programas, actividades e impacto del banco de alimentos, así como para facilitar la comunicación con los beneficiarios y colaboradores.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de carpetas y archivos:
```bash
├───public/
│   └───fonts   # Archivos de fuentes utilizados en el proyecto
├───src/
│   ├───assets/  # Recursos estáticos como imágenes para cada página y/o componente
│   ├───components/  # Componentes reutilizables de React
│   ├───pages/ Páginas principales de la aplicación
│   ├───App.jsx # Aqui se renderiza todo el proyecto, incluyendo las rutas
│   ├───index.css # Estilos globales del proyecto (uso de fuentes en la carpeta public)
│   └───main.jsx # Punto de entrada del proyecto
├───.gitignore # Archivos y carpetas que no se subirán a git
├───index.html # Página principal del proyecto
├───package.json # Dependencias y configuraciones del proyecto
├───README.md # Documentación del proyecto
├───tailwind.config.js # Configuraciones de tailwind (temas, imagenes,plugins)
└───vite.config.js # Configuraciones de Vite (alias de rutas, plugins)
```
## Tecnologías Utilizadas

- **Vite**: Herramienta para desarrollar aplicaciones web modernas, con un entorno de desarrollo rápido.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind**: Para estilizar la página web.