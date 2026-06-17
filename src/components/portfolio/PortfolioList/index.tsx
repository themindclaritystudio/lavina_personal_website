'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { portfolioinfo } from '@/app/api/data'

const GalleryList = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index]

    if (video) {
      video.play().catch(() => {})
    }
  }

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index]

    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }

  const toggleVideo = (index: number) => {
    const video = videoRefs.current[index]

    if (!video) return

    if (video.paused) {
      video.play().catch(() => {})
      setPlayingIndex(index)
    } else {
      video.pause()
      setPlayingIndex(null)
    }
  }

  return (
    <section
      id="gallery"
      className="bg-section py-28 dark:bg-darklight lg:py-28"
    >
      <div className="container mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            Gallery
          </span>

          <h2 className="mt-4 text-3xl font-bold text-midnight_text dark:text-white md:text-4xl lg:text-5xl">
            Moments, Events & Achievements
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-grey dark:text-white/60">
            A glimpse into academic engagements, research contributions,
            speaking sessions, workshops, publications, and professional
            milestones.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioinfo.map((item: any, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:bg-darkmode"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {item.type === 'video' ? (
                <div className="relative">
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el
                    }}
                    muted
                    loop
                    playsInline
                    poster={item.image}
                    className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>

                  {/* Mobile Play / Pause Button */}
                  <button
                    onClick={() => toggleVideo(index)}
                    className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur sm:hidden"
                    aria-label={
                      playingIndex === index ? 'Pause Video' : 'Play Video'
                    }
                  >
                    {playingIndex === index ? '❚❚' : '▶'}
                  </button>
                </div>
              ) : (
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GalleryList