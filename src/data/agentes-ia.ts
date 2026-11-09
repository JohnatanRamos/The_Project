import data from "../config/phone_messages.json";

// Enlace de WhatsApp para todos los botones de /agentes-ia.
// Usa el número del sitio (src/config/phone_messages.json). Cámbialo ahí si es otro.
export const waBase = `https://wa.me/${data.phone_number}`;

export const waPlan = (plan: string) =>
  `${waBase}?text=${encodeURIComponent(data.plan_message.replace("{plan}", plan))}`;

export const chat = [
  { from: "cliente", text: "Hola, ¿tienen el vestido negro en talla M?" },
  {
    from: "novi",
    text: "¡Hola! Sí, nos queda en M. Cuesta $129.000 y el envío a Medellín llega mañana. ¿Te lo separo?",
  },
  { from: "cliente", text: "Sí, ¿cómo pago?" },
  {
    from: "novi",
    text: "Te envío el link de pago. Apenas se confirme, tu pedido queda listo para despacho.",
  },
] as const;

export const steps = [
  {
    title: "Conectamos tu WhatsApp",
    text: "Sigues usando tu mismo número y tu app de siempre. Tú y Novi atienden desde el mismo chat.",
  },
  {
    title: "Novi aprende tu negocio",
    text: "Le cargamos tu catálogo, tus precios, tus políticas y tu forma de vender, para que responda como tu mejor vendedor.",
  },
  {
    title: "Lo probamos juntos",
    text: "Tú o alguien de tu equipo le escribe a Novi como si fuera un cliente. Ajustamos hasta que responda como quieres.",
  },
  {
    title: "Novi empieza a vender",
    text: "Responde, recomienda productos y toma pedidos 24/7. Cuando un cliente necesita a una persona, te lo pasa.",
  },
];

export const objections = [
  {
    q: "¿Va a sonar como un robot?",
    a: "No. Novi aprende tu tono y tu forma de vender. Tus clientes sienten que hablan con tu negocio, no con una máquina.",
  },
  {
    q: "¿Y si se equivoca con un cliente?",
    a: "Novi solo responde con la información que tú le das. Si no sabe algo o el cliente pide una persona, te pasa el chat de inmediato.",
  },
  {
    q: "¿Pierdo mi número de WhatsApp?",
    a: "No. Sigues usando tu mismo número y tu app. Puedes entrar a cualquier conversación cuando quieras.",
  },
  {
    q: "¿Tengo que pagarle algo a Meta?",
    a: "Responder a los clientes que te escriben normalmente no tiene costo. Meta solo cobra cuando tú inicias la conversación con plantillas, y eso lo pagas directamente a Meta.",
  },
  {
    q: "¿Necesito saber de tecnología?",
    a: "No. Nosotros conectamos, configuramos y probamos todo. Tú solo nos das la información de tu negocio.",
  },
  {
    q: "¿Qué pasa si cambio precios o productos?",
    a: "Lo cambias tú mismo desde el panel, en minutos. Te enseñamos a hacerlo en la implementación y Novi responde con la información nueva de inmediato.",
  },
];

export const guaranteeObjection = {
  q: "¿Y si no me funciona?",
  a: "Tienes 14 días desde que Novi sale en vivo para comprobarlo. Si no atiende como lo acordamos, te devolvemos la implementación.",
};

export const supportItems = [
  "Hablas por WhatsApp con el equipo que configuró tu Novi, no con un bot ni un formulario.",
  "Conocemos tu negocio porque construimos tu agente contigo.",
  "Respuesta en menos de 1 hora en horario de soporte: lunes a viernes de 8 a.m. a 6 p.m. y sábados de 8 a.m. a 1 p.m.",
];

export interface AgentPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
}

export const agentPlans: AgentPlan[] = [
  {
    id: "esencial",
    name: "Esencial",
    price: "$390.000",
    features: [
      "6.000 créditos al mes",
      "3 usuarios",
      "2 reuniones de seguimiento al mes",
      "Soporte por WhatsApp en menos de 1 hora",
    ],
    cta: "Empezar con Esencial",
  },
  {
    id: "crecimiento",
    name: "Crecimiento",
    price: "$700.000",
    features: [
      "16.000 créditos al mes",
      "8 usuarios",
      "1 reunión de seguimiento a la semana",
      "Soporte por WhatsApp en menos de 1 hora",
    ],
    cta: "Empezar con Crecimiento",
    featured: true,
    badge: "Recomendado",
  },
  {
    id: "ultimate",
    name: "Ultimate",
    price: "$1.290.000",
    features: [
      "30.000 créditos al mes",
      "15 usuarios",
      "Persona asignada a tu cuenta",
      "Soporte por WhatsApp en menos de 1 hora",
    ],
    cta: "Empezar con Ultimate",
  },
];

export const forWhom = {
  yes: [
    "Vendes productos y la mayoría de tus ventas pasan por WhatsApp.",
    "Recibes más chats de los que alcanzas a responder, o se te escapan de noche y los fines de semana.",
    "Tienes (o quieres construir) una forma clara de vender.",
    "Quieres crecer sin contratar más personas para atender el chat.",
  ],
  no: [
    "Recibes muy pocos mensajes al día y los atiendes bien tú solo.",
    "Buscas un bot gratis o una solución sin acompañamiento.",
    "No vendes por WhatsApp.",
  ],
};

export const faqs = [
  {
    q: "¿Qué necesito entregarles para empezar?",
    a: "Tu catálogo con precios, tus políticas de envío, pagos y cambios, y acceso a tu cuenta de Meta Business.",
  },
  {
    q: "¿Funciona con mi tienda Shopify?",
    a: "Sí, conectamos tu catálogo de Shopify durante la implementación.",
  },
  {
    q: "¿Qué pasa si se me acaban los créditos?",
    a: "Recargas desde la plataforma en minutos y Novi sigue atendiendo.",
  },
  {
    q: "¿Hay permanencia mínima?",
    a: "No. Te quedas porque Novi te funciona, no porque un contrato te obligue.",
  },
  {
    q: "¿Cómo pago?",
    a: "Desde nuestra plataforma, con tarjeta de crédito o débito, transferencia o efectivo.",
  },
];
