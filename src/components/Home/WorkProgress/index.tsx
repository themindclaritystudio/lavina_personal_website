
'use client'

const Progresswork = ({
  isColorMode,
}: {
  isColorMode: boolean
}) => {
  return (
    <section
      id="about"
      className={`scroll-mt-32 py-20 ${
        isColorMode
          ? 'bg-section dark:bg-darklight'
          : 'bg-white dark:bg-darkmode'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          {/* Section Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-success"></span>
            <span className="text-sm font-medium text-secondary dark:text-white/60">
              About Lavina Pratap Bhambhani
            </span>
          </div>

          {/* Heading */}
          <h2 className="mx-auto mt-6 max-w-4xl text-center text-3xl font-bold text-midnight_text dark:text-white md:text-5xl">
            Empowering Minds Through Psychology, Education &
            Personal Transformation
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-grey dark:text-white/70">
            Lavina Pratap Bhambhani is a psychologist, educator,
            researcher, author, and mindset coach dedicated to helping
            individuals unlock their true potential. Through a blend of
            academic excellence, psychological insight, and practical
            coaching, she empowers people to cultivate resilience,
            confidence, clarity, and meaningful personal growth.
          </p>

          {/* Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10">
              <h3 className="mb-3 text-xl font-bold text-primary">
                Psychology
              </h3>
              <p className="text-grey dark:text-white/60">
                Promoting emotional well-being, self-awareness,
                resilience, and mental clarity.
              </p>
            </div>

            <div className="rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10">
              <h3 className="mb-3 text-xl font-bold text-primary">
                Education
              </h3>
              <p className="text-grey dark:text-white/60">
                Inspiring learners through teaching, mentorship,
                academic excellence, and research.
              </p>
            </div>

            <div className="rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10">
              <h3 className="mb-3 text-xl font-bold text-primary">
                Coaching
              </h3>
              <p className="text-grey dark:text-white/60">
                Guiding individuals toward confidence, growth,
                transformation, and purpose-driven success.
              </p>
            </div>

            <div className="rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10">
              <h3 className="mb-3 text-xl font-bold text-primary">
                Research & Writing
              </h3>
              <p className="text-grey dark:text-white/60">
                Contributing meaningful insights through publications,
                research, and thought leadership.
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="mx-auto mt-16 max-w-4xl rounded-3xl bg-primary/5 p-8 text-center">
            <p className="text-xl italic leading-relaxed text-midnight_text dark:text-white">
              “Every individual possesses the capacity to grow,
              transform, and thrive. The journey begins with
              understanding the mind and embracing lifelong learning.”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progresswork
