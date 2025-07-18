import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Smartphone, Monitor, Music, Map, Car, FileArchive, Shield, Star } from "lucide-react"

export function Downloads() {
  const downloadFiles = [
    {
      title: "GTA Mzansi APK + OBB",
      description: "Complete game package with all necessary files for Android devices",
      size: "25 GB",
      version: "4.0.7",
      icon: Smartphone,
      color: "blue",
      popular: true,
      features: ["High Graphics", "60 FPS", "Multiplayer", "Offline Mode"],
    },
    {
      title: "GTA Mzansi PC Version",
      description: "Full PC version with enhanced graphics and mod support",
      size: "30 GB",
      version: "4.0.7",
      icon: Monitor,
      color: "purple",
      popular: false,
      features: ["4K Graphics", "Mod Support", "Enhanced AI", "Custom Controls"],
    },
    {
      title: "GTA Mzansi Kasi Vibes",
      description: "Township-style environments with local businesses and NPCs",
      size: "2.5 GB",
      version: "Latest",
      icon: Map,
      color: "green",
      popular: false,
      features: ["Township Houses", "Local NPCs", "Street Vendors", "Authentic Vibes"],
    },
    {
      title: "GTA Mzansi Stereo Hearts",
      description: "Enhanced music pack with popular South African songs",
      size: "500 MB",
      version: "2024",
      icon: Music,
      color: "pink",
      popular: false,
      features: ["SA Music", "Radio Stations", "Kwaito", "Amapiano"],
    },
    {
      title: "Additional Files Pack",
      description: "HD car models, realistic roads, and detailed textures",
      size: "5 GB",
      version: "Latest",
      icon: Car,
      color: "orange",
      popular: false,
      features: ["HD Cars", "Realistic Roads", "Better Textures", "Smooth Handling"],
    },
    {
      title: "GTA Mzansi Legacy Edition",
      description: "Extended content with new areas and missions",
      size: "35 GB",
      version: "Legacy",
      icon: FileArchive,
      color: "cyan",
      popular: false,
      features: ["Extended Map", "New Missions", "Improved AI", "Side Activities"],
    },
  ]

  const colorClasses = {
    blue: "from-blue-900/30 to-blue-800/30 border-blue-500/20 hover:border-blue-400/40",
    purple: "from-purple-900/30 to-purple-800/30 border-purple-500/20 hover:border-purple-400/40",
    green: "from-green-900/30 to-green-800/30 border-green-500/20 hover:border-green-400/40",
    pink: "from-pink-900/30 to-pink-800/30 border-pink-500/20 hover:border-pink-400/40",
    orange: "from-orange-900/30 to-orange-800/30 border-orange-500/20 hover:border-orange-400/40",
    cyan: "from-cyan-900/30 to-cyan-800/30 border-cyan-500/20 hover:border-cyan-400/40",
  }

  const iconColors = {
    blue: "text-blue-400 bg-blue-500/20",
    purple: "text-purple-400 bg-purple-500/20",
    green: "text-green-400 bg-green-500/20",
    pink: "text-pink-400 bg-pink-500/20",
    orange: "text-orange-400 bg-orange-500/20",
    cyan: "text-cyan-400 bg-cyan-500/20",
  }

  const buttonColors = {
    blue: "bg-blue-600 hover:bg-blue-700",
    purple: "bg-purple-600 hover:bg-purple-700",
    green: "bg-green-600 hover:bg-green-700",
    pink: "bg-pink-600 hover:bg-pink-700",
    orange: "bg-orange-600 hover:bg-orange-700",
    cyan: "bg-cyan-600 hover:bg-cyan-700",
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">
            <Download className="w-3 h-3 mr-1" />
            Free Downloads
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            GTA Mzansi Files Download
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our collection of GTA Mzansi files including APK, OBB, mods, and additional content packs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloadFiles.map((file, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${colorClasses[file.color as keyof typeof colorClasses]} transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden`}
            >
              {file.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-3 rounded-lg ${iconColors[file.color as keyof typeof iconColors]}`}>
                    <file.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-white">{file.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        v{file.version}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {file.size}
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{file.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {file.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-white/10 text-gray-300">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      className={`flex-1 ${buttonColors[file.color as keyof typeof buttonColors]} text-white`}
                      size="sm"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                    >
                      Info
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Download Stats */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">110M+</div>
              <div className="text-gray-300">Total Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">542K+</div>
              <div className="text-gray-300">User Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">4.8★</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Download Support</div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-500/20">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-green-400" />
            <h3 className="text-xl font-semibold text-white">Safe & Secure Downloads</h3>
          </div>
          <p className="text-gray-300">
            All files are scanned for viruses and malware. We ensure 100% safe downloads with regular security updates
            and anti-ban protection.
          </p>
        </div>
      </div>
    </section>
  )
}
