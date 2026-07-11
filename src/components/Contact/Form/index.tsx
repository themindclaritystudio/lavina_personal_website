import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'



const ContactForm = () => {

  return (
    <section id='contact-form' className="bg-white py-16 md:py-24 dark:bg-darkmode">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Form Section */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Contact & Consultation
            </span>

            <h2 className="mt-5 text-4xl font-bold text-midnight_text dark:text-white">
              Let's Start a Meaningful Conversation
            </h2>

            <p className="mt-4 text-lg leading-8 text-grey dark:text-white/70">
              Reach out for mentorship, psychological guidance, workshops,
              speaking engagements, research collaborations, or academic discussions.
            </p>

          <form
  action="https://formsubmit.co/lavina@themindclaritystudio.com"
  method="POST"
  className="mt-10 space-y-5"
>
  {/* Disable captcha */}
  <input type="hidden" name="_captcha" value="false" />

  {/* Optional success page */}
  

  <div className="grid gap-5 md:grid-cols-2">
    <input
      type="text"
      name="First Name"
      required
      placeholder="First Name"
      className="w-full rounded-xl border border-border px-4 py-3 dark:border-white/10 dark:bg-darkmode dark:text-white focus:border-primary focus:outline-none"
    />

    <input
      type="text"
      name="Last Name"
      required
      placeholder="Last Name"
      className="w-full rounded-xl border border-border px-4 py-3 dark:border-white/10 dark:bg-darkmode dark:text-white focus:border-primary focus:outline-none"
    />
  </div>

  <input
    type="email"
    name="Email"
    required
    placeholder="Email Address"
    className="w-full rounded-xl border border-border px-4 py-3 dark:border-white/10 dark:bg-darkmode dark:text-white focus:border-primary focus:outline-none"
  />

  <select
    name="Purpose"
    required
    className="w-full rounded-xl border border-border px-4 py-3 dark:border-white/10 dark:bg-darkmode dark:text-white focus:border-primary focus:outline-none"
  >
    <option value="">Select Purpose</option>
    <option>Personal Consultation</option>
    <option>Mentorship</option>
    <option>Research Collaboration</option>
    <option>Workshop / Training</option>
    <option>Speaking Engagement</option>
    <option>Academic Discussion</option>
  </select>

  <textarea
    rows={6}
    name="Message"
    required
    placeholder="Tell me how I can help..."
    className="w-full rounded-xl border border-border px-4 py-3 dark:border-white/10 dark:bg-darkmode dark:text-white focus:border-primary focus:outline-none"
  />

  <button
    type="submit"
    className="rounded-xl bg-primary px-8 py-4 font-medium text-white transition-all duration-300 hover:opacity-90"
  >
    Send Message
  </button>
</form>
          </div>

          {/* Image Section */}
          <div>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={getImgPath('/images/hero/hero-lavina.webp')}
                alt="Lavina Pratap Bhambhani"
                width={700}
                height={850}
                priority
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactForm