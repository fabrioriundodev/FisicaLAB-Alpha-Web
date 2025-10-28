# FisicaLAB Alpha

[![Desarrollado con Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)

**FisicaLAB Alpha** es un simulador educativo desarrollado con **Astro** y **Java**, diseñado para visualizar y experimentar fenómenos de cinemática y estática de manera interactiva.  
Este proyecto busca ofrecer una experiencia moderna, accesible y clara para estudiantes de física, priorizando el aprendizaje visual y la interactividad.

[![DEMO EN VIVO](https://img.shields.io/badge/DEMO_EN_VIVO-4ECCA3?style=for-the-badge&logo=astro&logoColor=black)](https://tu-demo-url.vercel.app/) &nbsp;
[![DOCUMENTACIÓN](https://img.shields.io/badge/DOCUMENTACIÓN-A682FF?style=for-the-badge&logo=astro&logoColor=black)](https://github.com/fabrioriundodev/FisicaLAB-Alpha-Web) &nbsp;

---

## Objetivo del proyecto

> Ofrecer a estudiantes y docentes de física una herramienta interactiva, moderna y accesible para la enseñanza de la cinemática, estática y otros fenómenos físicos, integrando simulaciones visuales y explicaciones claras.

---

## Características principales

- Desarrollado con **Astro** para alto rendimiento y renderizado estático optimizado.  
- Integración completa con **Tailwind CSS** para un diseño limpio y adaptable.  
- Compatibilidad con **Java y componentes Web** para simulaciones dinámicas.  
- Secciones de aprendizaje estructuradas: **Cinemática**, **Estática**, **Fuerzas**, **Energía**, entre otros temas.  
- Accesibilidad mejorada siguiendo pautas **WCAG 2.2 AA**.  
- Diseño responsive compatible con escritorio y dispositivos móviles.  
- Soporte para contenido **Markdown/MDX** en las páginas educativas.  
- Componentes personalizados como:
  - `Simulador.astro`: espacio de simulación visual.
  - `Teoria.astro`: bloques informativos con diagramas.
  - `Navbar.astro` y `Footer.astro`: navegación accesible.
- Modo claro/oscuro automático según las preferencias del usuario.  
- Preparado para despliegue en **Vercel**.

---

## Estructura del proyecto

| Carpeta / Archivo | Descripción |
| :---------------- | :----------- |
| `src/components/` | Componentes reutilizables del simulador |
| `src/pages/` | Páginas de contenido educativo (Cinemática, Estática, etc.) |
| `src/layouts/` | Plantillas base para la estructura de las páginas |
| `src/styles/` | Configuración de estilos globales con Tailwind |
| `public/` | Recursos estáticos (imágenes, íconos, etc.) |
| `astro.config.mjs` | Configuración principal del proyecto |
| `package.json` | Dependencias y scripts de desarrollo |

---

## Comandos básicos

Ejecuta estos comandos en tu terminal:

| Comando | Acción |
| :------- | :------ |
| `npm install` | Instala las dependencias necesarias |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera la versión lista para producción en `./dist/` |
| `npm run preview` | Previsualiza tu sitio antes de desplegarlo |

---

## Tecnologías utilizadas

- **Astro** — Framework estático de alto rendimiento  
- **Tailwind CSS 4** — Estilos rápidos y configurables  
- **Java** — Lógica del simulador físico  
- **TypeScript** — Mejor mantenimiento del código  
- **Accessible Astro Components** — Accesibilidad garantizada  
- **Lucide Icons** — Íconos consistentes y accesibles  

---

## Contribuir

Las contribuciones son bienvenidas.  
Puedes ayudar de las siguientes formas:

1. Reportando errores o mejoras en los módulos (Issues)  
2. Enviando solicitudes de cambio (Pull Requests)  
3. Proponiendo nuevas simulaciones o temas de física  
4. Mejorando la documentación o diseño visual  

Repositorio: [FisicaLAB-Alpha-Web](https://github.com/fabrioriundodev/FisicaLAB-Alpha-Web)

---

## Agradecimientos

Queremos agradecer a:

- El equipo de Astro, por el increíble framework.  
- Los docentes de Física, por inspirar este proyecto educativo.  
- Los colaboradores, que aportan su tiempo y conocimiento.  
- La comunidad educativa, que impulsa el aprendizaje interactivo.  

---

> FisicaLAB Alpha es más que un sitio web:  
> es una herramienta para aprender física de forma visual, práctica y accesible.
