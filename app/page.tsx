import { SiteHeader } from "@/components/site/Header"
import { HeroKitchen } from "@/components/site/HeroKitchen"
import { AboutUs } from "@/components/site/AboutUs"
import { Services } from "@/components/site/Services"
import { BeforeAfterGallery } from "@/components/site/BeforeAfter"
import { WhyChooseUs } from "@/components/site/WhyChooseUs"
import { Certifications } from "@/components/site/Certifications"
import { Testimonials } from "@/components/site/Testimonials"
import { ServiceArea } from "@/components/site/ServiceArea"
import { BlogPreview } from "@/components/site/BlogPreview"
import { FAQKitchen } from "@/components/site/FAQKitchen"
import { CTABanner } from "@/components/site/CTABanner"
import { SiteFooter } from "@/components/site/SiteFooter"
import { ContactSection } from "@/components/site/ContactSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <HeroKitchen />
      <AboutUs />
      <Services />
      <BeforeAfterGallery />
      <WhyChooseUs />
      <Certifications />
      <Testimonials />
      <ServiceArea />
      <BlogPreview />
      <FAQKitchen />
      <ContactSection />
      <CTABanner />
      <SiteFooter />
    </main>
  )
}
