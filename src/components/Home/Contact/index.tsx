
import React from 'react'

const Contactform = () => {
  return (
    <section
      id="contact"
      className="overflow-x-hidden bg-section py-24 dark:bg-darkmode"
    >
      <div className="container mx-auto max-w-6xl px-5">
        <div className="grid items-start gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">
                Let's Connect
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-bold text-midnight_text dark:text-white">
              Start a Conversation
            </h2>

            <p className="mt-6 text-lg leading-8 text-grey dark:text-white/70">
              Whether you're seeking mentorship, psychological guidance,
              academic collaboration, speaking engagements, workshops,
              or research partnerships, I'd be delighted to connect and
              explore meaningful opportunities together.
            </p>

            <div className="mt-12 space-y-8">

              <div>
                <p className="text-sm font-medium text-primary">
                  Email
                </p>
                <p className="mt-2 text-lg text-midnight_text dark:text-white">
                  contact@lavinabhambhani.com
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-primary">
                  Location
                </p>
                <p className="mt-2 text-lg leading-7 text-midnight_text dark:text-white">
                  E-1206, PNTC (Times of India Press Road),
                  <br />
                  Vejalpur, Ahmedabad - 380015
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-primary">
                  Focus Areas
                </p>
                <p className="mt-2 text-lg text-midnight_text dark:text-white">
                  Psychology • Research • Education • Mentorship
                </p>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="rounded-3xl border border-border bg-white p-8 shadow-lg dark:border-white/10 dark:bg-darklight">

              <h3 className="mb-6 text-3xl font-bold text-midnight_text dark:text-white">
                Send a Message
              </h3>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-border bg-transparent px-5 py-3 text-midnight_text focus:border-primary focus:outline-none dark:border-white/10 dark:text-white"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-border bg-transparent px-5 py-3 text-midnight_text focus:border-primary focus:outline-none dark:border-white/10 dark:text-white"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-border bg-transparent px-5 py-3 text-midnight_text focus:border-primary focus:outline-none dark:border-white/10 dark:text-white"
                />

                <textarea
                  rows={6}
                  placeholder="Tell me how I can help..."
                  className="w-full rounded-xl border border-border bg-transparent px-5 py-3 text-midnight_text focus:border-primary focus:outline-none dark:border-white/10 dark:text-white"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary py-3 font-medium text-white transition-all duration-300 hover:opacity-90"
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contactform
