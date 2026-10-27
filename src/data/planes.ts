// Copy aprobado para /planes. Cambia textos aquí, no en los componentes.

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  delivery: string;
  featured?: boolean;
  badge?: string;
  /** "Todo lo de X, más:" — se omite en el plan base. */
  includesFrom?: string;
  features: string[];
  extra?: {
    title: string;
    items: string[];
    note: string;
  };
}

export const plans: Plan[] = [
  {
    id: "esencial",
    name: "Esencial",
    tagline: "Tu tienda lista para vender",
    price: "$2.490.000",
    delivery: "Entrega en 2 semanas",
    features: [
      "Tienda online diseñada a la medida de tu marca",
      "1 pasarela de pago + pago contra entrega",
      "Botón de WhatsApp para atender clientes",
      "Envío gratis desde el monto que definas",
      "Capacitación en video para administrar tu tienda",
      "1 ronda de cambios",
      "1 mes de soporte",
    ],
  },
  {
    id: "crecimiento",
    name: "Crecimiento",
    tagline: "Tu tienda lista para pautar y vender más",
    price: "$3.890.000",
    delivery: "Entrega en 3 semanas",
    featured: true,
    badge: "El más elegido",
    includesFrom: "Esencial",
    features: [
      "2 pasarelas de pago",
      "Pixel de Meta, GA4 y eventos de conversión",
      "Catálogo conectado a Instagram y Facebook",
      "Estrategias de venta elegidas según tu negocio, como ventas cruzadas, packs y barra de envío gratis",
      "Automatizaciones por WhatsApp: confirmación de pedido, aviso a tu equipo y estado del envío",
      "2 rondas de cambios",
      "2 meses de soporte",
      "Reunión de revisión al mes del lanzamiento",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Tu tienda y un equipo que la hace crecer contigo",
    price: "$7.290.000",
    delivery: "Entrega en 3 semanas",
    includesFrom: "Crecimiento",
    features: [
      "Pasarelas de pago ilimitadas",
      "2 landings para tus campañas",
      "Tienda mayorista con acceso privado, precios ocultos y mínimos de compra",
      "Automatizaciones avanzadas: carrito abandonado, confirmación de contra entrega, confirmación de transferencias y solicitud de reseñas",
      "5 rondas de cambios",
    ],
    extra: {
      title: "3 meses de acompañamiento incluidos:",
      items: [
        "2 reuniones al mes para revisar tus resultados",
        "2 campañas de mensajes al mes",
        "Hasta 1 cambio de temporada al mes",
        "2 mejoras al mes basadas en tus datos",
        "Soporte cuando algo falle",
      ],
      note: "Después de los 3 meses, continúa por $450.000/mes (precio exclusivo Pro).",
    },
  },
];

export const accompaniment = {
  title: "Acompañamiento mensual",
  text: "No te dejamos a solas con tu tienda: la revisamos, la mejoramos y te ayudamos a vender más cada mes.",
  listTitle: "Incluye cada mes:",
  items: [
    "2 reuniones para revisar tus resultados",
    "2 campañas de mensajes por WhatsApp",
    "Hasta 1 cambio de temporada (no acumulable)",
    "2 mejoras basadas en tus datos",
    "Soporte cuando algo falle",
  ],
  prices: [
    { amount: "$850.000/mes", label: "" },
    { amount: "$450.000/mes", label: "para clientes Pro" },
  ],
  note: "Requisito: tu tienda debe tener medición y catálogo de Meta activos (incluidos en Crecimiento y Pro, o como add-on).",
};

export interface AddOn {
  name: string;
  description?: string;
  price: string;
}

export const addOns: AddOn[] = [
  {
    name: "Medición y catálogo",
    description: "Pixel de Meta, GA4, eventos de conversión y catálogo en Instagram y Facebook",
    price: "$490.000",
  },
  {
    name: "Estrategias de venta",
    description: "Ventas cruzadas, packs y más, según tu negocio",
    price: "$990.000",
  },
  {
    name: "Automatizaciones básicas",
    description: "Confirmación de pedido, aviso a tu equipo y estado del envío por WhatsApp",
    price: "$1.190.000",
  },
  {
    name: "Automatizaciones avanzadas",
    description: "Carrito abandonado, contra entrega, transferencias y reseñas (requiere las básicas)",
    price: "$1.490.000",
  },
  {
    name: "Carrito abandonado",
    description: "Recupera ventas perdidas por WhatsApp",
    price: "$690.000",
  },
  {
    name: "Tienda mayorista",
    description: "Acceso privado, precios ocultos y mínimos de compra",
    price: "$1.690.000",
  },
  {
    name: "Cambio de temporada",
    description: "Colecciones, promociones, colores, imágenes y decoración para fechas especiales",
    price: "$590.000",
  },
  {
    name: "Campaña de mensajes",
    description: "Envío masivo por WhatsApp (+ costo de Meta)",
    price: "$190.000",
  },
  {
    name: "Pasarela de pago adicional",
    price: "$190.000",
  },
];

export const beforeChoosing = [
  {
    title: "Tu tienda es 100% tuya.",
    text: "Tu tienda, tu dominio y tus cuentas quedan a tu nombre desde el primer día.",
  },
  {
    title: "Costos externos.",
    text: "Los planes no incluyen la suscripción a Shopify, el dominio, las apps de terceros, las comisiones de las pasarelas y de Shopify, ni el costo de los mensajes de WhatsApp que cobra Meta. Te ayudamos a elegir solo lo que tu negocio necesita.",
  },
  {
    title: "Carga de productos.",
    text: "Tú cargas tus productos con una ficha que te entregamos para que cada descripción quede completa y lista para vender.",
  },
];
