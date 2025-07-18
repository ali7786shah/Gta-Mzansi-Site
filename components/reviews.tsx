import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ThumbsUp, MessageCircle, Users } from "lucide-react"

export function Reviews() {
  const reviews = [
    {
      name: "Thabo M.",
      location: "Johannesburg, SA",
      rating: 5,
      comment:
        "Amazing South African touch to GTA! The Kasi vibes are so authentic, feels like home. Graphics are incredible on my phone.",
      date: "2 days ago",
      helpful: 234,
    },
    {
      name: "Sarah K.",
      location: "Cape Town, SA",
      rating: 5,
      comment:
        "Finally, a GTA game that represents our culture! Love driving the minibus taxis and exploring familiar locations.",
      date: "1 week ago",
      helpful: 189,
    },
    {
      name: "Michael R.",
      location: "Durban, SA",
      rating: 4,
      comment:
        "Great gameplay and missions. Occasional bugs but overall fantastic experience. The multiplayer mode is addictive!",
      date: "2 weeks ago",
      helpful: 156,
    },
    {
      name: "Nomsa P.",
      location: "Pretoria, SA",
      rating: 5,
      comment:
        "Best mobile game I've played! The storyline is engaging and the South African music makes it even better.",
      date: "3 weeks ago",
      helpful: 203,
    },
    {
      name: "David L.",
      location: "Port Elizabeth, SA",
      rating: 4,
      comment:
        "Impressive graphics and smooth gameplay. Love the authentic South African environment and local vehicles.",
      date: "1 month ago",
      helpful: 178,
    },
    {
      name: "Zanele N.",
      location: "Bloemfontein, SA",
      rating: 5,
      comment:
        "This game captures the essence of South African street life perfectly. Highly recommended for all GTA fans!",
      date: "1 month ago",
      helpful: 167,
    },
  ]

  const stats = [
    { label: "Total Reviews", value: "542K+", icon: MessageCircle, color: "blue" },
    { label: "Average Rating", value: "4.8★", icon: Star, color: "yellow" },
    { label: "5-Star Reviews", value: "89%", icon: ThumbsUp, color: "green" },
    { label: "Active Players", value: "2.3M", icon: Users, color: "purple" },
  ]

  const iconColors = {
    blue: "text-blue-400 bg-blue-500/20",
    yellow: "text-yellow-400 bg-yellow-500/20",
    green: "text-green-400 bg-green-500/20",
    purple: "text-purple-400 bg-purple-500/20",
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
            <Star className="w-3 h-3 mr-1" />
            User Reviews
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            What Players Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Read authentic reviews from players who are experiencing the thrill of GTA Mzansi
          </p>
        </div>

        {/* Review Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 text-center"
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-lg ${iconColors[stat.color as keyof typeof iconColors]} flex items-center justify-center`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-yellow-500/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-white">{review.name}</h4>
                    <p className="text-gray-400 text-sm">{review.location}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{review.comment}</p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{review.date}</span>
                  <div className="flex items-center gap-1 text-gray-400">
                    <ThumbsUp className="w-3 h-3" />
                    <span>{review.helpful}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-2xl p-8 border border-yellow-500/20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-4xl font-bold text-yellow-400">4.8</div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-xl text-white mb-2">Excellent Rating</p>
          <p className="text-gray-300">Based on 542,000+ reviews from verified players</p>
        </div>
      </div>
    </section>
  )
}
