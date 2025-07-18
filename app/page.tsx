import { Hero } from "@/components/hero"
import { GameInfo } from "@/components/game-info"
import { Features } from "@/components/features"
import { Downloads } from "@/components/downloads"
import { Installation } from "@/components/installation"
import { Screenshots } from "@/components/screenshots"
import { Storyline } from "@/components/storyline"
import { Reviews } from "@/components/reviews"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <GameInfo />
      <Features />
      <Downloads />
      <Installation />
      <Screenshots />
      <Storyline />
      <Reviews />
      <FAQ />
      <Footer />
    </main>
  )
}
