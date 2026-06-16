
import { Metadata } from 'next'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'About | Lavina Pratap Bhambhani',
=======
  title: 'About | Lavina Pratap Bhambhani Pratap Bhambhani',
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
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
<<<<<<< HEAD
                About Lavina
=======
                About Lavina Pratap Bhambhani
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
              </span>

              <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-midnight_text dark:text-white">
                Psychologist, Researcher, Educator & Author
              </h1>

              <p className="mt-6 text-base md:text-lg leading-8 text-grey dark:text-white/70">
<<<<<<< HEAD
                Lavina Pratap Bhambhani is dedicated to understanding human
=======
              Lavina Pratap Bhambhani  is dedicated to understanding human
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
                behavior, promoting emotional well-being, and empowering
                individuals through education, research, and mentorship.
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
                src={getImgPath('/images/hero/lavina-hero.png')}
<<<<<<< HEAD
                alt="Lavina Pratap Bhambhani"
=======
                alt="Lavina Pratap Bhambhani Pratap Bhambhani"
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
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
      <section className="bg-section py-16 md:py-20 dark:bg-darklight">
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

      {/* Expertise */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-5">

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-midnight_text dark:text-white">
              Areas of Expertise
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Card 1 */}
            <div className="group rounded-2xl border border-border bg-white p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl dark:border-white/10 dark:bg-darklight">
              <h3 className="text-xl font-bold text-primary">
                Psychology
              </h3>

              <p className="mt-3 text-sm leading-7 text-grey dark:text-white/60">
                Human behavior, emotional resilience, mental well-being, and
                psychological understanding.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-border bg-white p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl dark:border-white/10 dark:bg-darklight">
              <h3 className="text-xl font-bold text-primary">
                Research
              </h3>

              <p className="mt-3 text-sm leading-7 text-grey dark:text-white/60">
                Academic publications, interdisciplinary studies, forensic
                psychology, and scientific inquiry.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-border bg-white p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl dark:border-white/10 dark:bg-darklight">
              <h3 className="text-xl font-bold text-primary">
                Education
              </h3>

              <p className="mt-3 text-sm leading-7 text-grey dark:text-white/60">
                Teaching, mentoring, training, and knowledge sharing for
                personal and professional growth.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group rounded-2xl border border-border bg-white p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl dark:border-white/10 dark:bg-darklight">
              <h3 className="text-xl font-bold text-primary">
                Personal Growth
              </h3>

              <p className="mt-3 text-sm leading-7 text-grey dark:text-white/60">
                Coaching, self-awareness, confidence building, emotional
                intelligence, and transformation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto max-w-4xl px-5">

          <div className="rounded-3xl border border-primary/10 bg-primary/5 px-6 py-10 md:px-12 text-center">

            <p className="text-lg md:text-xl italic leading-relaxed text-midnight_text dark:text-white/80">
<<<<<<< HEAD
              “For Stronger Minds, Think Lavina.”
=======
              “For Stronger Minds, Think Lavina Pratap Bhambhani.”
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
            </p>

          </div>

        </div>
      </section>

    </main>
  )
}
