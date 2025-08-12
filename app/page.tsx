import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutUs } from "@/components/about-us"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Certifications } from "@/components/certifications"
import { Testimonials } from "@/components/testimonials"
import { ServiceArea } from "@/components/service-area"
import { BlogPreview } from "@/components/blog-preview"
import { FAQ } from "@/components/faq"
import { CTABanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Certifications />
      <Testimonials />
      <ServiceArea />
      <BlogPreview />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  )
}
