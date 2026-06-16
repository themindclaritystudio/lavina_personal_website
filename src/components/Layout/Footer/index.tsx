'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { getImgPath } from '@/utils/image'

const Footer = () => {
  return (
    <footer className="bg-[#F8F6F3] border-t border-neutral-200 dark:bg-darklight dark:border-white/10">
      <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div className="text-center lg:text-left">
            <Image
              src={getImgPath('/images/logo/logo.png')}
<<<<<<< HEAD
              alt="Lavina Pratap Bhambhani"
=======
              alt="Lavina Pratap Bhambhani Pratap Bhambhani"
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
              width={220}
              height={100}
              priority
              className="mx-auto lg:mx-0 h-auto w-auto max-h-24 object-contain"
            />

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-grey dark:text-white/70">
              Psychologist, Mind Coach, Educator, Researcher, and Author
              dedicated to helping individuals cultivate resilience,
              emotional clarity, and meaningful personal transformation.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex justify-center lg:justify-start gap-5">
              <Link
                href="#"
                aria-label="LinkedIn"
                className="transition-transform duration-300 hover:-translate-y-1"
              >
                <Icon
                  icon="mdi:linkedin"
                  className="text-[28px] text-grey hover:text-primary"
                />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="transition-transform duration-300 hover:-translate-y-1"
              >
                <Icon
                  icon="mdi:instagram"
                  className="text-[28px] text-grey hover:text-primary"
                />
              </Link>

              <Link
                href="#"
                aria-label="Facebook"
                className="transition-transform duration-300 hover:-translate-y-1"
              >
                <Icon
                  icon="mdi:facebook"
                  className="text-[28px] text-grey hover:text-primary"
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
                  href="#about"
                  className="text-grey transition-colors duration-300 hover:text-primary dark:text-white/70"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="#services"
                  className="text-grey transition-colors duration-300 hover:text-primary dark:text-white/70"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="#experience"
                  className="text-grey transition-colors duration-300 hover:text-primary dark:text-white/70"
                >
                  Experience
                </Link>
              </li>

              <li>
                <Link
                  href="#publications"
                  className="text-grey transition-colors duration-300 hover:text-primary dark:text-white/70"
                >
                  Publications
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
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
<<<<<<< HEAD
              “For Stronger Minds, Think Lavina.”
=======
              “For Stronger Minds, Think Lavina Pratap Bhambhani.”
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
            </blockquote>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-neutral-200 dark:border-white/10">
        <div className="container mx-auto max-w-7xl px-5 py-6">
          <p className="text-center text-sm text-grey dark:text-white/50">
<<<<<<< HEAD
            © {new Date().getFullYear()} Lavina Pratap Bhambhani. All Rights
=======
            © {new Date().getFullYear()} Lavina Pratap Bhambhani Pratap Bhambhani. All Rights
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer