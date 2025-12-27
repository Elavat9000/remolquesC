export const siteData = {
  name: "Concaresa Remolques",
  tagline: "Impulsa tu carga, impulsa tu negocio",
  description: "Fabricamos remolques resistentes, diseñados para trabajar tan duro como tú",
  Direccion: "Aquiles Serdán S/N, Barrio San Marcos, Zumpango, 55600, Estado de México.",
  Telefonos: [
    "+52 56 3412 2027",
    "+52 591 917 6097",
    "+52 591 917 6098",
    "+52 591 100 0901",
  ],
  email: "elavat.9000@gmail.com",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
};

export const socialLinks = [
  { name: "facebook", icon: "ri-facebook-fill", label: "Facebook" },
  { name: "instagram", icon: "ri-instagram-fill", label: "Instagram" },
  { name: "twitter", icon: "ri-twitter-x-fill", label: "Twitter" },
  { name: "youtube", icon: "ri-youtube-fill", label: "YouTube" },
];

export const contactInfo = [
  {
    icon: "ri-map-pin-line",
    title: "Dirección",
    content: siteData.Direccion,
    link: null,
  },

  {
    icon: "ri-phone-line",
    title: "Teléfonos",
    content: siteData.Telefonos, // 👈 ahora es array
    link: "tel",
  },

  {
    icon: "ri-mail-line",
    title: "Email",
    content: siteData.email,
    link: `mailto:${siteData.email}`,
  },

  // {
  //   icon: "ri-time-line",
  //   title: "Hours",
  //   content: [
  //     "Open 24/7 for Premium and Elite members",
  //     "Basic members: 5 AM - 11 PM daily",
  //   ],
  //   link: null,
  // },
];


export const navigation = [
  { name: "Bienvenidos", href: "/" },
  { name: "Acerca de nosotros", href: "/about" },
  { name: "Nuestros Productos", href: "/classes" }
];

export const features = [
  {
    title: "24/7 Access",
    description: "Work out on your schedule with round-the-clock access to our facilities",
    icon: "ri-time-line",
  },
  {
    title: "Expert Trainers",
    description: "Certified personal trainers to guide you on your fitness journey",
    icon: "ri-user-star-line",
  },
  {
    title: "Modern Equipment",
    description: "State-of-the-art fitness equipment for all your training needs",
    icon: "ri-settings-3-line",
  },
  {
    title: "Group Classes",
    description: "Join energizing group classes from yoga to HIIT",
    icon: "ri-group-line",
  },
  {
    title: "Nutrition Support",
    description: "Get personalized nutrition plans to complement your workouts",
    icon: "ri-restaurant-line",
  },
  {
    title: "Community",
    description: "Join a supportive community of fitness enthusiasts",
    icon: "ri-community-line",
  },
];


import remolque12 from "../assets/remolques_12.jpg";
import remolque13 from "../assets/cajassecas_14.jpg";
import remolque14 from "../assets/remolques_02.jpg";


export const classes = [
  {
    name: "Remolque Caja Baja",
    description: "Ideal para transporte seguro de mercancía general",
    detailedDescription:
      "El remolque de caja seca está diseñado para proteger tu carga de las condiciones climáticas y del exterior. Es una solución confiable para el transporte de mercancía general, logística y distribución, ofreciendo resistencia, durabilidad y seguridad en cada recorrido.",
    duration: "Capacidad estándar",
    difficulty: "Uso Comercial o Personal",
    image: remolque12,
    benefits: [
      "Protección total de la carga",
      "Alta durabilidad estructural",
      "Ideal para logística y reparto",
      "Bajo mantenimiento",
    ],
    trainer: "Desde $MXN 25,000 – $MXN 100,000",
    whatToExpect:
      "Estructura reforzada, acabados de calidad, diseño pensado para trabajo continuo",
  },
  {
    name: "Remolque Caja Seca",
    description: "Versatilidad y resistencia para carga pesada",
    detailedDescription:
      "El remolque tipo plataforma es perfecto para transportar maquinaria, materiales de construcción y cargas de gran volumen. Su diseño abierto permite una carga y descarga rápida, manteniendo estabilidad y resistencia en todo momento.",
    duration: "Capacidad media y pesada",
    difficulty: "Uso Industrial",
    image: remolque13,
    benefits: [
      "Alta capacidad de carga",
      "Fácil carga y descarga",
      "Estructura robusta",
      "Versátil para distintos usos",
    ],
    trainer: "Desde $MXN 210,000 – $MXN 599,000",
    whatToExpect:
      "Chasis reforzado, superficie antideslizante y excelente estabilidad en carretera",
  },
  {
    name: "Remolque Punto de venta",
    description: "Diseñado para el transporte seguro de ganado",
    detailedDescription:
      "El remolque ganadero está fabricado para garantizar la seguridad y el bienestar de los animales durante el traslado. Cuenta con ventilación adecuada, materiales resistentes y un diseño que facilita la limpieza y el manejo.",
    duration: "Capacidad variable",
    difficulty: "Uso Comercial",
    image: remolque14,
    benefits: [
      "Ventilación adecuada",
      "Materiales resistentes",
      "Fácil limpieza",
      "Diseño seguro",
    ],
    trainer: "Desde $MXN 70,000 – $MXN 130,000",
    whatToExpect:
      "Diseño funcional, puertas seguras y acabados pensados para uso rudo",
  },
];


export const pricingPlans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    features: [
      "Access to gym facilities",
      "Basic equipment usage",
      "Locker room access",
      "Free parking",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$59",
    period: "/month",
    features: [
      "Everything in Basic",
      "Group classes included",
      "Personal trainer consultation",
      "Nutrition guidance",
      "24/7 access",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "$99",
    period: "/month",
    features: [
      "Everything in Premium",
      "Unlimited personal training",
      "Custom meal plans",
      "Priority class booking",
      "Spa & recovery access",
    ],
    popular: false,
  },
];

export const testimonials = [
  {
    name: "Luis Pérez",
    role: "Cliente de Caja Baja",
    content: "El remolque de Caja Baja superó mis expectativas. Es resistente, estable y perfecto para transportar maquinaria pesada sin complicaciones.",
    rating: 5,
  },
  {
    name: "Ana Morales",
    role: "Cliente de Caja Seca",
    content: "La Caja Seca nos dio la seguridad que necesitábamos para nuestra mercancía. Excelente calidad, buen acabado y entrega puntual.",
    rating: 5,
  },
  {
    name: "Roberto Castillo",
    role: "Cliente Punto de Venta",
    content: "El remolque Punto de Venta es práctico y muy funcional. Me ha ayudado a llevar mi negocio a más lugares y atraer más clientes.",
    rating: 5,
  },
];




export const facilities = [
  {
    title: "Caja Baja",
    description: "Ideal para el traslado de maquinaria pesada, estructuras y cargas de gran volumen",
    image: remolque12,
    
  },
  {
    title: "Caja Seca",
    description: "Transporte seguro de mercancía protegida contra clima, polvo y humedad",
    image: remolque13,
  },
  {
    title: "Food Trucks",
    description: "Remolques tipo food truck listos para que inicies tu negocio de comida desde el primer día",
    image: remolque14,
  },

];

export const faqs = [
  {
    question: "¿Qué tipo de remolque necesito para mi negocio?",
    answer: "Depende del uso que le darás. La Caja Baja es ideal para maquinaria o cargas pesadas, la Caja Seca protege mercancía del clima y el Punto de Venta es perfecto para ventas móviles y eventos.",
  },
  {
    question: "¿Los remolques están listos para usarse al momento de la entrega?",
    answer: "Sí, todos los remolques se entregan listos para trabajar, con estructura reforzada y acabados funcionales según el modelo.",
  },
  {
    question: "¿Puedo personalizar mi remolque?",
    answer: "Claro, ofrecemos opciones de personalización como medidas, colores, rotulación y adaptaciones especiales según tus necesidades.",
  },
  {
    question: "¿Qué capacidad de carga tienen los remolques?",
    answer: "La capacidad varía según el modelo. Las Cajas Bajas soportan cargas pesadas, mientras que las Cajas Secas y Puntos de Venta están diseñados para un equilibrio entre carga y movilidad.",
  },
  {
    question: "¿Requieren algún tipo de mantenimiento especial?",
    answer: "El mantenimiento es sencillo: revisión periódica de llantas, frenos, luces y estructura. Con cuidados básicos, el remolque tiene una larga vida útil.",
  },
  {
    question: "¿Puedo circular con el remolque en carretera?",
    answer: "Sí, nuestros remolques cumplen con los requisitos básicos para circular en carretera. Recomendamos verificar normativas locales y contar con placas y permisos correspondientes.",
  },
];


export const classSchedule = [
  { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
  { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
  { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
  { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
  { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
  { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
  { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
];
export const successStories = [
  {
    name: "Carlos Hernández",
    age: 41,
    duration: "3 months",
    result: "Aumentó su capacidad de carga",
    story: "Compré una Caja Seca para mi negocio de construcción y fue la mejor decisión. Ahora transporto maquinaria pesada sin problemas y mis entregas son más rápidas y seguras.",
    beforeImage: "https://images.unsplash.com/photo-1655668539536-96108193b14f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    afterImage: "https://images.unsplash.com/photo-1499147463149-adc471bbc639?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "María González",
    age: 36,
    duration: "2 months",
    result: "Mejor control y protección de su mercancía",
    story: "La Caja Baja nos permitió transportar productos sin riesgos por clima o robos. Desde el primer mes notamos menos pérdidas y mayor confianza de nuestros clientes.",
    beforeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0EVCAqZ-gdd6in6df7fO8i0X_OKzyEaawrg&s",
    afterImage: "https://images.unsplash.com/photo-1698998882426-39a6609ab10a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "José Ramírez",
    age: 29,
    duration: "1 month",
    result: "Incrementó sus ventas",
    story: "Adquirí un remolque Punto de Venta y empecé a vender en ferias y eventos. Es práctico, llamativo y funcional. Recuperé la inversión más rápido de lo que esperaba.",
    beforeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2JU8j6djaA94ChlGO1xV457BQYmyLSArhQ&s",
    afterImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdJ1R_VLO1K4CKiJw0UECG8bqMqHHjD8Qxw&s",
  },
];


export const statistics = [
  { number: "230+", label: "Servicios de Remolque Realizados", icon: "ri-truck-line" },
  { number: "24/7", label: "Atención Disponible", icon: "ri-time-line" },
  { number: "20+", label: "Años de Experiencia", icon: "ri-award-line" },
  { number: "100+", label: "Clientes Empresariales", icon: "ri-building-line" },
  { number: "98%", label: "Clientes Satisfechos", icon: "ri-thumb-up-line" },
  { number: "50+", label: "Unidades en Operación", icon: "ri-steering-2-line" },
];

export const fullSchedule = {
  monday: [
    { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  ],
  tuesday: [
    { time: "6:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "8:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "9:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "6:00 PM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 PM", class: "Strength Training", trainer: "John Smith" },
  ],
  wednesday: [
    { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  ],
  thursday: [
    { time: "6:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "8:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "9:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "6:00 PM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 PM", class: "Strength Training", trainer: "John Smith" },
  ],
  friday: [
    { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  ],
  saturday: [
    { time: "8:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "10:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "11:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
  ],
  sunday: [
    { time: "9:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "10:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "11:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
  ],
};

export const trainers = [
  {
    name: "John Smith",
    role: "Head Trainer",
    specialization: "Strength Training & Nutrition",
    experience: "10+ years",
    bio: "John is a certified strength and conditioning specialist with over a decade of experience helping athletes and fitness enthusiasts achieve their goals. He specializes in strength training, powerlifting, and nutrition coaching.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&q=80",
    certifications: ["CSCS", "NASM-CPT", "Nutrition Specialist"],
  },
  {
    name: "Sarah Johnson",
    role: "Yoga & Pilates Instructor",
    specialization: "Yoga, Pilates & Holistic Wellness",
    experience: "8+ years",
    bio: "Sarah is a certified yoga and Pilates instructor with extensive training in multiple yoga styles. She combines traditional practices with modern techniques to help members find balance, flexibility, and inner peace.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop&q=80",
    certifications: ["RYT-500", "Pilates Certified", "Meditation Instructor"],
  },
  {
    name: "Mike Chen",
    role: "HIIT Specialist",
    specialization: "High-Intensity Training & Athletic Performance",
    experience: "7+ years",
    bio: "Mike is an expert in high-intensity interval training and athletic performance. His dynamic classes push members to new limits while maintaining safety and proper form. He's passionate about helping people discover their inner athlete.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop&q=80",
    certifications: ["ACE-CPT", "HIIT Specialist", "Athletic Performance Coach"],
  },
  {
    name: "Emma Davis",
    role: "Cardio & Dance Instructor",
    specialization: "Cardio, Dance Fitness & Zumba",
    experience: "5+ years",
    bio: "Emma brings energy and fun to every class. With a background in dance and fitness, she creates engaging cardio workouts that make exercise enjoyable. Her classes are perfect for those who want to have fun while getting fit.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80",
    certifications: ["Zumba Certified", "Dance Fitness Instructor", "ACE-CPT"],
  },
  {
    name: "James Wilson",
    role: "CrossFit Coach",
    specialization: "CrossFit & Functional Movement",
    experience: "6+ years",
    bio: "James is a Level 2 CrossFit coach with a passion for functional fitness. He helps members build strength, improve mobility, and achieve their fitness goals through varied, high-intensity workouts.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    certifications: ["CrossFit Level 2", "Functional Movement Specialist", "Olympic Lifting Coach"],
  },
];
export const history = [
  {
    year: "2005",
    title: "Inicio de Concaresa Carrocería",
    description: "Concaresa comienza su trayectoria con el objetivo de ofrecer soluciones de carrocería y transporte confiables, sentando las bases de más de 20 años de experiencia en el sector.",
  },
  {
    year: "2010",
    title: "Crecimiento y Diversificación",
    description: "La empresa amplía su catálogo de productos, incorporando una amplia variedad de soluciones en carrocería y remolques para distintas industrias.",
  },
  {
    year: "2015",
    title: "Consolidación en el Mercado",
    description: "Concaresa se consolida como una marca reconocida por su calidad, resistencia y compromiso con cada uno de sus clientes.",
  },
  {
    year: "2019",
    title: "Alta Demanda en Remolques",
    description: "El crecimiento en la línea de remolques genera la necesidad de organizar y especializar esta área para brindar una mejor experiencia a nuestros clientes.",
  },
  {
    year: "2023",
    title: "Nacimiento de Concaresa Remolques",
    description: "Surge Concaresa Remolques como una filial de Concaresa Carrocería S.A., creada para concentrar y presentar de forma clara nuestra amplia gama de remolques.",
  },
  {
    year: "2024",
    title: "Especialización y Enfoque",
    description: "Concaresa Remolques se establece como una marca dedicada exclusivamente a remolques, manteniendo la calidad, experiencia y respaldo de más de dos décadas de trabajo.",
  },
];

export const paymentOptions = {
  methods: ["Credit/Debit Cards", "Bank Transfer", "PayPal", "Apple Pay", "Google Pay"],
  plans: [
    { type: "Monthly", description: "Pay month-to-month with no long-term commitment" },
    { type: "Annual", description: "Save 15% with annual payment - best value!" },
    { type: "Family Plan", description: "Special rates for families - contact us for details" },
  ],
  guarantee: "7-day money-back guarantee on all memberships",
  trial: "Free 7-day trial available for new members",
};

