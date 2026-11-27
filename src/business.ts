export const contact = {
  name: 'BuscandoPersonas.org Sin Fronteras',
  email: 'contacto@buscandopersonas.org',
  mobile: '+51 999 934 443',
  mobileHref: 'tel:+51999934443',
  phone: '+51 1 754 8441',
  phoneHref: 'tel:+5117548441',
  address: 'Av. República del Ecuador 1025, bloque 8, dpto. 502',
  locality: 'Lima 15079, Perú',
  form: 'https://form.jotform.com/50398505051654',
  facebook: 'https://www.facebook.com/BuscandoPersonasSinFronteras',
  tiktok: 'https://www.tiktok.com/@buscandopersonas.org',
  missingPersonReport: 'https://www.gob.pe/84647-denunciar-la-desaparicion-de-una-persona',
};

export function whatsapp(message = 'Hola, quisiera orientación sobre una búsqueda de personas.') {
  return 'https://wa.me/51999934443?text=' + encodeURIComponent(message);
}

export const navigation = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Cómo trabajamos', href: '/#como-trabajamos' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Preguntas', href: '/#preguntas' },
];

export const otherServices = [
  {
    title: 'Asesoría jurídica',
    description: 'Orientación sobre asuntos de familia vinculados a tu caso, como filiación, adopción, alimentos o herencias.',
  },
  {
    title: 'Deudores por alimentos',
    description: 'Evaluamos solicitudes de ubicación relacionadas con una demanda o trámite de pensión de alimentos.',
  },
  {
    title: 'Investigación de infidelidades',
    description: 'Consulta reservada para evaluar el alcance de una investigación y la documentación que se puede obtener por vías legales.',
  },
  {
    title: 'Ubicación y recuperación de vehículos',
    description: 'Evaluación de casos de ubicación y recuperación de vehículos con la documentación y las autorizaciones aplicables.',
  },
  {
    title: 'Investigación de estafas',
    description: 'Revisamos la información disponible sobre un posible fraude para definir qué puede investigarse por vías legales.',
  },
  {
    title: 'Suplantación de identidad',
    description: 'Orientación para personas y empresas afectadas por perfiles falsos o por el uso de su identidad en redes sociales.',
  },
  {
    title: 'Investigaciones para empresas',
    description: 'Investigación de posibles robos internos y otras irregularidades dentro de una empresa.',
  },
];

export const questions = [
  {
    question: '¿Puedo empezar si tengo pocos datos?',
    answer: 'Sí. Un nombre, una ciudad aproximada, una fecha o una fotografía pueden servir para una primera evaluación. Cuéntanos qué recuerdas y revisaremos qué información podría ayudar.',
  },
  {
    question: '¿Puedo consultar desde fuera del Perú?',
    answer: 'Sí. Puedes escribirnos por WhatsApp o por correo desde el extranjero. Cuéntanos en qué país te encuentras y qué vínculo tiene tu búsqueda con el Perú o con otro país para evaluar el alcance.',
  },
  {
    question: '¿Cuánto cuesta y cuánto tarda una búsqueda?',
    answer: 'El costo y el plazo dependen de la información disponible, el lugar y la complejidad del caso. Puedes pedir una evaluación y consultar las condiciones antes de tomar una decisión.',
  },
  {
    question: '¿Qué pasa si la persona prefiere mantener distancia?',
    answer: 'Encontrar a alguien y retomar el contacto son decisiones distintas. Si existe la posibilidad de un reencuentro, la voluntad y la privacidad de la persona buscada deben respetarse.',
  },
];
