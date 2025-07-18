import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Settings,
  Download,
  FolderOpen,
  Play,
  Smartphone,
  Monitor,
  CheckCircle,
  AlertTriangle,
  Info,
} from "lucide-react"

export function Installation() {
  const androidSteps = [
    {
      step: 1,
      title: "Enable Unknown Sources",
      description: "Go to Settings > Security > Unknown Sources and turn it on",
      icon: Settings,
      color: "blue",
    },
    {
      step: 2,
      title: "Download APK File",
      description: "Download the GTA Mzansi APK file from our secure servers",
      icon: Download,
      color: "purple",
    },
    {
      step: 3,
      title: "Install APK",
      description: "Open the downloaded APK file and tap Install",
      icon: CheckCircle,
      color: "green",
    },
    {
      step: 4,
      title: "Extract OBB Files",
      description: "Extract OBB zip file and move to Android/OBB/com.rockstargames.gtasa",
      icon: FolderOpen,
      color: "orange",
    },
    {
      step: 5,
      title: "Launch Game",
      description: "Open GTA Mzansi and start your South African adventure!",
      icon: Play,
      color: "pink",
    },
  ]

  const pcSteps = [
    {
      step: 1,
      title: "Download PC Version",
      description: "Download the GTA Mzansi PC version from GTAAPKHub.com",
      icon: Download,
      color: "blue",
    },
    {
      step: 2,
      title: "Extract Files",
      description: "Use WinRAR or 7-Zip to extract the downloaded files",
      icon: FolderOpen,
      color: "purple",
    },
    {
      step: 3,
      title: "Move to GTA Directory",
      description: "Move extracted files to your GTA San Andreas main folder",
      icon: Settings,
      color: "green",
    },
    {
      step: 4,
      title: "Launch Game",
      description: "Open the game and enjoy GTA Mzansi on PC!",
      icon: Play,
      color: "pink",
    },
  ]

  const requirements = {
    android: [
      "Android 5.0 or higher",
      "4GB RAM minimum (8GB recommended)",
      "25GB free storage space",
      "OpenGL ES 3.0 support",
      "Stable internet for multiplayer",
    ],
    pc: [
      "Windows 7/8/10/11 (64-bit)",
      "Intel Core i5 or AMD equivalent",
      "8GB RAM minimum (16GB recommended)",
      "30GB free storage space",
      "DirectX 11 compatible graphics card",
    ],
  }

  const colorClasses = {
    blue: "from-blue-900/30 to-blue-800/30 border-blue-500/20",
    purple: "from-purple-900/30 to-purple-800/30 border-purple-500/20",
    green: "from-green-900/30 to-green-800/30 border-green-500/20",
    orange: "from-orange-900/30 to-orange-800/30 border-orange-500/20",
    pink: "from-pink-900/30 to-pink-800/30 border-pink-500/20",
  }

  const iconColors = {
    blue: "text-blue-400 bg-blue-500/20",
    purple: "text-purple-400 bg-purple-500/20",
    green: "text-green-400 bg-green-500/20",
    orange: "text-orange-400 bg-orange-500/20",
    pink: "text-pink-400 bg-pink-500/20",
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">
            <Settings className="w-3 h-3 mr-1" />
            Installation Guide
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            How to Install GTA Mzansi
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow our step-by-step installation guide for Android and PC to get started with GTA Mzansi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Android Installation */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Smartphone className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Android Installation</h3>
            </div>

            <div className="space-y-4">
              {androidSteps.map((step, index) => (
                <Card
                  key={index}
                  className={`bg-gradient-to-r ${colorClasses[step.color as keyof typeof colorClasses]} transition-all duration-300 hover:scale-105`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className={`p-2 rounded-lg ${iconColors[step.color as keyof typeof iconColors]}`}>
                          <step.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-white/10 text-white text-xs">Step {step.step}</Badge>
                          <h4 className="font-semibold text-white">{step.title}</h4>
                        </div>
                        <p className="text-gray-300 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* PC Installation */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Monitor className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">PC Installation</h3>
            </div>

            <div className="space-y-4">
              {pcSteps.map((step, index) => (
                <Card
                  key={index}
                  className={`bg-gradient-to-r ${colorClasses[step.color as keyof typeof colorClasses]} transition-all duration-300 hover:scale-105`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className={`p-2 rounded-lg ${iconColors[step.color as keyof typeof iconColors]}`}>
                          <step.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-white/10 text-white text-xs">Step {step.step}</Badge>
                          <h4 className="font-semibold text-white">{step.title}</h4>
                        </div>
                        <p className="text-gray-300 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* System Requirements */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Smartphone className="w-5 h-5 text-green-400" />
                Android Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {requirements.android.map((req, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Monitor className="w-5 h-5 text-purple-400" />
                PC Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {requirements.pc.map((req, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className="text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Important Notes */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-xl p-6 border border-yellow-500/20">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              <h3 className="text-lg font-semibold text-white">Important Notes</h3>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Ensure you have enough storage space before installation</li>
              <li>• Close other apps during installation for better performance</li>
              <li>• Use a stable internet connection for downloading large files</li>
              <li>• Enable developer options for advanced installation features</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-3">
              <Info className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Troubleshooting</h3>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• If installation fails, clear cache and try again</li>
              <li>• For OBB errors, ensure correct folder placement</li>
              <li>• Update your device OS for better compatibility</li>
              <li>• Contact support if you encounter persistent issues</li>
            </ul>
          </div>
        </div>

        {/* Quick Install Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-12 py-4 text-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Quick Install GTA Mzansi
          </Button>
          <p className="text-gray-400 text-sm mt-2">One-click installation with automatic setup</p>
        </div>
      </div>
    </section>
  )
}
