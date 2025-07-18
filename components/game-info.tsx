import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Car, Users } from "lucide-react"

export function GameInfo() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            What is GTA Mzansi APK?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            GTA Mzansi APK is a fan-made mobile version of Grand Theft Auto that brings the chaos and thrill of GTA into
            a South African backdrop. Unlike standard titles, this version blends open-world action, crime, and roleplay
            with local culture, giving players a fresh and immersive twist.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">South African Setting</h3>
              </div>
              <p className="text-gray-300">
                Explore authentic South African cities including Cape Town, Johannesburg, and Durban with realistic
                landmarks and local culture.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Car className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Local Vehicles</h3>
              </div>
              <p className="text-gray-300">
                Drive minibus taxis, police vans, and uniquely South African sedans with realistic handling and
                customization options.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-500/20 hover:border-green-400/40 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Multiplayer RP</h3>
              </div>
              <p className="text-gray-300">
                Join Mzansi GTA RP servers and engage in roleplay scenarios with players from around the world.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What's New in 2025 */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            What's New in GTA Mzansi 2025
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mt-1">New</Badge>
                <div>
                  <h4 className="font-semibold text-white mb-1">Enhanced Music Integration</h4>
                  <p className="text-gray-300 text-sm">
                    Deep integration of South African music genres like Kwaito, Amapiano, and Afrobeat for authentic
                    soundtrack experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mt-1">Updated</Badge>
                <div>
                  <h4 className="font-semibold text-white mb-1">Improved Vehicle Handling</h4>
                  <p className="text-gray-300 text-sm">
                    Smoother vehicle mechanics with new cars and buses for an exciting driving experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mt-1">Enhanced</Badge>
                <div>
                  <h4 className="font-semibold text-white mb-1">Multiplayer Modes</h4>
                  <p className="text-gray-300 text-sm">
                    New role-play scenarios and heists where choices directly impact the storyline.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mt-1">Cultural</Badge>
                <div>
                  <h4 className="font-semibold text-white mb-1">Authentic Details</h4>
                  <p className="text-gray-300 text-sm">
                    Local accents, slang, and updated visuals enhance cultural authenticity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
