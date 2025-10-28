# FisicaLAB Alpha

**FisicaLAB Alpha** es una plataforma educativa interactiva desarrollada en **Astro** con el objetivo de facilitar el aprendizaje de la física mediante recursos digitales, simulaciones y material teórico organizado de forma intuitiva. El proyecto busca integrar herramientas visuales y prácticas que promuevan la comprensión de los fenómenos físicos a través de la experimentación virtual.

---

## Características principales

- **Simulaciones interactivas**: Permiten visualizar conceptos de cinemática, dinámica y estática de manera dinámica y comprensible.  
- **Diseño educativo y accesible**: La interfaz está pensada para estudiantes, docentes y autodidactas, ofreciendo una navegación clara y adaptada a distintos dispositivos.  
- **Estructura modular**: El contenido está dividido en secciones temáticas, facilitando la ampliación del proyecto con nuevos temas o módulos de física.  
- **Compatibilidad con modo claro y oscuro**: Adaptación visual según las preferencias del usuario.  
- **Desarrollado con Astro y TailwindCSS**: Uso de tecnologías modernas para lograr un rendimiento óptimo y una estética limpia.

---

## Tecnologías utilizadas

- **Astro** – Framework principal para la construcción del sitio.  
- **TailwindCSS** – Sistema de estilos para un diseño rápido y responsivo.  
- **accessible-astro-components** – Conjunto de componentes accesibles para mejorar la usabilidad.  
- **Iconify / Lucide** – Biblioteca de íconos ligeros y escalables.  
- **TypeScript** – Tipado estático para mayor fiabilidad en el desarrollo.  

---

## Estructura del proyecto

FisicaLAB-Alpha/
├── public/                    # Recursos estáticos
│   ├── images/               # Imágenes del sitio
│   ├── icons/                # Iconos y favicons
│   └── assets/               # Otros recursos públicos
│
├── src/                      # Código fuente principal
│   ├── components/           # Componentes reutilizables
│   │   ├── Header.astro     # Cabecera del sitio
│   │   ├── Footer.astro     # Pie de página
│   │   ├── Navigation.astro # Navegación
│   │   └── Card.astro       # Tarjetas de contenido
│   │
│   ├── layouts/              # Estructuras de página
│   │   ├── BaseLayout.astro # Layout base
│   │   └── PageLayout.astro # Layout para páginas
│   │
│   ├── pages/                # Contenido principal del sitio
│   │   ├── index.astro      # Página de inicio
│   │   ├── about.astro      # Acerca de
│   │   └── [...slug].astro  # Rutas dinámicas
│   │
│   ├── styles/               # Configuración de estilos globales
│   │   ├── global.css       # Estilos globales
│   │   └── variables.css    # Variables CSS
│   │
│   └── data/                 # Archivos de configuración o contenido dinámico
│       ├── config.json      # Configuración del sitio
│       └── content.json     # Contenido dinámico
│
├── astro.config.mjs          # Configuración principal del proyecto
├── package.json              # Dependencias y scripts
├── package-lock.json         # Versiones bloqueadas de dependencias
├── tsconfig.json             # Configuración de TypeScript
├── .gitignore               # Archivos ignorados por Git
└── README.md                 # Documentación del proyecto

---

## Instalación y uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/usuario/FisicaLAB-Alpha.git

Instalar dependencias

npm install


Ejecutar el proyecto en modo desarrollo

npm run dev


Abrir en el navegador

http://localhost:4321

Autor
Desarrollado por: Fabrizio Oriundo Flores
Versión: Alpha


