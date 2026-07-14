import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import { ThemeProvider } from "next-themes"
import ScrollToTop from "@/components/ScrollToTop"
import Aoscompo from "@/utils/aos"
import { AuthDialogProvider } from "./context/AuthDialogContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lavinabhambhani.com"),

  title: {
    default: "Lavina Pratap Bhambhani | Psychologist, Author & Mentor",
    template: "%s | Lavina Pratap Bhambhani",
  },

  description:
    "Official website of Lavina Pratap Bhambhani – Psychologist, Author, Researcher, Mentor, Trainer, and Founder of The Mind Clarity Studio. Explore psychology-based coaching, emotional wellness, career guidance, research consulting, workshops, and personal development programs.",

  keywords: [
    "Lavina Pratap Bhambhani",
    "Lavina Bhambhani",
    "Psychologist",
    "Author",
    "Researcher",
    "Mentor",
    "Trainer",
    "Mind Coaching",
    "Psychological Coaching",
    "Mental Wellness",
    "Mental Health",
    "Emotional Wellness",
    "Emotional Intelligence",
    "Emotional Resilience",
    "Career Guidance",
    "Career Mentor",
    "Personal Development",
    "Life Coaching",
    "Leadership Development",
    "Corporate Training",
    "Corporate Workshops",
    "Research Consultant",
    "Academic Mentor",
    "Research Guidance",
    "Publication Support",
    "Psychology Expert",
    "Mental Wellness Speaker",
    "Self Awareness",
    "Confidence Building",
    "Stress Management",
    "Ahmedabad Psychologist",
    "Gujarat Psychologist",
    "Psychologist India",
    "The Mind Clarity Studio",
  ],

  authors: [{ name: "Lavina Pratap Bhambhani" }],
  creator: "Lavina Pratap Bhambhani",
  publisher: "Lavina Pratap Bhambhani",

  // === ICONS & MANIFEST (Added) ===
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    title: "Lavina Pratap Bhambhani | Psychologist, Author & Mentor",
    description:
      "Helping individuals build clarity, resilience, confidence, and meaningful growth through psychology, coaching, mentorship, and personal development.",

    url: "https://www.lavinabhambhani.com",
    siteName: "Lavina Pratap Bhambhani",

    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Lavina Pratap Bhambhani",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lavina Pratap Bhambhani | Psychologist, Author & Mentor",
    description:
      "Helping individuals build clarity, resilience, confidence, and meaningful growth.",
    images: ["/images/logo.png"],
  },

  // === Improved Robots ===
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.lavinabhambhani.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthDialogProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            <Aoscompo>
              <Header />
              {children}
              <Footer />
            </Aoscompo>

            <ScrollToTop />
          </ThemeProvider>
        </AuthDialogProvider>
      </body>
    </html>
  )
}