
import Image from 'next/image'
import { publications } from '@/app/api/data'
import Link from 'next/link'

export default function WorksPage() {
  return (
    <main className="bg-white dark:bg-darkmode">
      {/* Hero */}
      <section className="pt-40 pb-16">
        <div className="container mx-auto max-w-6xl px-5 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            Books • Articles • Research
          </span>

          <h1 className="mt-6 text-4xl font-bold text-midnight_text dark:text-white md:text-5xl lg:text-6xl">
            Works & Publications
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-grey dark:text-white/60">
            A collection of books, research publications, academic
            contributions, and articles reflecting a commitment to
            psychology, education, personal growth, and human development.
          </p>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto max-w-6xl px-5">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {publications.map((item, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-white/10 dark:bg-darklight"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={800}
                    className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                    {item.info}
                  </span>

                  <h2 className="mt-4 text-2xl font-bold text-midnight_text dark:text-white">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-grey dark:text-white/60">
                    Explore research, insights, and contributions focused
                    on psychology, human behavior, emotional wellbeing,
                    and personal transformation.
                  </p>

                  <Link
  href={`/publications/${item.slug}`}
  className="mt-6 inline-block text-primary font-semibold"
>
  View Details →
</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
