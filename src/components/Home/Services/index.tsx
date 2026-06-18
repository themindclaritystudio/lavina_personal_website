
'use client'

import { Icon } from '@iconify/react'

const services = [
  {
    icon: 'mdi:brain',
    title: 'Psychology Coaching',
    description:
      ' Helping individuals strengthen emotional resilience, develop healthy thought patterns, and navigate life’s challenges with confidence.',
  },
  {
    icon: 'mdi:heart-outline',
    title: 'Emotional Clarity',
    description:
      'Develop greater self-awareness, strengthen emotional intelligence, and navigate life with clarity, balance, and confidence.',
  },
  {
    icon: 'mdi:account-group-outline',
    title: 'Personal Development',
    description:
      'Discover your strengths, overcome personal barriers, and cultivate the skills needed for meaningful personal and professional growth.',
  },
  {
    icon: 'mdi:school-outline',
    title: 'Education & Mentorship',
    description:
      'Guidance, mentorship, and learning experiences designed to foster lifelong growth, academic excellence, and professional development.',
  },
  {
    icon: 'mdi:lightbulb-outline',
    title: 'Professional Consultation ',
    description:
      'Evidence-based guidance and practical strategies tailored to individual, academic, and professional development needs.',
  },
  {
    icon: 'mdi:book-open-page-variant-outline',
    title: 'Research & Publications',
    description:
      'Contributing to the field through academic research, publications, books, articles, and interdisciplinary scholarship.',
  },
]

const Services = () => {
  return (
    <section
      className="bg-section py-28 dark:bg-darklight lg:py-28"
      id="services"
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div
          className="flex items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="h-2 w-2 rounded-full bg-success"></span>
          <span className="text-sm font-medium text-midnight_text dark:text-white/50">
            Services & Expertise
          </span>
        </div>

        <h2
          className="mx-auto max-w-4xl pt-7 pb-6 text-center text-3xl font-bold leading-tight text-midnight_text dark:text-white md:text-4xl lg:text-5xl"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
Helping Individuals Build Emotional Resilience, Clarity & Personal Growth 
        </h2>

        <p
          className="mx-auto mb-16 max-w-3xl text-center text-base leading-relaxed text-grey dark:text-white/60 md:text-lg"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
         Through psychology, education, research, and mentorship,  Lavina Pratap Bhambhani empowers individuals to enhance emotional well-being, develop resilience, deepen self-awareness, and achieve meaningful personal growth through evidence-based guidance. 
        </p>

        {/* Services Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
              className="rounded-2xl bg-white p-8 shadow-service transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-darkmode"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Icon
                  icon={service.icon}
                  width={28}
                  className="text-primary"
                />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-midnight_text dark:text-white">
                {service.title}
              </h3>

              <p className="leading-relaxed text-grey dark:text-white/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
