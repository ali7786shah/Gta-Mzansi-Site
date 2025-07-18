import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HelpCircle, Download, Smartphone, Wifi, RefreshCw, Users, Shield, Settings } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Is GTA Mzansi free to download?",
      answer:
        "Yes, GTA Mzansi APK is completely free to download and play. There are no hidden costs or subscription fees. You can enjoy all features without any payment.",
      icon: Download,
    },
    {
      question: "Can I play GTA Mzansi on iOS?",
      answer:
        "Currently, GTA Mzansi is only available for Android devices. iOS support is being considered for future releases. Make sure your Android device runs version 5.0 or higher.",
      icon: Smartphone,
    },
    {
      question: "Do I need an internet connection to play?",
      answer:
        "No, GTA Mzansi features offline mode, allowing you to play without an internet connection. However, multiplayer features and online content require a stable internet connection.",
      icon: Wifi,
    },
    {
      question: "How do I update to the latest version?",
      answer:
        "Download the latest GTA Mzansi APK from our official website. Uninstall the old version and install the new one. Your game progress will be saved automatically.",
      icon: RefreshCw,
    },
    {
      question: "Is multiplayer mode available?",
      answer:
        "Yes, GTA Mzansi supports online multiplayer mode and roleplay servers. Join Mzansi GTA RP Discord servers to connect with other players and participate in community events.",
      icon: Users,
    },
    {
      question: "Is the game safe to install?",
      answer:
        "GTA Mzansi APK is completely safe and secure. All files are scanned for viruses and malware. We provide regular security updates and anti-ban protection.",
      icon: Shield,
    },
    {
      question: "What are the system requirements?",
      answer:
        "Android 5.0+, 4GB RAM (8GB recommended), 25GB free storage, and OpenGL ES 3.0 support. For optimal performance, use Android 9+ with good ROM capacity.",
      icon: Settings,
    },
    {
      question: "How large is the download file?",
      answer:
        "The complete GTA Mzansi package ranges from 512MB to 25GB depending on the version and additional content you choose to download. OBB files are included.",
      icon: Download,
    },
  ]

  const quickHelp = [
    {
      title: "Installation Issues",
      description: "Having trouble installing? Check our detailed installation guide",
      action: "View Guide",
    },
    {
      title: "Gameplay Help",
      description: "Need help with controls or missions? Access our gameplay tips",
      action: "Get Help",
    },
    {
      title: "Technical Support",
      description: "Experiencing bugs or performance issues? Contact our support team",
      action: "Contact Support",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">
            <HelpCircle className="w-3 h-3 mr-1" />
            Help Center
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about GTA Mzansi APK download, installation, and gameplay
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-0">
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3 text-left">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                          <faq.icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="text-white font-semibold">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed ml-11">{faq.answer}</p>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Quick Help Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Help</h3>
                <div className="space-y-4">
                  {quickHelp.map((help, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">{help.title}</h4>
                      <p className="text-gray-300 text-sm mb-3">{help.description}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 bg-transparent"
                      >
                        {help.action}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Still Need Help?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Can't find what you're looking for? Our support team is here to help 24/7.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full">Contact Support</Button>
              </CardContent>
            </Card>

            {/* Community */}
            <Card className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border-orange-500/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Join Community</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Connect with other players, share tips, and get help from the community.
                </p>
                <Button
                  variant="outline"
                  className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10 w-full bg-transparent"
                >
                  Join Discord
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
