
'use client'

import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
   
<section className="relative overflow-hidden bg-white dark:bg-darklight pt-20 md:pt-24 lg:pt-42">
  <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16">

      {/* Content */}
      <div
        className="lg:col-span-6 text-center lg:text-left order-2 lg:order-1"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        {/* Badge */}
        <div className="mb-5 flex items-center justify-center lg:justify-start gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-xs sm:text-sm font-medium tracking-wide text-secondary dark:text-white/60">
            Psychologist • Educator • Researcher • Author
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight text-midnight_text dark:text-white">
        Lavina Pratap Bhambhani 
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-primary">
          For Stronger Minds, Think Lavina Pratap Bhambhani
        </p>

        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl leading-relaxed text-grey dark:text-white/70">
           Lavina Pratap Bhambhani is dedicated to advancing mental well-being through psychology, education, research, and personal development. Through evidence-based guidance, teaching, and mentorship, she empowers individuals to build emotional resilience, deepen self-awareness, and create meaningful, lasting positive change.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-4">
          <Link
            href="#about"
            className="w-full sm:w-auto rounded-lg bg-primary px-8 py-3 text-center font-medium text-white transition-all duration-300 hover:scale-105"
          >
            Explore My Journey
          </Link>

          <Link
            href="/contact#contact-form"
            className="w-full sm:w-auto rounded-lg border border-border px-8 py-3 text-center font-medium text-midnight_text transition-all duration-300 hover:bg-neutral-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
          >
            Connect With Me
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-primary">
              Author
            </h3>
            <p className="text-xs sm:text-sm text-grey dark:text-white/60">
              Books & Publications
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-primary">
              Educator
            </h3>
            <p className="text-xs sm:text-sm text-grey dark:text-white/60">
              Teaching & Research
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-primary">
              Researcher 
            </h3>
            <p className="text-xs sm:text-sm text-grey dark:text-white/60">
              Psychology & Social Sciences            
              </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-primary">
              Mentor
            </h3>
            <p className="text-xs sm:text-sm text-grey dark:text-white/60">
              Growth & Development
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-10 max-w-xl mx-auto lg:mx-0 border-t border-border pt-6 dark:border-white/10">
          <p className="italic text-sm sm:text-base leading-relaxed text-grey dark:text-white/60">
            "Understanding the mind is the first step toward meaningful growth, emotional well-being, and lifelong learning."
          </p>
        </div>
      </div>

      {/* Hero Image */}
    <div
  className="lg:col-span-6 order-1 lg:order-2 lg:-mt-32 xl:-mt-40"
  data-aos="fade-left"
  data-aos-delay="300"
  data-aos-duration="1000"
>
       <div className="relative max-w-md sm:max-w-lg lg:max-w-none mx-auto pt-2">
  <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />

  {/* Added h-[500px] (or md:h-[600px]) to restrict the height */}
  <div className="relative overflow-hidden rounded-3xl shadow-deatail_shadow h-[500px] md:h-[600px]">
    <Image
      src={getImgPath('/images/hero/hero-lavina.jpg')}
      alt="Lavina Pratap Bhambhani"
      width={700}
      height={850}
      priority
      quality={100}
      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
    />
  </div>
</div>
      </div>

    </div>
  </div>
</section>

  )
}

export default Hero
