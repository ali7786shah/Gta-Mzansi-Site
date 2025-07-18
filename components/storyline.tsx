import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Book, Users, Zap, Crown, Target, Shield } from "lucide-react"

export function Storyline() {
  const storyChapters = [
    {
      chapter: 1,
      title: "Return to Mzansi",
      description:
        "After five years in prison for a crime he didn't commit, the protagonist returns to the big city of Mzansi seeking revenge and justice.",
      icon: Target,
      color: "blue",
    },
    {
      chapter: 2,
      title: "Building the Empire",
      description:
        "Reconnecting with a tech-savvy childhood friend, they start building a criminal empire from small crimes to major operations.",
      icon: Users,
      color: "purple",
    },
    {
      chapter: 3,
      title: "The Syndicate",
      description:
        "As power grows, they attract attention from The Syndicate, a powerful cartel controlling most of the city's criminal activities.",
      icon: Shield,
      color: "red",
    },
    {
      chapter: 4,
      title: "Turf Wars",
      description:
        "The city descends into chaos as dangerous turf wars begin, requiring both strategy and force to eliminate enemies.",
      icon: Zap,
      color: "orange",
    },
    {
      chapter: 5,
      title: "Final Showdown",
      description:
        "In the ultimate confrontation, defeat The Syndicate's leader, destroy the cartel, and clear your name once and for all.",
      icon: Crown,
      color: "green",
    },
  ]

  const characters = [
    {
      name: "The Protagonist",
      role: "Main Character",
      description: "A wrongfully imprisoned man seeking revenge and justice in the streets of Mzansi",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Tech Friend",
      role: "Ally & Hacker",
      description: "Childhood friend with exceptional technology skills, helping build the criminal empire",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Syndicate Leader",
      role: "Main Antagonist",
      description: "Powerful cartel boss controlling most criminal activities in the city",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Corrupt Officers",
      role: "Antagonists",
      description: "Police officers working with The Syndicate, responsible for the protagonist's imprisonment",
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  const colorClasses = {
    blue: "from-blue-900/30 to-blue-800/30 border-blue-500/20",
    purple: "from-purple-900/30 to-purple-800/30 border-purple-500/20",
    red: "from-red-900/30 to-red-800/30 border-red-500/20",
    orange: "from-orange-900/30 to-orange-800/30 border-orange-500/20",
    green: "from-green-900/30 to-green-800/30 border-green-500/20",
  }

  const iconColors = {
    blue: "text-blue-400 bg-blue-500/20",
    purple: "text-purple-400 bg-purple-500/20",
    red: "text-red-400 bg-red-500/20",
    orange: "text-orange-400 bg-orange-500/20",
    green: "text-green-400 bg-green-500/20",
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-500/20 text-orange-400 border-orange-500/30">
            <Book className="w-3 h-3 mr-1" />
            Epic Story
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Game Storyline
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience an engaging storyline filled with revenge, betrayal, and the rise to power in the streets of
            Mzansi
          </p>
        </div>

        {/* Story Chapters */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Story Chapters</h3>

          <div className="space-y-6">
            {storyChapters.map((chapter, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-r ${colorClasses[chapter.color as keyof typeof colorClasses]} transition-all duration-300 hover:scale-105`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${iconColors[chapter.color as keyof typeof iconColors]} flex-shrink-0`}
                    >
                      <chapter.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-white/10 text-white">Chapter {chapter.chapter}</Badge>
                        <h4 className="text-xl font-semibold text-white">{chapter.title}</h4>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{chapter.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Characters */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Main Characters</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.map((character, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-purple-500/30">
                    <img
                      src={character.image || "/placeholder.svg"}
                      alt={character.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">{character.name}</h4>
                  <Badge className="mb-3 bg-purple-500/20 text-purple-400 border-purple-500/30">{character.role}</Badge>
                  <p className="text-gray-300 text-sm leading-relaxed">{character.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story Highlights */}
        <div className="mt-16 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20">
          <h3 className="text-2xl font-bold text-center text-white mb-6">Story Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">5+</div>
              <div className="text-gray-300">Epic Chapters</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-gray-300">Story Missions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">20+</div>
              <div className="text-gray-300">Unique Characters</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
