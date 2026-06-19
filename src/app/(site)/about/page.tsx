
import { Metadata } from 'next'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

export const metadata: Metadata = {
  title: 'About | Lavina Pratap Bhambhani',
}

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-darkmode">

      {/* Hero Section */}
      <section className="pt-32 md:pt-36 lg:pt-40 pb-12 md:pb-16">
        <div className="container mx-auto max-w-6xl px-5">
          <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">

            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                About Lavina Pratap Bhambhani
              </span>

              <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-midnight_text dark:text-white">
                Empowering Minds Through Psychology, Education & Research
              </h1>

              <p className="mt-6 text-base md:text-lg leading-8 text-grey dark:text-white/70">
                 Lavina Pratap Bhambhani is a psychologist, educator, researcher, and author dedicated to advancing mental well-being, lifelong learning, and personal growth. Through a blend of psychological insight, academic expertise, and evidence-based practice, she empowers individuals to develop emotional resilience, self-awareness, critical thinking, and meaningful life skills.
              </p>

              <p className="mt-5 text-base md:text-lg leading-8 text-grey dark:text-white/70">
                Her work bridges psychology, personal development, forensic
                studies, and interdisciplinary research. Through publications,
                mentoring, academic engagement, and public awareness
                initiatives, she strives to create meaningful impact and foster
                lifelong learning.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={getImgPath('/images/hero/hero-lavina.webp')}
                alt="Lavina Pratap Bhambhani"
                width={700}
                height={850}
                priority
                className="w-full max-w-md lg:max-w-lg rounded-3xl object-cover shadow-lg transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-section py-10 md:py-20 dark:bg-darklight">
        <div className="container mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-4xl text-center">

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-midnight_text dark:text-white">
              Vision & Philosophy
            </h2>

            <p className="mt-8 text-base md:text-lg leading-8 text-grey dark:text-white/70">
              To empower individuals to unlock their full mental potential and
              live with clarity, confidence, resilience, and purpose through
              knowledge, self-awareness, and continuous growth.
            </p>

          </div>
        </div>
      </section>

      <section className="bg-section py-10 md:py-20 dark:bg-darklight">
        <div className="container mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-4xl text-center">

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-midnight_text dark:text-white">
              Mission
            </h2>

            <p className="mt-8 text-base md:text-lg leading-8 text-grey dark:text-white/70">
           To provide transformative mind coaching that rewires thinking, breaks inner barriers, and cultivates lasting personal growth.
            </p>

          </div>
        </div>
      </section>

    
    

      {/* Quote */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto max-w-4xl px-5">

          <div className="rounded-3xl border border-primary/10 bg-primary/5 px-6 py-10 md:px-12 text-center">

            <p className="text-lg md:text-xl italic leading-relaxed text-midnight_text dark:text-white/80">
              “For Stronger Minds, Think Lavina.”
            </p>

          </div>

        </div>
      </section>

    </main>
  )
}
