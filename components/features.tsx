import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Car, Users, Palette, Zap, Shield, Music, Map, Settings, WifiOff, Star, Download } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Map,
      title: "Realistic South African Environment",
      description:
        "Explore authentic landmarks, bustling townships, and busy highways with local signage and infrastructure.",
      color: "blue",
    },
    {
      icon: Car,
      title: "Cool Cars & Vehicles",
      description:
        "Wide range of vehicles from sports cars to minibus taxis with customization options and realistic driving mechanics.",
      color: "purple",
    },
    {
      icon: Users,
      title: "Multiplayer Features",
      description:
        "Join friends in online multiplayer mode, participate in community events, and engage in cooperative gameplay.",
      color: "green",
    },
    {
      icon: Palette,
      title: "Top-Notch Graphics",
      description:
        "High-quality visuals with realistic lighting, weather effects, and smooth performance across devices.",
      color: "pink",
    },
    {
      icon: Music,
      title: "Kasi Vibes",
      description: "Authentic South African culture with local languages, music, and township lifestyle experiences.",
      color: "orange",
    },
    {
      icon: Gamepad2,
      title: "Dynamic Gameplay",
      description:
        "Action-packed missions with chasing criminals, weapon combat, and vehicle racing throughout the city.",
      color: "red",
    },
    {
      icon: Settings,
      title: "Customization",
      description:
        "Customize your character, vehicles, weapons, and adjust FPS settings for optimal device performance.",
      color: "cyan",
    },
    {
      icon: WifiOff,
      title: "Offline Mode",
      description: "Play without internet connection, allowing gaming anytime without worrying about connectivity.",
      color: "yellow",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "No bugs, viruses, or malware. Regular updates ensure security and optimal gaming experience.",
      color: "emerald",
    },
  ]

  const colorClasses = {
    blue: "from-blue-900/30 to-blue-800/30 border-blue-500/20 hover:border-blue-400/40",
    purple: "from-purple-900/30 to-purple-800/30 border-purple-500/20 hover:border-purple-400/40",
    green: "from-green-900/30 to-green-800/30 border-green-500/20 hover:border-green-400/40",
    pink: "from-pink-900/30 to-pink-800/30 border-pink-500/20 hover:border-pink-400/40",
    orange: "from-orange-900/30 to-orange-800/30 border-orange-500/20 hover:border-orange-400/40",
    red: "from-red-900/30 to-red-800/30 border-red-500/20 hover:border-red-400/40",
    cyan: "from-cyan-900/30 to-cyan-800/30 border-cyan-500/20 hover:border-cyan-400/40",
    yellow: "from-yellow-900/30 to-yellow-800/30 border-yellow-500/20 hover:border-yellow-400/40",
    emerald: "from-emerald-900/30 to-emerald-800/30 border-emerald-500/20 hover:border-emerald-400/40",
  }

  const iconColors = {
    blue: "text-blue-400 bg-blue-500/20",
    purple: "text-purple-400 bg-purple-500/20",
    green: "text-green-400 bg-green-500/20",
    pink: "text-pink-400 bg-pink-500/20",
    orange: "text-orange-400 bg-orange-500/20",
    red: "text-red-400 bg-red-500/20",
    cyan: "text-cyan-400 bg-cyan-500/20",
    yellow: "text-yellow-400 bg-yellow-500/20",
    emerald: "text-emerald-400 bg-emerald-500/20",
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30">
            <Star className="w-3 h-3 mr-1" />
            Premium Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Features of GTA Mzansi APK
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the amazing features that make GTA Mzansi the ultimate South African Grand Theft Auto experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${colorClasses[feature.color as keyof typeof colorClasses]} transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${iconColors[feature.color as keyof typeof iconColors]}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose GTA Mzansi */}
        <div className="mt-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20">
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Why You Should Try GTA Mzansi
          </h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg mt-1">
                  <Zap className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Authentic South African Experience</h4>
                  <p className="text-gray-300">
                    Drive through Cape Town, Johannesburg, Soweto, and Durban while experiencing local culture through
                    missions and adventures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/20 rounded-lg mt-1">
                  <Download className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Free & Feature-Rich</h4>
                  <p className="text-gray-300">
                    Completely free to download with unlimited features, regular updates, and no hidden costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-500/20 rounded-lg mt-1">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Community & Multiplayer</h4>
                  <p className="text-gray-300">
                    Join millions of players worldwide in multiplayer modes and roleplay scenarios.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/20">
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-white">110M+</div>
                  <div className="text-purple-400 font-semibold">Happy Players Worldwide</div>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-gray-300 text-sm">4.8/5 Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
