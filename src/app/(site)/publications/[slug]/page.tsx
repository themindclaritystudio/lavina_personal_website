import { notFound } from 'next/navigation'
import Image from 'next/image'
import { publications } from '@/app/api/data'

export function generateStaticParams() {
  return publications.map((publication) => ({
    slug: publication.slug,
  }))
}

// 1. Made the component 'async' and updated the type signature to Expect a Promise
export default async function PublicationDetails({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  // 2. Await the params to extract the slug safely
  const { slug } = await params

  const publication = publications.find(
    (item) => item.slug === slug
  )

  if (!publication) {
    notFound()
  }

  return (
    <main className="bg-white dark:bg-darkmode">
      <section className="pt-40 pb-24">
        <div className="container mx-auto max-w-4xl px-5">
          <Image
            src={publication.image}
            alt={publication.title}
            width={1200}
            height={700}
            className="mb-10 w-full rounded-3xl object-cover"
          />

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-primary/10 px-4 py-2 text-primary">
              {publication.info}
            </span>

            <span className="rounded-full bg-gray-100 px-4 py-2 text-gray-600">
              {publication.date}
            </span>
          </div>

          <h1 className="mt-8 text-4xl font-bold text-midnight_text dark:text-white">
            {publication.title}
          </h1>

          <p className="mt-6 text-lg text-grey dark:text-white/70">
            {publication.description}
          </p>

          <div className="mt-10 rounded-3xl bg-section p-8 dark:bg-darklight">
            <p className="leading-8 text-grey dark:text-white/70">
              {publication.content}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}