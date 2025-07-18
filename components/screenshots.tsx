import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Play, ImageIcon, Video } from "lucide-react"
import Image from "next/image"

export function Screenshots() {
  const screenshots = [
    {
      title: "Cape Town Streets",
      description: "Explore the beautiful streets of Cape Town with realistic landmarks",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Johannesburg Skyline",
      description: "Drive through the bustling city of Johannesburg",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Kasi Vibes",
      description: "Experience authentic township life and culture",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Vehicle Collection",
      description: "Wide range of South African vehicles and taxis",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Multiplayer Action",
      description: "Join friends in exciting multiplayer missions",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Coastal Roads",
      description: "Enjoy scenic coastal drives and beautiful landscapes",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const videos = [
    {
      title: "Official Trailer",
      duration: "2:45",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Gameplay Walkthrough",
      duration: "15:30",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Installation Guide",
      duration: "5:20",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-pink-500/20 text-pink-400 border-pink-500/30">
            <Camera className="w-3 h-3 mr-1" />
            Media Gallery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Screenshots & Videos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a look at the stunning visuals and exciting gameplay of GTA Mzansi
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <ImageIcon className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-bold text-white">Game Screenshots</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((screenshot, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={screenshot.image || "/placeholder.svg"}
                    alt={screenshot.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0">
                      <Camera className="w-4 h-4 mr-2" />
                      View Full Size
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-white mb-2">{screenshot.title}</h4>
                  <p className="text-gray-400 text-sm">{screenshot.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Video className="w-6 h-6 text-purple-400" />
            <h3 className="text-2xl font-bold text-white">Gameplay Videos</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    width={400}
                    height={300}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="lg"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0 rounded-full w-16 h-16"
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-white">{video.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience GTA Mzansi?</h3>
            <p className="text-gray-300 mb-6">Join millions of players in the ultimate South African GTA adventure</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4"
            >
              <Play className="w-5 h-5 mr-2" />
              Download & Play Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
