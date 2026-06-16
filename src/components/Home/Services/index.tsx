
'use client'

import { Icon } from '@iconify/react'

const services = [
  {
    icon: 'mdi:brain',
    title: 'Mind Coaching',
    description:
      'Transform limiting beliefs, strengthen mental resilience, and develop a mindset that supports long-term success and fulfillment.',
  },
  {
    icon: 'mdi:heart-outline',
    title: 'Emotional Clarity',
    description:
      'Gain deeper self-awareness, improve emotional intelligence, and navigate life with greater confidence and balance.',
  },
  {
    icon: 'mdi:account-group-outline',
    title: 'Personal Development',
    description:
      'Discover your strengths, overcome internal barriers, and create meaningful personal and professional growth.',
  },
  {
    icon: 'mdi:school-outline',
    title: 'Education & Mentorship',
    description:
      'Guidance, mentorship, and learning experiences designed to inspire lifelong growth and academic excellence.',
  },
  {
    icon: 'mdi:lightbulb-outline',
    title: 'Consulting',
    description:
      'Practical strategies and personalized support for individuals seeking clarity, direction, and transformation.',
  },
  {
    icon: 'mdi:book-open-page-variant-outline',
    title: 'Research & Publications',
    description:
      'Sharing valuable insights through research, writing, books, articles, and thought leadership initiatives.',
  },
]

const Services = () => {
  return (
    <section
      className="bg-section py-20 dark:bg-darklight lg:py-28"
      id="services"
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div
          className="flex items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
<<<<<<< HEAD
          <span className="h-3 w-3 rounded-full bg-success"></span>
=======
          <span className="h-2 w-2 rounded-full bg-success"></span>
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
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
          Helping Individuals Build Clarity, Confidence &
          Emotional Strength
        </h2>

        <p
          className="mx-auto mb-16 max-w-3xl text-center text-base leading-relaxed text-grey dark:text-white/60 md:text-lg"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          Through psychology, coaching, education, and mentorship,
<<<<<<< HEAD
          Lavina empowers individuals to overcome challenges,
=======
          Lavina Pratap Bhambhani empowers individuals to overcome challenges,
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
          strengthen their mindset, and create meaningful personal
          transformation.
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
