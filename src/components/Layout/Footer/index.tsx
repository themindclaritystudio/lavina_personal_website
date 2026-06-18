'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { getImgPath } from '@/utils/image'

const Footer = () => {
  return (
    <footer className="bg-[#F8F6F3] border-t border-neutral-200 dark:bg-darklight dark:border-white/10">
      <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">

          {/* Brand */}
        {/* Brand */}
<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
  <Image
    src={getImgPath('/images/logo/logo.png')}
    alt="Lavina Pratap Bhambhani"
    width={320}
    height={140}
    priority
    className="h-auto w-auto max-h-32 lg:max-h-36 object-contain"
  />

  <p className=" max-w-sm text-sm leading-7 text-grey dark:text-white/70 sm:text-base">
    Psychologist, Mind Coach, Educator, Researcher, and Author dedicated to
    helping individuals cultivate resilience, emotional clarity, and
    meaningful personal transformation.
  </p>

  {/* Social Links */}
  <div className="mt-7 flex gap-5">
    <Link
      href="https://www.linkedin.com/in/lavina-pratap-bhambhani-0176051a9/"
      aria-label="LinkedIn"
      className="transition-transform duration-300 hover:-translate-y-1"
    >
      <Icon
        icon="mdi:linkedin"
        className="text-[30px] text-grey hover:text-primary"
      />
    </Link>

    <Link
      href="https://www.instagram.com/lavina_bhambhani/"
      aria-label="Instagram"
      className="transition-transform duration-300 hover:-translate-y-1"
    >
      <Icon
        icon="mdi:instagram"
        className="text-[30px] text-grey hover:text-primary"
      />
    </Link>

    <Link
      href="https://www.facebook.com/lavina.bhambhani.77/"
      aria-label="Facebook"
      className="transition-transform duration-300 hover:-translate-y-1"
    >
      <Icon
        icon="mdi:facebook"
        className="text-[30px] text-grey hover:text-primary"
      />
    </Link>
  </div>
</div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="mb-6 text-xl font-semibold text-midnight_text dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-grey transition-colors duration-300 hover:text-primary dark:text-white/70"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-grey transition-colors duration-300 hover:text-primary dark:text-white/70"
                >
                  Services
                </Link>
              </li>
               <li>
                <Link
                  href="/portfolio"
                  className="text-grey transition-colors duration-300 hover:text-primary dark:text-white/70"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/experience"
                  className="text-grey transition-colors duration-300 hover:text-primary dark:text-white/70"
                >
                  Experience
                </Link>
              </li>
               <li>
                <Link
                  href="/mentors"
                  className="text-grey transition-colors duration-300 hover:text-primary dark:text-white/70"
                >
                  Mentors
                </Link>
              </li>

              <li>
                <Link
                  href="/publications"
                  className="text-grey transition-colors duration-300 hover:text-primary dark:text-white/70"
                >
                  Publications
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-grey transition-colors duration-300 hover:text-primary dark:text-white/70"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center lg:text-left">
            <h3 className="mb-6 text-xl font-semibold text-midnight_text dark:text-white">
              Connect
            </h3>

            <p className="leading-relaxed text-grey dark:text-white/70">
              Interested in coaching, mentorship, speaking engagements,
              research collaborations, or personal development programs?
            </p>

            <Link
              href="#contact"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </Link>

            <blockquote className="mt-8 border-l-2 border-primary pl-5 italic text-grey dark:text-white/60">
              “For Stronger Minds, Think Lavina.”
            </blockquote>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-neutral-200 dark:border-white/10">
        <div className="container mx-auto max-w-7xl px-5 py-6">
          <p className="text-center text-sm text-grey dark:text-white/50">
            © {new Date().getFullYear()} Lavina Pratap Bhambhani. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer