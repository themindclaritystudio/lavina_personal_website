import { getImgPath } from "@/utils/image";


export const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Publications', href: '#publications' },
  { name: 'Contact', href: '#contact' },
]

export const count = [
  {
    icon: 'mdi:book-open-page-variant-outline',
    value: '10+',
    description:
      'Research papers, articles, and academic publications across psychology and interdisciplinary studies.',
  },
  {
    icon: 'mdi:school-outline',
    value: '5+',
    description:
      'Core domains of expertise including Psychology, Research, Education, Mentoring, and Personal Development.',
  },
  {
    icon: 'mdi:brain',
    value: '100%',
    description:
      'Commitment to empowering individuals through learning, self-awareness, and emotional growth.',
  },
]

export const Progress = [
    { title: 'UX Research and Testing', Progress: 95 },
    { title: 'Product Management', Progress: 84 },
    { title: 'UI & Visual Design', Progress: 90 }
];

export const Servicebox = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'UX & Product Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Performance Optimization',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'UX & Products Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
]

export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/cozycasa.png'),
        alt: 'Portfolio',
        title: 'Cozycasa',
        slug: 'Cozycasa',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/mars.png'),
        alt: 'Portfolio',
        title: 'Mars',
        slug: 'Mars',
        info: 'Designation',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/humans.png'),
        alt: 'Portfolio',
        title: 'Everyday Humans',
        slug: 'everyday-humans',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/roket-squred.png'),
        alt: 'Portfolio',
        title: 'Rocket Squared',
        slug: 'rocket-squared',
        info: 'Designation',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/panda-logo.png'),
        alt: 'Portfolio',
        title: 'Panda Logo',
        slug: 'panda-logo',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/humans.png'),
        alt: 'Portfolio',
        title: 'Fusion Dynamics',
        slug: 'fusion-dynamics',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/cozycasa.png'),
        alt: 'Portfolio',
        title: 'InnovateX Ventures',
        slug: 'innovate-x-ventures',
        info: 'Designation',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/mars.png'),
        alt: 'Portfolio',
        title: 'Nebula Holdings',
        slug: 'nebula-holdings',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/panda-logo.png'),
        alt: 'Portfolio',
        title: 'Summit Partners',
        slug: 'summit-partners',
        info: 'Designation',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/roket-squred.png'),
        alt: 'Portfolio',
        title: 'Apex Strategies',
        slug: 'apex-strategies',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    
]


export const publications = [
  {
    slug: 'psychopathy-and-sociopathy',
    image: getImgPath('/images/publications/psychopathy.jpg'),
    title:
      'Psychopathy and Sociopathy: A Modern Understanding of Antisocial Personality Disorder',
    date: 'December 16, 2024',
    category:
      'Psychopathy, Antisocial Personality Disorder, Sociopathy',
    info: 'Research Article',
    description:
      'A contemporary review exploring psychopathy, sociopathy, and Antisocial Personality Disorder (ASPD).',
    content: `
The term "sociopath" is often used arbitrarily to describe individuals who lack conscience, while "psychopath" is frequently associated with more dangerous antisocial behavior. Clinically, both terms are connected to Antisocial Personality Disorder (ASPD), characterized by a pervasive disregard for the rights and feelings of others.

This review examines the distinctions and similarities between psychopathy and sociopathy, explores their causes, signs, symptoms, and behavioral patterns, and provides a practical understanding of criminal and antisocial behavior from a psychological perspective.

The article aims to increase awareness and understanding of these conditions, helping society differentiate between common misconceptions and clinically recognized personality disorders.
    `,
  },

  {
    slug: 'exhibitionism-explored',
    image: getImgPath('/images/publications/exhibitionism.jpg'),
    title:
      'Exhibitionism Explored: Insights into the Deviant Act',
    date: '2024',
    category: 'Paraphilia Disorder',
    info: 'Research Publication',
    description:
      'A multidisciplinary review examining exhibitionism, its causes, psychological foundations, and societal implications.',
    content: `
The prevalence of exhibitionism and its impact on both individuals and society has attracted significant attention among forensic psychologists and psychiatrists studying deviant sexual behavior.

This publication explores the psychological and neurobiological foundations of exhibitionism, its prevalence, and its effects on victims and communities. It also examines the multidisciplinary approaches used to understand this behavior and discusses the legal and societal implications associated with such offenses.

The findings contribute valuable insights for forensic experts, investigators, mental health professionals, and the criminal justice system.
    `,
  },

  {
    slug: 'nanorobotics-theranostic-approach',
    image: getImgPath('/images/publications/nanorobotics.jpg'),
    title: 'Nanorobotics: A Theranostic Approach',
    date: 'December 16, 2024',
    category: 'Nanorobotics',
    info: 'Review Article',
    description:
      'An overview of nanotechnology and nanorobotics in diagnostics, therapeutics, and advanced medical applications.',
    content: `
Scientific advancements and modern technologies have transformed numerous fields through the development of nanotechnology.

Nanorobotics represents a specialized branch of nanotechnology that incorporates sensing, signaling, information processing, and intelligent behavior at the nanoscale. This review highlights the role of nanorobotics in diagnostics, drug delivery systems, and treatment strategies for complex diseases such as cancer, Alzheimer's disease, and Parkinson's disease.

The article also discusses current challenges, including nanotoxicity concerns, while emphasizing the immense future potential of nanorobotic systems in medicine and healthcare.
    `,
  },

  {
    slug: 'bridging-human-intuition-and-ai',
    image: getImgPath('/images/publications/ai-handwriting.jpg'),
    title:
      'Bridging Human Intuition and Artificial Intelligence',
    date: '2025',
    category: 'Artificial Intelligence & Psychology',
    info: 'Research Publication',
    description:
      'A review of psychological profiling through handwriting analysis and artificial intelligence.',
    content: `
This publication explores the intersection of traditional psychological profiling methods and modern artificial intelligence systems.

The research examines how handwriting analysis can be integrated with AI-driven assessment tools to enhance behavioral interpretation, personality profiling, and predictive analytics.

It highlights opportunities, limitations, and ethical considerations while proposing future directions for combining human intuition with machine intelligence.
    `,
  },
]

