
import React from 'react'
import Link from 'next/link'

const Location = () => {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-3">

          {/* Heading */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/80">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
              Contact Information
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-white">
              Let's Connect
            </h2>
          </div>

          {/* Address */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">
              Location
            </h3>

            <p className="text-lg leading-8 text-white/70">
              E-1206,
              <br />
              PNTC (Times of India Press Road),
              <br />
              Vejalpur,
              <br />
              Ahmedabad - 380015
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">
              Contact
            </h3>

            <Link
              href="mailto:contact@lavinabhambhani.com"
              className="block text-lg font-medium text-white underline underline-offset-4"
            >
              contact@lavinabhambhani.com
            </Link>

            <p className="mt-4 text-white/70">
              Available for mentorship, speaking engagements,
              research collaborations, workshops, and academic discussions.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location