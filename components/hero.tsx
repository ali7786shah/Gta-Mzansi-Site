import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Play, Star, Users, Shield, Gamepad2 } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-pink-900/20" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  <Shield className="w-3 h-3 mr-1" />
                  Latest Version
                </Badge>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                  <Users className="w-3 h-3 mr-1" />
                  Anti-Ban Version
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                  <Gamepad2 className="w-3 h-3 mr-1" />
                  Multiplayer Mode
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                GTA Mzansi APK
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                Experience the ultimate South African Grand Theft Auto adventure with stunning graphics, authentic
                locations, and thrilling gameplay
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400">110M+</div>
                <div className="text-sm text-gray-400">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-400">542K+</div>
                <div className="text-sm text-gray-400">Reviews</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl md:text-3xl font-bold text-yellow-400">4.8</span>
                </div>
                <div className="text-sm text-gray-400">Rating</div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download APK (25GB)
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 text-lg bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Trailer
              </Button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 text-sm">
              <div>
                <div className="text-gray-400">Version</div>
                <div className="text-white font-semibold">4.0.7</div>
              </div>
              <div>
                <div className="text-gray-400">Size</div>
                <div className="text-white font-semibold">512MB-25GB</div>
              </div>
              <div>
                <div className="text-gray-400">Android</div>
                <div className="text-white font-semibold">5.0+</div>
              </div>
              <div>
                <div className="text-gray-400">Updated</div>
                <div className="text-white font-semibold">Nov 2024</div>
              </div>
            </div>
          </div>

          {/* Right Content - Game Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="GTA Mzansi Game Screenshot"
                width={400}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Now Playing: GTA Mzansi</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    Live in South Africa
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
              Free Download
            </div>
            <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              60 FPS Gaming
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
