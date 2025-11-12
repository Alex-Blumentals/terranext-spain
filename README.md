# Presentación Zelestra Pizarroso-I

Presentación web para TerraNext - Programa de Gestión Regenerativa del Parque Fotovoltaico Pizarroso-I.

## 🎯 Proyecto

**Cliente:** Zelestra Ingeniería
**Ubicación:** Pizarroso-I, Cáceres, Extremadura (100 ha, 50 MWp)
**Propuesta:** Fase 1 - Diagnóstico y Evaluación (€137k, 10 semanas)

## 🛠️ Tecnologías

- **Reveal.js 5.0** - Framework de presentaciones HTML
- **Vite** - Build tool y dev server
- **CSS3** - Estilos personalizados con colores de marca TerraNext

## 🎨 Colores de Marca

- **Navy Deep:** #0D3B66 (títulos principales)
- **Bright Green:** #79C048 (regeneración, éxito)
- **Medium Blue:** #1767B3 (agua, tecnología)
- **Charcoal:** #333333 (texto)

## 🚀 Desarrollo Local

### Instalación

```bash
npm install
```

### Servidor de Desarrollo

```bash
npm run dev
```

Abre http://localhost:3000 en tu navegador.

### Build para Producción

```bash
npm run build
```

### Vista Previa del Build

```bash
npm run preview
```

## 📖 Navegación de la Presentación

- **Flechas ←/→:** Navegar entre slides
- **Espacio:** Siguiente slide
- **Esc:** Vista general
- **F:** Pantalla completa
- **S:** Notas del presentador (si disponibles)
- **?:** Ayuda de teclado

## 🖨️ Exportar a PDF

1. Añade `?print-pdf` a la URL: `http://localhost:3000/?print-pdf`
2. Abre el diálogo de impresión del navegador (Ctrl/Cmd + P)
3. Selecciona "Guardar como PDF"
4. Configura:
   - Márgenes: Ninguno
   - Gráficos de fondo: Activado

## 📱 Características

✅ **Responsive Design** - Adaptado para desktop, tablet y móvil
✅ **Brand Colors** - Colores oficiales de TerraNext
✅ **10 Slides Principales** - Contenido completo de la propuesta
✅ **Navegación Táctil** - Soporte para dispositivos touch
✅ **Print-Friendly** - Exportación a PDF optimizada
✅ **Keyboard Navigation** - Control completo por teclado

## 📂 Estructura del Proyecto

```
presentation/
├── index.html           # Presentación principal
├── main.js             # Inicialización Reveal.js
├── package.json        # Dependencias
├── vite.config.js      # Configuración Vite
├── vercel.json         # Configuración Vercel
├── assets/             # Imágenes y recursos
│   └── TerraNextHorizontal.svg
└── styles/             # Estilos personalizados
    └── custom-theme.css
```

## 🌐 Despliegue en Vercel

### Dominio Custom

Configurado para: **presentacion.terranext.co**

### Variables de Entorno

No se requieren variables de entorno para este proyecto.

### Configuración de Dominio

1. En el dashboard de Vercel:
   - Ve a Settings → Domains
   - Añade: `presentacion.terranext.co`

2. En tu proveedor DNS (TerraNext):
   - Tipo: CNAME
   - Nombre: presentacio
   - Valor: cname.vercel-dns.com

## 📄 Contenido de los Slides

1. **Portada** - Información del proyecto
2. **Marco Regulatorio** - Compliance y permisos
3. **Visión Completa** - ROI de €2-5M en 25 años
4. **Estructura Fase 1** - 3 flujos de trabajo paralelos
5. **Semanas 1-3** - 3 visitas esenciales
6. **Hito Semana 3** - Selección de áreas prioritarias
7. **Semanas 4-10** - Análisis profundo
8. **Inversión y Entregables** - €137k transparente
9. **Decisión GO/NO-GO** - 4 opciones posibles
10. **Próximos Pasos** - Cómo proceder

## 🔧 Mantenimiento

### Actualizar Contenido

Edita `index.html` - cada `<section>` es un slide.

### Cambiar Colores

Edita `styles/custom-theme.css` - variables CSS en `:root`.

### Actualizar Logo

Reemplaza el archivo en `assets/TerraNextHorizontal.svg`.

## 📞 Contacto

**TerraNext SIA**
Alex Blumentals, CEO
Email: alex@terranext.co
Teléfono: +371 22436891

---

*"Transformando parques solares en ecosistemas regenerativos"*
