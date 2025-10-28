---
layout: ../layouts/MarkdownLayout.astro
title: Estática
---

<div class="hero-section bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-800 dark:to-cyan-900 text-white p-12 rounded-3xl mb-12 shadow-2xl">
  <div class="flex items-center justify-center gap-6 mb-4">
    <Icon name="lucide:scale" size="4rem" />
    <h1 class="text-5xl font-bold m-0">Estática</h1>
  </div>
  <p class="text-xl text-center max-w-5xl mx-auto opacity-95 px-4">
    La rama de la mecánica que estudia los cuerpos en equilibrio, es decir, aquellos que no tienen aceleración o se mueven a velocidad constante bajo la acción de fuerzas.
  </p>
</div>

<Notification type="info" class="dark:bg-gray-800 dark:text-gray-100">
  <Icon aria-hidden="true" name="lucide:info" />
  <p>
    <strong>Información:</strong> La estática es esencial en ingeniería civil, mecánica y arquitectura para diseñar estructuras seguras y estables.
  </p>
</Notification>

## ¿Qué es la Estática?

<div class="intro-card bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300">
  <p class="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
    La <span class="font-semibold text-blue-700 dark:text-blue-400">estática</span> es una rama fundamental de la mecánica clásica que analiza las fuerzas en sistemas físicos en 
    <strong class="text-blue-700 dark:text-blue-400">equilibrio estático</strong>, 
    es decir, donde los cuerpos permanecen en reposo o en movimiento rectilíneo uniforme. 
    Esta disciplina es esencial en <span class="font-medium text-emerald-700 dark:text-emerald-400">ingeniería civil, mecánica y arquitectura</span> para diseñar estructuras seguras y estables.
  </p>
</div>


## Principios Fundamentales

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">

  <div class="principle-card bg-gradient-to-br from-emerald-50 via-white to-emerald-100 dark:from-emerald-900 dark:via-gray-900 dark:to-emerald-950 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-emerald-300 dark:border-emerald-700">
    <div class="flex items-center gap-4 mb-6">
      <div class="bg-emerald-600 dark:bg-emerald-700 p-4 rounded-full shadow-lg">
        <Icon name="lucide:move" size="2.5rem" class="text-white" />
      </div>
      <h3 class="text-2xl font-bold text-emerald-800 dark:text-emerald-300 m-0">Primera Condición</h3>
    </div>
    <h4 class="text-lg font-semibold text-emerald-700 dark:text-emerald-400 mb-4">Equilibrio Traslacional</h4>
    <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
      Para que un cuerpo esté en equilibrio traslacional, la suma vectorial de todas las fuerzas que actúan sobre él debe ser igual a cero. Esto significa que el cuerpo no experimenta aceleración lineal.
    </p>
    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-inner border border-emerald-300 dark:border-emerald-700">
      <p class="font-mono text-center text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-3">
        ΣF = 0
      </p>
      <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
        <p class="flex items-center gap-2">
          <Icon name="lucide:arrow-right" size="1rem" class="text-emerald-600 dark:text-emerald-400" />
          <span><strong class="text-emerald-700 dark:text-emerald-400">ΣFx = 0</strong> (Eje horizontal)</span>
        </p>
        <p class="flex items-center gap-2">
          <Icon name="lucide:arrow-up" size="1rem" class="text-emerald-600 dark:text-emerald-400" />
          <span><strong class="text-emerald-700 dark:text-emerald-400">ΣFy = 0</strong> (Eje vertical)</span>
        </p>
        <p class="flex items-center gap-2">
          <Icon name="lucide:move-3d" size="1rem" class="text-emerald-600 dark:text-emerald-400" />
          <span><strong class="text-emerald-700 dark:text-emerald-400">ΣFz = 0</strong> (Eje profundidad)</span>
        </p>
      </div>
    </div>
  </div>

  <div class="principle-card bg-gradient-to-br from-violet-50 via-white to-violet-100 dark:from-violet-900 dark:via-gray-900 dark:to-violet-950 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-violet-300 dark:border-violet-700">
    <div class="flex items-center gap-4 mb-6">
      <div class="bg-violet-600 dark:bg-violet-700 p-4 rounded-full shadow-lg">
        <Icon name="lucide:rotate-cw" size="2.5rem" class="text-white" />
      </div>
      <h3 class="text-2xl font-bold text-violet-800 dark:text-violet-300 m-0">Segunda Condición</h3>
    </div>
    <h4 class="text-lg font-semibold text-violet-700 dark:text-violet-400 mb-4">Equilibrio Rotacional</h4>
    <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
      Para el equilibrio rotacional, la suma de todos los momentos o torques respecto a cualquier punto debe ser cero. Esto previene que el cuerpo gire sobre sí mismo y garantiza estabilidad angular.
    </p>
    <div class="bg-white dark:bg-gray-800 rounded-xl p-4">
      <p class="font-mono text-center text-2xl font-bold text-violet-900 dark:text-violet-300">
        ΣM = 0
      </p>
      <p class="text-sm text-gray-700 dark:text-gray-300 text-center mb-2">
        <strong class="text-violet-900 dark:text-violet-400">Momento = Fuerza × Distancia</strong>
      </p>
      <p class="text-sm text-gray-600 dark:text-gray-400 text-center italic">
        La suma de momentos en sentido horario debe igualar la suma de momentos en sentido antihorario.
      </p>
    </div>
  </div>

</div>

## Tipos de Fuerzas en Estática

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">

  <div class="force-card bg-cyan-50 dark:bg-cyan-950 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-cyan-500 dark:border-cyan-600">
    <div class="flex justify-center mb-4">
      <div class="bg-cyan-500 dark:bg-cyan-600 p-4 rounded-full">
        <Icon name="lucide:arrow-down" size="2.5rem" class="text-white" />
      </div>
    </div>
    <h4 class="text-lg font-bold text-gray-900 dark:text-gray-100 text-center mb-3">Fuerzas de Peso</h4>
    <p class="text-gray-700 dark:text-gray-300 text-sm text-center leading-relaxed">
      Fuerza gravitacional que actúa verticalmente hacia abajo sobre el centro de masa del objeto. Se calcula como <strong class="text-cyan-900 dark:text-cyan-400">W = m × g</strong>.
    </p>
  </div>

  <div class="force-card bg-purple-50 dark:bg-purple-950 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500 dark:border-purple-600">
    <div class="flex justify-center mb-4">
      <div class="bg-purple-500 dark:bg-purple-600 p-4 rounded-full">
        <Icon name="lucide:arrow-up" size="2.5rem" class="text-white" />
      </div>
    </div>
    <h4 class="text-lg font-bold text-gray-900 dark:text-gray-100 text-center mb-3">Fuerzas Normales</h4>
    <p class="text-gray-700 dark:text-gray-300 text-sm text-center leading-relaxed">
      Fuerza perpendicular ejercida por una superficie sobre un objeto que está en contacto con ella. Contrarresta el peso en superficies horizontales.
    </p>
  </div>

  <div class="force-card bg-pink-50 dark:bg-pink-950 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-pink-500 dark:border-pink-600">
    <div class="flex justify-center mb-4">
      <div class="bg-pink-500 dark:bg-pink-600 p-4 rounded-full">
        <Icon name="lucide:git-pull-request-arrow" size="2.5rem" class="text-white" />
      </div>
    </div>
    <h4 class="text-lg font-bold text-gray-900 dark:text-gray-100 text-center mb-3">Tensión</h4>
    <p class="text-gray-700 dark:text-gray-300 text-sm text-center leading-relaxed">
      Fuerza transmitida a través de cuerdas, cables o cadenas cuando se tiran de ellas. Siempre actúa alejándose del objeto.
    </p>
  </div>

</div>
