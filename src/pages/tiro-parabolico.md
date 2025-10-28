---
layout: ../layouts/MarkdownLayout.astro
title: Tiro Parabólico
---

# Tiro Parabólico

## Introducción

El **tiro parabólico** es uno de los movimientos más fascinantes de la cinemática, presente en situaciones cotidianas como el lanzamiento de una pelota, el disparo de un proyectil o incluso el salto de un atleta. Este tipo de movimiento combina dos componentes independientes:

### Características Principales

1. **Movimiento Horizontal (MRU)**: En el eje X, el objeto se mueve con velocidad constante, ya que no existe aceleración horizontal (despreciando la resistencia del aire).

2. **Movimiento Vertical (MRUV)**: En el eje Y, el objeto experimenta una aceleración constante debida a la gravedad (g ≈ 9.8 m/s² o 10 m/s² en cálculos simplificados), lo que produce un movimiento uniformemente acelerado.

### ¿Por qué se llama "Parabólico"?

La trayectoria que describe el objeto es una **parábola**, resultado de la combinación de estos dos movimientos perpendiculares. Matemáticamente, esta curva se puede representar mediante una ecuación cuadrática.

### Aplicaciones en la Vida Real

- **Deportes**: Baloncesto, fútbol, golf, tiro con arco
- **Ingeniería**: Diseño de fuentes de agua, sistemas de riego
- **Militar**: Trayectoria de proyectiles y misiles
- **Física de videojuegos**: Simulación de movimientos realistas
- **Astronomía**: Órbitas de satélites y trayectorias espaciales

### Variables Importantes

Para analizar un tiro parabólico necesitamos conocer:

- **v₀**: Velocidad inicial del proyectil
- **θ**: Ángulo de lanzamiento respecto a la horizontal
- **g**: Aceleración de la gravedad (9.8 m/s² o 10 m/s²)
- **t**: Tiempo de vuelo
- **h**: Altura en cualquier instante
- **x**: Distancia horizontal recorrida

### Principio de Independencia de Movimientos

Un concepto fundamental del tiro parabólico es que **los movimientos horizontal y vertical son independientes entre sí**. Esto significa que:

- El tiempo que tarda en caer es el mismo sin importar si tiene velocidad horizontal
- La velocidad horizontal no afecta el movimiento vertical
- Cada componente se puede analizar por separado

---

## Ejercicio Aplicado: Campeonato de Ingeniería UPSJB

### Contexto del Problema

Durante la **Semana de Ingeniería 2025** de la **Universidad Privada San Juan Bautista**, se organizó un campeonato deportivo entre las diferentes carreras. En la final de fútbol, un estudiante de **Ingeniería de Sistemas del 2do ciclo** pateó un tiro libre espectacular que quedó registrado para el análisis en la clase de Física I.

El estudiante pateó el balón con una velocidad inicial de **20 m/s** formando un ángulo de **37°** con la horizontal. El balón partió desde el suelo y logró superar la barrera defensiva antes de entrar al arco.

### Enunciado del Problema

Considerando que la aceleración de la gravedad es **g = 10 m/s²**, y que el balón parte desde el nivel del suelo, determina:

a) Las componentes horizontal y vertical de la velocidad inicial del balón

b) El tiempo total que el balón permaneció en el aire (tiempo de vuelo)

c) La altura máxima que alcanzó el balón

d) El alcance horizontal máximo del tiro

e) La velocidad del balón cuando pasó sobre la barrera que estaba a 3 metros de altura (durante la subida)

**Datos proporcionados:**
- v₀ = 20 m/s (velocidad inicial)
- θ = 37° (ángulo de lanzamiento)
- g = 10 m/s² (aceleración de la gravedad)
- sen(37°) = 0.6
- cos(37°) = 0.8

---

## Solución Paso a Paso

### a) Componentes de la velocidad inicial

Para resolver cualquier problema de tiro parabólico, el primer paso es **descomponer la velocidad inicial** en sus componentes horizontal y vertical usando funciones trigonométricas.

**Componente horizontal (vₓ):**
- Permanece constante durante todo el movimiento
- Se calcula con: vₓ = v₀ × cos(θ)

**Componente vertical inicial (v₀ᵧ):**
- Varía durante el movimiento debido a la gravedad
- Se calcula con: v₀ᵧ = v₀ × sen(θ)
```js
// Datos del problema
const v0 = 20; // m/s - velocidad inicial del balón
const theta = 37; // grados - ángulo de lanzamiento
const g = 10; // m/s² - aceleración de la gravedad
const sen37 = 0.6;
const cos37 = 0.8;

// Componente horizontal (permanece constante)
const vx = v0 * cos37;
console.log('Componente horizontal: vx =', vx, 'm/s');
// Resultado: vx = 16 m/s

// Componente vertical inicial
const v0y = v0 * sen37;
console.log('Componente vertical inicial: v0y =', v0y, 'm/s');
// Resultado: v0y = 12 m/s
```

**Respuesta:** 
- Componente horizontal: **vₓ = 16 m/s**
- Componente vertical inicial: **v₀ᵧ = 12 m/s**

**Interpretación:** El balón se mueve horizontalmente a 16 m/s constantes durante todo su vuelo, mientras que verticalmente inicia con 12 m/s hacia arriba, velocidad que disminuye debido a la gravedad.

---

### b) Tiempo de vuelo

El **tiempo de vuelo** es el tiempo total que el balón permanece en el aire, desde que es pateado hasta que toca el suelo nuevamente.

Para un tiro parabólico que inicia y termina al mismo nivel (suelo), el tiempo de vuelo se calcula con:

**Fórmula:** t_vuelo = (2 × v₀ᵧ) / g

Esta fórmula surge del hecho de que el tiempo de subida es igual al tiempo de bajada.
```js
const tVuelo = (2 * v0y) / g;
console.log('Tiempo de vuelo: t =', tVuelo, 's');
// Resultado: t = 2.4 s
```

**Respuesta:** **t = 2.4 segundos**

**Interpretación:** El balón estuvo en el aire durante 2.4 segundos desde el momento del pateo hasta que tocó el suelo. Esto le dio tiempo suficiente para superar la barrera y llegar al arco.

---

### c) Altura máxima

La **altura máxima** se alcanza en el punto medio de la trayectoria, cuando la componente vertical de la velocidad se hace cero (vᵧ = 0). En este momento, el balón deja de subir e inicia su descenso.

**Fórmula:** h_max = v₀ᵧ² / (2g)
```js
const hMax = (v0y ** 2) / (2 * g);
console.log('Altura máxima: h_max =', hMax, 'm');
// Resultado: h_max = 7.2 m
```

**Respuesta:** **h_max = 7.2 metros**

**Interpretación:** El balón alcanzó una altura de 7.2 metros sobre el nivel del suelo. Esta altura fue más que suficiente para superar la barrera de 3 metros y evitar que los defensores interceptaran el tiro.

---

### d) Alcance horizontal máximo

El **alcance horizontal máximo** es la distancia total que recorre el balón en el eje horizontal desde el punto de lanzamiento hasta donde toca el suelo.

Como la velocidad horizontal es constante, el alcance se calcula multiplicando esta velocidad por el tiempo de vuelo:

**Fórmula:** x_max = vₓ × t_vuelo
```js
const xMax = vx * tVuelo;
console.log('Alcance horizontal: x_max =', xMax, 'm');
// Resultado: x_max = 38.4 m
```

**Respuesta:** **x_max = 38.4 metros**

**Interpretación:** El balón recorrió una distancia horizontal de 38.4 metros antes de tocar el suelo. Esto es aproximadamente la distancia desde el punto penal hasta más allá de la línea de fondo en un campo de fútbol estándar.

---

### e) Velocidad a 3 metros de altura (subida)

Este apartado es más complejo porque necesitamos calcular la velocidad del balón en un punto específico de su trayectoria: cuando está a 3 metros de altura durante la fase de subida (pasando sobre la barrera).

**Paso 1:** Calcular la componente vertical de la velocidad a esa altura usando la ecuación de energía:

**Fórmula:** vᵧ² = v₀ᵧ² - 2g × h
```js
const h = 3; // metros - altura de la barrera
const vySquared = (v0y ** 2) - (2 * g * h);
const vy = Math.sqrt(vySquared);
console.log('Componente vertical a 3m: vy =', vy.toFixed(2), 'm/s');
// Resultado: vy = 9.80 m/s
```

**Paso 2:** Calcular la velocidad total (magnitud del vector velocidad):

**Fórmula:** v = √(vₓ² + vᵧ²)
```js
const v = Math.sqrt((vx ** 2) + (vy ** 2));
console.log('Velocidad total a 3m: v =', v.toFixed(2), 'm/s');
// Resultado: v = 18.55 m/s
```

**Paso 3:** Calcular el ángulo con la horizontal en ese punto:
```js
const alpha = Math.atan(vy / vx) * (180 / Math.PI);
console.log('Ángulo con la horizontal: α =', alpha.toFixed(2), '°');
// Resultado: α = 31.48°
```

**Respuesta:** 
- Velocidad del balón a 3 metros: **v = 18.55 m/s**
- Ángulo con la horizontal: **α = 31.48°**

**Interpretación:** Cuando el balón pasó sobre la barrera de 3 metros, su velocidad había disminuido ligeramente a 18.55 m/s (desde los 20 m/s iniciales), y su trayectoria formaba un ángulo de 31.48° con la horizontal, menor que el ángulo inicial de 37°.

---

## Código Completo para Verificación

Puedes ejecutar este código en la consola del navegador o en Node.js para verificar todos los cálculos:
```js
// ========================================
// EJERCICIO DE TIRO PARABÓLICO
// Campeonato de Ingeniería - UPSJB 2025
// ========================================

console.log('=== ANÁLISIS DEL TIRO LIBRE ===');
console.log('Estudiante: Ingeniería de Sistemas - 2do Ciclo');
console.log('Evento: Semana de Ingeniería UPSJB\n');

// Datos del problema
const v0 = 20;      // Velocidad inicial (m/s)
const theta = 37;   // Ángulo de lanzamiento (grados)
const g = 10;       // Gravedad (m/s²)
const sen37 = 0.6;  // Seno de 37°
const cos37 = 0.8;  // Coseno de 37°

console.log('Datos iniciales:');
console.log('   Velocidad inicial: v₀ =', v0, 'm/s');
console.log('   Ángulo de lanzamiento: θ =', theta, '°');
console.log('   Aceleración de gravedad: g =', g, 'm/s²\n');

// ========================================
// a) COMPONENTES DE VELOCIDAD
// ========================================
const vx = v0 * cos37;   // Componente horizontal
const v0y = v0 * sen37;  // Componente vertical inicial

console.log('a) Componentes de velocidad inicial:');
console.log('   Horizontal (constante): vₓ =', vx, 'm/s');
console.log('   Vertical inicial: v₀ᵧ =', v0y, 'm/s\n');

// ========================================
// b) TIEMPO DE VUELO
// ========================================
const tVuelo = (2 * v0y) / g;

console.log('b) Tiempo de vuelo:');
console.log('   t =', tVuelo, 'segundos');
console.log('   El balón estuvo', tVuelo, 's en el aire\n');

// ========================================
// c) ALTURA MÁXIMA
// ========================================
const hMax = (v0y ** 2) / (2 * g);

console.log('c) Altura máxima alcanzada:');
console.log('   h_max =', hMax, 'metros');
console.log('   El balón alcanzó', hMax, 'm de altura\n');

// ========================================
// d) ALCANCE HORIZONTAL
// ========================================
const xMax = vx * tVuelo;

console.log('d) Alcance horizontal máximo:');
console.log('   x_max =', xMax, 'metros');
console.log('   El balón recorrió', xMax, 'm horizontalmente\n');

// ========================================
// e) VELOCIDAD A 3 METROS (SOBRE LA BARRERA)
// ========================================
const h = 3;  // Altura de la barrera
const vySquared = (v0y ** 2) - (2 * g * h);
const vy = Math.sqrt(vySquared);
const v = Math.sqrt((vx ** 2) + (vy ** 2));
const alpha = Math.atan(vy / vx) * (180 / Math.PI);

console.log('e) Velocidad al pasar la barrera (3m):');
console.log('   Componente vertical: vᵧ =', vy.toFixed(2), 'm/s');
console.log('   Velocidad total: v =', v.toFixed(2), 'm/s');
console.log('   Ángulo con horizontal: α =', alpha.toFixed(2), '°');
console.log('   El balón superó la barrera con éxito\n');

// ========================================
// ANÁLISIS ADICIONAL
// ========================================
console.log('ANÁLISIS DEPORTIVO:');
console.log('   - Altura suficiente para superar defensores');
console.log('   - Alcance adecuado para llegar al arco');
console.log('   - Ángulo óptimo para tiro libre');
console.log('   - Velocidad mantenida al pasar obstáculos\n');

console.log('=== FIN DEL ANÁLISIS ===');
console.log('GOL para Ingeniería de Sistemas');
```

---

## Fórmulas Fundamentales del Tiro Parabólico

### Componentes de Velocidad
```
vₓ = v₀ × cos(θ)    →  Componente horizontal (constante)
v₀ᵧ = v₀ × sen(θ)   →  Componente vertical inicial
```

### Ecuaciones de Posición
```
x(t) = vₓ × t                    →  Posición horizontal
y(t) = v₀ᵧ × t - ½g × t²        →  Posición vertical
```

### Ecuaciones de Velocidad
```
vₓ(t) = v₀ × cos(θ)              →  Velocidad horizontal (constante)
vᵧ(t) = v₀ᵧ - g × t              →  Velocidad vertical (variable)
v(t) = √(vₓ² + vᵧ²)              →  Velocidad total (magnitud)
```

### Parámetros Máximos
```
Tiempo de vuelo:        t_vuelo = 2v₀ᵧ / g
Altura máxima:          h_max = v₀ᵧ² / (2g)
Alcance máximo:         x_max = v₀² × sen(2θ) / g
Tiempo a altura máxima: t_hmax = v₀ᵧ / g
```

### Ecuación de la Trayectoria
```
y = x × tan(θ) - (g × x²) / (2 × v₀² × cos²(θ))
```

### Velocidad en Cualquier Punto
```
vᵧ² = v₀ᵧ² - 2g × h              →  Componente vertical a altura h
v = √(vₓ² + vᵧ²)                  →  Magnitud de la velocidad
α = arctan(vᵧ / vₓ)               →  Ángulo con la horizontal
```

---

## Consejos para Resolver Problemas de Tiro Parabólico

1. **Identifica los datos:** Siempre comienza listando v₀, θ, g y lo que te piden encontrar

2. **Descompón la velocidad:** Calcula primero vₓ y v₀ᵧ, son la base de todo el problema

3. **Separa los movimientos:** Trata el eje X y el eje Y de forma independiente

4. **Usa las fórmulas correctas:** Elige la ecuación apropiada según lo que busques

5. **Verifica unidades:** Asegúrate de que todas las cantidades estén en el mismo sistema (SI)

6. **Interpreta resultados:** No solo calcules, entiende qué significa físicamente cada resultado

---

## Conclusión

El tiro parabólico es un excelente ejemplo de cómo la física describe movimientos que observamos diariamente. En este caso particular del campeonato de ingeniería, pudimos analizar matemáticamente un gol espectacular, comprendiendo cada aspecto de la trayectoria del balón.

**Datos finales del tiro libre:**
- Componentes iniciales: 16 m/s horizontal, 12 m/s vertical
- Tiempo en el aire: 2.4 segundos
- Altura máxima: 7.2 metros
- Distancia recorrida: 38.4 metros
- Velocidad sobre la barrera: 18.55 m/s a 31.48°

Este análisis demuestra cómo los conocimientos de Física I son aplicables a situaciones reales y deportivas, una habilidad fundamental para cualquier ingeniero de sistemas.

---

**Universidad Privada San Juan Bautista**  
*Formando ingenieros con base científica sólida*