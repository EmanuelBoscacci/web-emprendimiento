# Roadmap de Desarrollo — Web de Emprendimiento (Punto Litoral)

Documento de visión técnica, arquitectura visual y hoja de ruta para la construcción de la plataforma digital.

---

## 1. Identidad Visual, Paleta de Color y Stack

### Identidad y Assets
- **Marca**: Punto Litoral — Consultoría de Productividad y Automatización.
- **Logo Oficial**: Guardado en [`public/logo.png`](file:///c:/Users/bosca/web-emprendimiento/public/logo.png), [`public/logo-dark.png`](file:///c:/Users/bosca/web-emprendimiento/public/logo-dark.png) y [`public/logo-badge.png`](file:///c:/Users/bosca/web-emprendimiento/public/logo-badge.png).
- **Guía de Negocio**: [`CONTEXT.md`](file:///c:/Users/bosca/web-emprendimiento/CONTEXT.md).

### Paleta de Colores de Marca
- **Fondo Base (`#050b14`)**: Negro azulado profundo de base.
- **Azul Marino Profundo (`#0c1f3d`)**: Para tarjetas Bento, contenedores y sombras volumétricas.
- **Azul Eléctrico / Acento (`#1c5c8a`)**: Para botones destacados, bordes activos, resplandores (*glows*) y microinteracciones.
- **Acento Claro / Texto (`#f8fafc`)**: Blanco roto de alto contraste para máxima legibilidad.

### Stack y Librerías Activas
- **Framework Core**: [Next.js](https://nextjs.org/) 16 (App Router + React 19).
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) v4.
- **Física y Animaciones**: [Framer Motion](https://motion.dev/) (motion components, `AnimatePresence`, transiciones de estado).
- **Desplazamiento Suave**: [Lenis](https://lenis.darkroom.engineering/) (120 FPS).
- **Entorno Tridimensional**: [Spline](https://spline.design/) (`@splinetool/react-spline`).

---

## 2. Estructura de Secciones y Progreso

- [x] **Identidad y Base Estética de Color**:
  - Incorporación del logo en `public/` (recortado y con variante luminosa).
  - Paleta oficial configurada en `globals.css` y `layout.tsx`.
- [x] **Sección Hero Refinado de Punto Litoral**:
  - Título: *"Recuperá el tiempo que tu negocio pierde en tareas repetitivas."*
  - Subtítulo: *"No vendemos tecnología. Vendemos tiempo, eficiencia y mejores decisiones."*
  - Badge de ubicación: Sunchales y Santa Fe (presencial y remoto).
  - Botones CTA con resplandor eléctrico `#1c5c8a` (WhatsApp y Diagnóstico Gratuito).
  - Visor 3D interactivo integrado con Spline.
- [x] **Bento Grid de Soluciones Concretas**:
  - Tarjeta 1 (Grande): Clasificación y ruteo inteligente (WhatsApp / Email) con simulador de triage responsive.
  - Tarjeta 2: Integración directa entre planillas, WhatsApp y software interno (grid proporcional móvil).
  - Tarjeta 3: Monitoreo web y alertas automáticas de insumos/costos.
  - Tarjeta 4: Generación automática de presupuestos, remitos y reportes.
  - Tarjeta 5: Paneles y dashboards a medida para decisiones operativas.
- [x] **Sección "¿Por qué Punto Litoral?" (3 Pilares)**:
  - Pilar 1: Implementación en días (&lt; 10 días).
  - Pilar 2: Recuperación real de horas (15h a 30h semanales ahorradas).
  - Pilar 3: Tecnología adaptada a tu realidad (cero fricción).
- [x] **Sección "Metodología en 4 Pasos"**:
  - Paso 01: Diagnóstico y Mapeo (30 minutos).
  - Paso 02: Diseño de Solución (48 a 72 horas).
  - Paso 03: Puesta en Marcha (&lt; 10 días a producción).
  - Paso 04: Medición de Impacto y Acompañamiento (Soporte activo).
- [x] **Llamado a la Acción Final (CTA Banner)**:
  - Diagnóstico gratuito de 30 minutos y botón directo a WhatsApp.
- [x] **Modal Interactivo de Diagnóstico (`LeadModal`)**:
  - Formulario glassmorphic (`#0c1f3d/90` con borde `#1c5c8a/40`) controlado por estado.
  - Animaciones fluidas de entrada y salida con Framer Motion (`AnimatePresence`).
  - Cierre por tecla Escape y clic en backdrop con bloqueo de scroll de fondo.
  - Feedback de carga y pantalla de confirmación con redirección opcional a WhatsApp.
- [x] **Cuadro Comparativo: "Tu negocio hoy vs. Con Punto Litoral"**:
  - Comparación visual del antes y el después en operaciones diarias (WhatsApp, planillas, cotizaciones, cobranzas y tiempo directivo).
  - 3 tarjetas de métricas de impacto (+85% velocidad, 0 hs manuales, 15-25 hs ahorradas).
- [x] **Sección de Preguntas Frecuentes (FAQ Accordion)**:
  - 6 preguntas estratégicas sobre adopción de herramientas, tiempos, curva técnica, presencial/remoto y seguridad.
  - Componente `FaqAccordion.tsx` interactivo con Framer Motion y botón de consulta directa por WhatsApp.
- [x] **Navbar Flotante Fija (Floating Island Navbar)**:
  - Diseño tipo isla suspendida con `backdrop-blur-2xl`, borde reactivo al scroll y píldora animada para la sección activa.
  - Menú desplegable táctil responsive para dispositivos móviles con navegación suave por anclas.
- [x] **Botón Flotante de WhatsApp (FAB)**:
  - Acceso persistente con micro-animación tipo radar a WhatsApp oficial (+54 9 3493 50-6346).
