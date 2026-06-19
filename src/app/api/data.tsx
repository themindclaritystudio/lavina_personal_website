import { getImgPath } from "@/utils/image";


export const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Mentors', href: '#mentors'},
  { name: 'Publications', href: '#publications' },
  { name: 'Contact', href: '#contact' },
]
export const mentorsData = [
  {
    id: 1,
    image: '/images/mentors/1.png',
    name: 'Dr. Arun Kumar',
    designation: 'Assistant Director | VIT Bhopal University',
    description:
      'Academic leader and researcher with 18+ years of experience in biotechnology, soil science, and environmental microbiology. Author of 62+ research papers, multiple patents, and book chapters. Recipient of the Best Teacher Award from the HRD Minister of India.',
  },
  {
    id: 2,
    image: '/images/mentors/2.png',
    name: 'Dr. Arun Kumar Pullela',
    designation: 'Clinical Psychologist',
    description:
      'Licensed clinical psychologist skilled in therapy, assessment, diagnosis, and employee relations. Possesses extensive expertise in CBT, DBT, and ACT across diverse age groups within academic, private, government, and child development settings.',
  },
  {
    id: 3,
    image: '/images/mentors/3.png',
    name: 'Dr. Ranjeeta Kumari',
    designation: 'Assistant Director & Scientist C | CFSL Delhi',
    description:
      'Holds a PhD in Psychology from Patna University alongside a PG Diploma in Clinical Psychology. Brings more than 13 years of specialized expertise in lie detection techniques, contributing significantly to forensic psychology and criminal investigations.',
  },
  {
    id: 4,
    image: '/images/mentors/4.png',
    name: 'Dr. Devina Upadhyay',
    designation: 'Associate Professor | SKIPS University',
    description:
      'Features 14 years of academic and research experience specializing in Quantitative Techniques, Research Methodology, Operations Research, and Marketing Management. Actively leads key workshops, research projects, and specialized training initiatives for the Gujarat Police.',
  },
  {
    id: 5,
    image: '/images/mentors/5.png',
    name: 'Prof. (Dr.) Akhil Saiyed',
    designation: 'Vice Chancellor & Provost | GM Vastanvi University',
    description:
      'Accomplished edupreneur, trainer, consultant, and law professor with over 15 years of deep experience across academia and legal practice. Has successfully served in multiple executive leadership roles, including Pro Vice Chancellor and Director of Law Institutes.',
  },
  {
    id: 6,
    image: '/images/mentors/6.png',
    name: 'Dr. Shivani Pandya',
    designation: 'Assistant Professor | Narnarayan Shastri Institute of Technology',
    description:
      'Chemistry academic specializing in nanotechnology and its various forensic applications. Her core research focuses on nanomaterials, targeted drug delivery systems, advanced scientific research, and driving positive societal impact through education.',
  },
  {
    id: 7,
    image: '/images/mentors/7.png',
    name: 'Dr. Krupa Mehta',
    designation: 'Director | US Work Study Pvt. Ltd.',
    description:
      'Expert in U.S. higher education admissions, dedicated to helping students secure vital scholarships, tuition waivers, and competitive global academic opportunities, with a particular emphasis on STEM, engineering, and business disciplines.',
  },
  {
    id: 8,
    image: '/images/mentors/8.png',
    name: 'Dr. Ravinder Yadav',
    designation: 'Scientist | DIPR, DRDO',
    description:
      'Dedicated DRDO scientist contributing significantly to national defence research and development. Guided students through research and innovation programs, introducing critical scientific thinking and R&D methodologies to army school students.',
  },
  {
    id: 9,
    image: '/images/mentors/9.png',
    name: 'Aarushi Narang',
    designation: 'PhD Scholar | Bharathiar University',
    description:
      'Accomplished researcher and counsellor focused on stress management, emotional well-being, and corporate employee wellness. Her dedicated mentorship has provided invaluable strategic direction and support throughout the intense PhD journey.',
  },
  {
    id: 10,
    image: '/images/mentors/10.png',
    name: 'Mr. Hitesh Porwal',
    designation: 'Founder | Bizstart',
    description:
      'Founder of Bizstart, a pre-incubation platform empowering educators, students, and aspiring entrepreneurs across Tier 2, Tier 3, and rural India through comprehensive, modern entrepreneurship education.',
  },
  {
    id: 11,
    image: '/images/mentors/11.png',
    name: 'Dr. Dhara Thakore',
    designation: 'Head - Aarambh Incubation Centre & Office of Career Services | Anant University',
    description:
      'Dynamic innovation and incubation leader possessing extensive experience across regional startup ecosystems, technology transfer management, entrepreneurship policy design, and major national innovation initiatives.',
  },
  {
    id: 12,
    image: '/images/mentors/12.png',
    name: 'Prof. (Dr.) Ajit Gangawane',
    designation: 'Registrar | Swaminarayan University',
    description:
      'Distinguished academic leader and researcher with 21 years of experience across biochemistry, molecular biology, scientific research, institutional academic administration, and national higher education policy.',
  },
  {
    id: 13,
    image: '/images/mentors/13.png',
    name: 'Dr. Dharmishtha Barot',
    designation: 'Assistant Professor | M.B. Patel Science College',
    description:
      'Physicst and active researcher specializing in dielectric properties, electrical conductivity, material science, and experimental physics, paired with a strong professional focus on student mentorship.',
  },
  {
    id: 14,
    image: '/images/mentors/14.png',
    name: 'Dr. Deepak Makwana',
    designation: 'Founder Regional Director (India) | The Alpha Group International',
    description:
      'Renowned business coach, corporate trainer, graphologist, hypnotist, and executive leadership mentor who has successfully coached thousands of growing entrepreneurs and established business owners across India.',
  },
  {
    id: 15,
    image: '/images/mentors/15.png',
    name: 'Mr. Aniket Pandya',
    designation: 'Entrepreneur, TEDx Speaker & Founder | Aniradichita Theatre and Films',
    description:
      'Creative entrepreneur applying performing arts methodologies directly to business, education, modern marketing, HR operations, corporate social responsibility, and global entertainment through impactful campaigns.',
  },
  {
    id: 16,
    image: '/images/mentors/16.png',
    name: 'Dr. Arushi Chawla',
    designation: 'Head of Department | Lloyd Institute of Forensic Science',
    description:
      'Forensic odontologist and academic contributing to forensic science research, academic excellence, and interdisciplinary collaborations, alongside active knowledge-sharing initiatives.',
  },
  {
    id: 17,
    image: '/images/mentors/17.png',
    name: 'Mr. Dwij Nandwani',
    designation: 'Lead Learning & Development | IMS Group',
    description:
      'Master corporate trainer, psychologist, leadership coach, and founder of #NoteKiyaJaye, dedicated to personal development tracking, sustainable organizational growth, and strategic career guidance.',
  },
  {
    id: 18,
    image: '/images/mentors/18.png',
    name: 'Col. Harindra Vyas (Retd.)',
    designation: 'Indian Army Veteran',
    description:
      'Highly respected mentor with over 35 years of distinguished service in the Indian Army. His deep expertise in leadership, logistics, HR, security operations, and discipline continues to inspire future generations.',
  },
];
export const count = [
  {
    icon: 'mdi:book-open-page-variant-outline',
    value: '10+',
    title: 'Publications & Research Contributions',
    description:
      'Research papers, articles, and academic publications across psychology, education, and interdisciplinary studies.',
  },
  {
    icon: 'mdi:school-outline',
    value: '5+',
    title: 'Areas of Expertise',
    description:
      'Psychology, Education, Research, Mentorship, and Personal Development.',
  },
  {
    icon: 'mdi:brain',
    value: '100%',
    title: 'Dedication to Empowerment',
    description:
      'Supporting individuals through evidence-based learning, self-awareness, and personal growth.',
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
    image: getImgPath('/images/portfolio/6.jpeg'),
    alt: 'Portfolio',
    title: 'Cozycasa',
    slug: 'Cozycasa',
    info: 'Designation',
    Class: 'md:mt-0'
  },
  {
    type: 'video',
    video: getImgPath('/images/portfolio/video1.mp4'),
    image: getImgPath('/images/portfolio/8.jpeg'), // thumbnail/poster
    alt: 'Portfolio',
    title: 'Mars',
    slug: 'Mars',
    info: 'Designation',
    Class: 'md:mt-24'
  },

 

  {
    image: getImgPath('/images/portfolio/7.jpeg'),
    alt: 'Portfolio',
    title: 'Apex Strategies',
    slug: 'apex-strategies',
    info: 'Designation',
    Class: 'md:mt-0'
  },
  {
    image: getImgPath('/images/portfolio/11.jpeg'),
    alt: 'Portfolio',
    title: 'Apex Strategies',
    slug: 'apex-strategies',
    info: 'Designation',
    Class: 'md:mt-0'
  },
  {
    image: getImgPath('/images/portfolio/14.jpeg'),
    alt: 'Portfolio',
    title: 'Apex Strategies',
    slug: 'apex-strategies',
    info: 'Designation',
    Class: 'md:mt-0'
  },
  {
    image: getImgPath('/images/portfolio/15.jpeg'),
    alt: 'Portfolio',
    title: 'Apex Strategies',
    slug: 'apex-strategies',
    info: 'Designation',
    Class: 'md:mt-0'
  },
  
]


export const publications = [
  {
    slug: 'career-mentor',
    image: 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1681287584712-2df730c0b28b?h=1500&w=2000&fit=clip&fm=jpg',
    title: 'Career Mentor: A Book to Decide a Right Career',
    date: 'December 23, 2024',
    category: 'Career Development, Mentorship',
    info: 'Book / Research Publication',
    description:
      'A practical guide written to help individuals choose the right career path based on passion, talent, and opportunity.',
    content: `
Author’s Preface

This book is written after research for all who are looking for a career option. As personally, I had suffered for long when I was looking for career options but I didn’t find any source.

Life gives us many opportunities; it’s all up to us to grab the opportunity and turn it in the best way as much I can do for it.   

Many of you have different kinds of talents and you should go for it by choosing the right path and then your passion will help you keep moving forward. I would request parents to allow their children to do things of their interest that will create a healthy environment. My note to children is to follow their dreams and also obey their parents as they are ready to do anything to see you happy.

Request a full copy of book via Email or you can read it for free on Kindle! 

Link: https://www.amazon.in/Career-Mentor-Lavina-Pratap-Bhambhani-ebook/dp/B07TYZGXFG
    `,
  },
  {
    slug: 'forensic-analysis-of-narcotic-drugs',
    image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/18742590/546810_32670.jpeg',
    title: 'Forensic Analysis of Narcotic Drugs',
    date: 'December 16, 2024',
    category: 'Forensic Science, Narcotic Drugs',
    info: 'Research Article',
    description:
      'A detailed review of the classification, analysis, and forensic investigation of narcotic and psychotropic drugs.',
    content: `
With the scientific progressions consistently; the new blends of medications are being concocted. The plants, and numerous other manufactured substances are aggregately utilized, and various types of medications are set up out of it. Thus, their characterizations, activity instruments and signs, results, measurements, course of organization, turn around responses are dissected and read inside and out for better agreement. The instrumental examination of medications utilizing mainstream techniques, for example, chromatography and mass spectrometry. These strategies require almost no measure of tests and are precise and dependable. The laws on opiate and psychotropic medications are outlined. Along these lines, this survey writing centers around investigation, law and history of opiate drugs and the view of narcotic drugs by the society.
    `,
  },
  {
    slug: 'forensic-science-explosives-and-explosion-investigation',
    image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/18742590/27652_124939.jpeg',
    title: 'Forensic Science, Forensic Explosives and Explosion Investigation',
    date: 'December 16, 2024',
    category: 'Forensic Science, Explosion Investigation',
    info: 'Research Article',
    description:
      'An exploration of the role of forensic sciences in investigating explosive crime scenes and analyzing evidence.',
    content: `
In the current researches, it is observed that forensic sciences play a vital role in the field of criminal investigation. Forensic sciences has many branches which individually is involved in presenting and collecting evidences at any crime scene. Precisely investigating the explosive crime scenes, the investigators are faced with circumstances which vary from having specific resources to collect evidences and preserve them. Thus, highly sophisticated instruments are used for analysis of the evidences obtained. While some aspects, such as chemical analysis and damage effects, are discussed here. The residues are collected and from which the explosive used is known and manufacturing companies can be traced. Hence, the purpose of forensic sciences and its applications in investigations of explosive crime scenes are discussed in this article.
    `,
  },
  {
    slug: 'exhibitionism-explored',
    image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/18742590/660216_768735.jpeg',
    title: 'Exhibitionism Explored: Insights into the Deviant Act',
    date: 'December 16, 2024',
    category: 'Paraphilia Disorder, Forensic Psychology',
    info: 'Research Publication',
    description:
      'A multidisciplinary review examining exhibitionism, its psychological foundations, and societal impact.',
    content: `


The prevalence of exhibitionism and its potential consequences for both individual well-being and societal standards have long attracted the attention of forensic psychologists and psychiatrists studying deviant sexual behaviour. Despite its frequency and the significant impact on victims, including children, it often receives less research attention compared to other sex offenses, such as child molestation or rape. This study has a two-fold purpose. Firstly, it seeks to provide a comprehensive understanding of exhibitionism by examining its psychological and neurobiological foundations, prevalence, and potential effects on individuals and society. Secondly, it reviews the multidisciplinary and concept map approach to exhibitionism, aiming to shed light on the psychological factors contributing to its development, as well as its societal and legal repercussions. Exhibitionism leaves victims traumatized and raises concerns for society and the Criminal Justice system. The outcomes of this research have significant implications for the field of crime investigations. It can enhance the understanding of investigations into complex sexual offence cases, providing valuable insights for experts, investigating officers, and the judicial system in the pursuit of justice.
    `,
  },
  {
    slug: 'psychopathy-and-sociopathy',
    image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/18742590/902641_609621.jpeg',
    title: 'Psychopathy and Sociopathy: A Modern Understanding of Antisocial Personality Disorder',
    date: 'December 16, 2024',
    category: 'Psychopathy, Antisocial Personality Disorder, Sociopathy',
    info: 'Research Article',
    description:
      'A contemporary review exploring the distinctions and similarities between psychopathy, sociopathy, and ASPD.',
    content: `


The term "Sociopath" often uses arbitrarily to describe a person who is non-conscience. The term "psychopath"suggests a sociopathic person who is simply more dangerous, like a serial killer or mass murder. Clinically, sociopathic or psychopathic are those people who exhibit the characteristics of antisocial personality disorder (ASPD), classified as pervasive disregard towards the rights and feelings of others. In the contemporary period both the term is considered separately to describe two types of ASPD. At times both the terms are used interchangeably though each has its lines of distinction that can be broadly described. This review focuses on the term’s “psychopath” and “sociopath”, criminal behavior is a practical, rational which draws upon theoretical science. It compresses of causes, signs, and symptoms which gives insight to better understand the particular behavior. Due to a lack of awareness in society about psychopaths they are generally considered villains, not like other patients suffering from disorders. However, sometimes we are unable to differentiate between sociopaths and psychopaths; attempts are made to clarify them easily.
    `,
  },
  {
    slug: 'alternatives-to-mitigate-corona',
    image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/18742590/896615_584384.png',
    title: 'Alternatives to Mitigate Corona',
    date: 'December 16, 2024',
    category: 'Covid-19, Public Health',
    info: 'Research Article',
    description:
      'A review of strategies and scientific perspectives on mitigating Coronavirus.',
    content: `


Coronavirus is most pandemic virus and it is challenging too for the scholars and scientists to discover its vaccine. Like every organism in nature struggling for survival, they evolve or mutate. Similarly, the coronavirus has changed its genome sequence to adapt to the new species. In fact, research has shown COVID-19 has mutated repeatedly in ways to boost its survival which results in more difficulties to discover its vaccine. We can’t hit the coronavirus directly and neither our immune system is capable enough to fight with it, but by killing the infected cells, we can kill the corona virus too.
    `,
  },
  {
    slug: 'nanorobotics-theranostic-approach',
    image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/18742590/561330_662028.jpeg',
    title: 'Nanorobotics: A Theranostic Approach',
    date: 'December 16, 2024',
    category: 'Nanorobotics, Nanotechnology',
    info: 'Review Article',
    description:
      'An overview of nanorobotics in diagnostics, drug delivery, and advanced medical therapeutics.',
    content: `


Scientific advancements and modern vision holds a hand over every field of technology and sciences. The technology which, works at atomic level is called nanotechnology, deals with everything from medical sciences to electronics and a broad area of techniques. The high reactivity and desirable properties can be obtained after manipulation of bulk material at atomic level. Nanorobotics is a branch of nanotechnology – having characteristic features of actuating, sensing, signaling, information, processing and intelligence at nano scale. Nanorobotics in medication conveyance and therapeutics would be the next breakthrough in the medical sciences. In recent times, scientists are working towards developing smarter drug delivery system for rigid and complex diseases like Cancer, Alzheimer’s, Parkinson’s disorders and many more. The present review article focuses on the nanomaterial in the field of diagnostics and treatment with the brief introduction to the composition, mechanisms and their application in medicine. This technology has the potential to solve prime problems of the world. Due to nanotoxicity that comes along with these experiments, the field is yet to explore the depth of these techniques.
    `,
  },
  {
    slug: 'review-on-drug-doping',
    image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/18742590/239472_539082.jpeg',
    title: 'Review on Drug Doping',
    date: 'December 16, 2024',
    category: 'Sports Science, Drug Doping',
    info: 'Review Article',
    description:
      'A comprehensive review on the issue of doping in sports, its effects, detection, and legal aspects.',
    content: `


With the rise in competition and the pressure that comes along with it, Doping is now a serious concern at international level in sportphysiology. Doping is the abuse of drugs which expands one's red platelets and permits the body to get more oxygen to muscles and increase the stamina of sport player. This isn’t just concerned with the wellbeing of the players or the risk involved in their usage but also with theunfairness that it brings into the spirit of sports. This is legitimately influencing games, rivalries around the globe. Looking at the historical backdrop of doping, the various classes of substances utilized for doping, reactions of doping and treatment of influenced competitors, we find its strong roots in this system. Medications have continued creating with "impels" in doping systems. These are driven by improved adjustment testing, recognizable proof methods and advances in sensible research that, can provoke the disclosure and utilization of substances that may later be restricted by various games affiliation. The continuous upgradation of drugs further enhance the results of doping. There are seen a rundown quantities of perilous symptoms that, happened because of blood doping like myocardium, stroke, diseases similar to HIV, hepatitis and so forth. This review article briefs abuse of doping drugs, side effects, their treatments and laws related to them.
    `,
  },
];

