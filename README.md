# Proyecto Windows 98 - Página Web Retro

Este proyecto es una página web con temática de Windows 98 que incluye varias aplicaciones y juegos interactivos. La interfaz principal simula el escritorio clásico de Windows 98 con iconos y la barra de tareas característica del sistema operativo.

## Estructura del Proyecto

La página principal (index.html) funciona como escritorio con acceso directo a todas las aplicaciones disponibles. Cada aplicación tiene su propia página independiente con funcionalidades específicas.

## Aplicaciones Disponibles

### 1. Tamagotchi
**Archivo:** tamagotchi.html, tama.css

**Estado:** Interfaz funcional, lógica no implementada

Esta es la aplicación del Tamagotchi, que muestra un gif animado de una mascota virtual. Tiene tres botones en la interfaz:
- Comida
- Amor
- Limpiar

Los botones están visibles pero actualmente no tienen funcionalidad programada. La ventana incluye el botón de cerrar funcional que te devuelve a la página principal.

### 2. Egg-Timer (Temporizador de Huevo)
**Archivo:** huevo.html, huevito.css, script.js

**Estado:** Completamente funcional

Un temporizador con temática de huevo hervido que funciona al 100%. La interfaz tiene cuatro opciones de tiempo:
- Huevo pasado (3 minutos)
- Huevo blando (4 minutos)
- Huevo medio (6 minutos)
- Huevo duro (8 minutos)

Funcionalidades:
- Al seleccionar una opción, se establece el tiempo correspondiente
- Botón play para iniciar el temporizador
- Botón stop para detener y reiniciar
- Cuenta atrás visible en formato MM:SS
- Animación de frames del huevo mientras el temporizador está en marcha
- Alerta cuando el tiempo termina
- No se puede cambiar el tiempo mientras el temporizador está corriendo

### 3. Calculadora
**Archivo:** calculadora.html, calcu.css, calcula.js

**Estado:** Completamente funcional

La calculadora funciona al 100%. Puedes realizar operaciones básicas:
- Suma (+)
- Resta (-)
- Multiplicación (*)
- División (/)
- Tiene un botón C para limpiar
- Permite usar decimales

**Easter egg:** Si sumas 1+1, en lugar de mostrar 2, aparece "El fantástico Ralph". Si lo haces de nuevo, dice "Sigue siendo Ralph", y si insistes más veces, te dice "Deja de sumar a Ralph".

### 4. Pokédex
**Archivo:** pokedex.html, pokedex.css, pokedex.js

**Estado:** Completamente funcional

La Pokédex es totalmente funcional y usa la API de PokeAPI. Características:
- Muestra información detallada de cada Pokémon (nombre, ID, tipo, altura, peso)
- Muestra las estadísticas (HP, Ataque, Defensa, Velocidad) con barras de progreso de colores
- Tiene un buscador donde puedes escribir el nombre o el ID del Pokémon
- Botones de navegación: anterior y siguiente
- Botón de aleatorio para ver un Pokémon al azar
- Las barras de estadísticas cambian de color según el valor (rojo para bajo, naranja para medio, verde para alto)
- Gestión de errores con un modal que aparece si buscas algo que no existe

Al cargar la página, muestra automáticamente a Bulbasaur (Pokémon #001).

### 5. Minecraft
**Archivo:** minecraft.html, minecraft.css

**Estado:** Interfaz funcional, lógica no implementada

Una aplicación con temática de Minecraft. La interfaz está preparada pero todavía no tiene funcionalidades implementadas. Sería algo tipo un juego o alguna herramienta relacionada con Minecraft, pero de momento solo muestra la estructura visual.

## Elementos Comunes

### Página Principal (index.html)
En la página principal aparecen todos los iconos de las aplicaciones en la parte izquierda simulando el escritorio de Windows 98. También hay una ventana flotante que muestra un meme estático.

**Funcionalidad del escritorio:**
- El botón "Carpeta" no tiene funcionalidad (solo visual)
- Todos los demás iconos son clickeables y te llevan a sus respectivas aplicaciones
- Los botones de la ventana del meme (interrogación y cerrar) no hacen nada

### Barra de Tareas
Todas las páginas tienen la barra de tareas de Windows 98 en la parte inferior con:
- Botón Start (no funcional, solo decorativo)
- Icono de volumen
- Reloj que muestra la hora actual en tiempo real (este sí funciona)

### Navegación
Cada página tiene la barra lateral izquierda con todos los iconos para navegar entre las diferentes aplicaciones. El icono activo se ve sin enlace (no clickeable) para indicar en qué página estás.

## Archivos del Proyecto

### HTML
- index.html - Página principal
- tamagotchi.html - Aplicación Tamagotchi
- huevo.html - Temporizador de huevo
- calculadora.html - Calculadora
- pokedex.html - Pokédex
- minecraft.html - Aplicación Minecraft

### CSS
- style.css - Estilos generales y del escritorio Windows 98
- tama.css - Estilos específicos del Tamagotchi
- huevito.css - Estilos del temporizador de huevo
- calcu.css - Estilos de la calculadora
- pokedex.css - Estilos de la Pokédex
- minecraft.css - Estilos de Minecraft

### JavaScript
- script.js - Script principal que controla el reloj de la barra de tareas y toda la funcionalidad del temporizador de huevo (animaciones, cuenta atrás, gestión de botones)
- calcula.js - Lógica de la calculadora
- pokedex.js - Lógica de la Pokédex con llamadas a la API

### Assets
Carpeta con recursos adicionales:
- assets/tamagotchi.png
- assets/blando.png
- assets/pokedex.png
- assets/animation/ (carpeta para animaciones)
- assets/fonts/ (carpeta para fuentes personalizadas)

## Resumen de Funcionalidad

**Lo que funciona:**
- Calculadora (100% funcional con easter egg incluido)
- Pokédex (100% funcional con API)
- Temporizador de huevo (100% funcional con animaciones)
- Navegación entre páginas
- Reloj en tiempo real en la barra de tareas
- Botón de cerrar en el Tamagotchi

**Lo que es solo visual:**
- Botones del Tamagotchi (Comida, Amor, Limpiar)
- Aplicación de Minecraft
- Botón Start en la barra de tareas
- Ventana del meme en la página principal
- Botón Carpeta en el escritorio

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript vanilla
- PokeAPI (https://pokeapi.co) para la Pokédex
- Iconos de Windows 98 de win98icons.alexmeub.com

## Notas

El proyecto está diseñado con una estética retro fiel a Windows 98, incluyendo los estilos de ventanas, botones y la barra de tareas características del sistema operativo. La idea es expandir las funcionalidades de las aplicaciones que aún no están completas manteniendo siempre la temática vintage.
