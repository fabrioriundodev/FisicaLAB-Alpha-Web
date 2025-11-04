export const physicsTopics = [
  { href: "/movimiento-rectilineo-uniforme", label: "Movimiento Rectilíneo Uniforme (MRU)", target: "_blank" },
  { href: "/movimiento-rectilineo-uniformemente-variado", label: "Movimiento Rectilíneo Uniformemente Variado (MRUV)", target: "_blank" },
  { href: "/caida-libre", label: "Caída Libre", target: "_blank" },
  { href: "/tiro-parabolico/", label: "Tiro Parabólico", target: "_blank" },
  { href: "/estatica/", label: "Estática", target: "_blank" },
  { href: "/leyes-de-newton", label: "Leyes de Newton", target: "_blank" },
  { href: "/energia-y-trabajo-mecanico", label: "Energía y Trabajo Mecánico", target: "_blank" },
];

// src/data/physicsTopics.ts
export interface PhysicsTopic {
  id: number;
  title: string;
  description: string;
  url: string;
  featuredImage: string;
  category: string;
}

export const physicsTopics2: PhysicsTopic[] = [
  { id: 1, title: 'Movimiento Rectilíneo Uniforme (MRU)', description: 'Estudio del movimiento en línea recta con velocidad constante.', url: '/movimiento-rectilineo-uniforme', featuredImage: '/images/mru.webp', category: 'Cinemática' },
  { id: 2, title: 'Movimiento Rectilíneo Uniformemente Variado (MRUV)', description: 'Análisis del movimiento con aceleración constante.', url: '/movimiento-rectilineo-uniformemente-variado', featuredImage: '/images/mruv.webp', category: 'Cinemática' },
  { id: 3, title: 'Caída Libre', description: 'Movimiento vertical bajo la acción de la gravedad.', url: '/caida-libre', featuredImage: '/images/caidalibre.webp', category: 'Cinemática' },
  { id: 4, title: 'Tiro Parabólico', description: 'Movimiento de proyectiles en dos dimensiones.', url: '/tiro-parabolico', featuredImage: '/images/tiroparabolico.webp', category: 'Cinemática' },
  { id: 5, title: 'Estática', description: 'Estudio del equilibrio de fuerzas y momentos.', url: '/estatica', featuredImage: '/images/estatica.webp', category: 'Mecánica' },
  { id: 6, title: 'Leyes de Newton', description: 'Fundamentos de la dinámica clásica.', url: '/leyes-de-newton', featuredImage: '/images/leyes.webp', category: 'Dinámica' },
  { id: 7, title: 'Energía y Trabajo Mecánico', description: 'Conceptos de energía cinética, potencial y trabajo.', url: '/energia-y-trabajo-mecanico', featuredImage: '/images/energia.webp', category: 'Mecánica' }
];
