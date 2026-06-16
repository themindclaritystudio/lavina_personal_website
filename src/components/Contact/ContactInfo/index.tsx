
import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const ContactInfo = () => {
  return (
<section className="bg-white pt-20 pb-20 md:pt-24 md:pb-28 dark:bg-darkmode">
        <div className="container mx-auto max-w-6xl px-5">

        {/* Contact Cards */}
<div className="mt-10 md:mt-14 grid gap-8 lg:gap-10 md:grid-cols-2">        

          {/* Contact */}
          <div className="group rounded-3xl border border-border bg-white p-8 py-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-darklight">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Icon
                icon="solar:letter-linear"
                className="text-3xl text-primary"
              />
            </div>

            <h3 className="text-2xl font-bold text-midnight_text dark:text-white">
              Contact & Consultation
            </h3>

            <p className="mt-4 leading-7 text-grey dark:text-white/60">
              Reach out for mentorship, psychological guidance,
              workshops, speaking engagements, and professional consultations.
            </p>

            <Link
              href="mailto:contact@lavinabhambhani.com"
              className="mt-6 inline-flex items-center gap-2 font-medium text-primary"
            >
              Send an Email
            </Link>
          </div>

          {/* Research */}
          <div className="group rounded-3xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-darklight">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Icon
                icon="solar:notebook-bookmark-linear"
                className="text-3xl text-primary"
              />
            </div>

            <h3 className="text-2xl font-bold text-midnight_text dark:text-white">
              Research & Collaboration
            </h3>

            <p className="mt-4 leading-7 text-grey dark:text-white/60">
              Open to academic discussions, research collaborations,
              educational initiatives, publications, and interdisciplinary projects.
            </p>

            <Link
              href="/publications"
              className="mt-6 inline-flex items-center gap-2 font-medium text-primary"
            >
              Explore Publications
            </Link>
          </div>

        </div>

        {/* Map */}
        <div className="pt-12 md:pt-16">
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-midnight_text dark:text-white">
              Location
            </h3>

            <p className="mt-3 text-grey dark:text-white/60">
              E-1206, PNTC (Times of India Press Road),
              Vejalpur, Ahmedabad - 380015
            </p>
          </div>

          <iframe
            src="https://maps.google.com/maps?q=Vejalpur%20Ahmedabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            height="450"
            loading="lazy"
            className="w-full rounded-3xl border border-border dark:border-white/10"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

      <div className="container mx-auto max-w-6xl px-5 pt-12">
        <div className="border-b border-border dark:border-white/10"></div>
      </div>
    </section>
  )
}

export default ContactInfo