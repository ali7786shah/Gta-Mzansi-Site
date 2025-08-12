import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, Clock, DollarSign, Calendar, Shield, Users, Phone, MessageCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "How long does a kitchen remodel take?",
      answer: "A typical kitchen remodel takes 6-10 weeks from start to finish, depending on the scope of work. Small updates like cabinet refacing may take 2-3 weeks, while full renovations can take 8-12 weeks. We'll provide a detailed timeline during your consultation.",
      icon: Clock,
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer completely free, no-obligation consultations. Our expert team will visit your home, discuss your vision, provide design recommendations, and give you a detailed estimate. There's no pressure to commit - we're here to help you make informed decisions.",
      icon: Calendar,
    },
    {
      question: "What's the average cost of a kitchen remodel?",
      answer: "Kitchen remodel costs vary widely based on size, materials, and scope. Minor updates typically range from $15,000-$30,000, mid-range remodels from $30,000-$60,000, and luxury renovations from $60,000+. We provide transparent, detailed quotes with no hidden fees.",
      icon: DollarSign,
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely! We are fully licensed contractors with comprehensive general liability insurance and workers compensation coverage. We're also bonded and accredited by the Better Business Bureau. Your project and home are fully protected.",
      icon: Shield,
    },
    {
      question: "Do you handle permits and inspections?",
      answer: "Yes, we handle all necessary permits and coordinate with local building inspectors. Our team is familiar with Tacoma and surrounding area building codes and will ensure your project meets all requirements and passes inspections.",
      icon: Shield,
    },
    {
      question: "What materials do you recommend?",
      answer: "We recommend premium materials that offer the best balance of beauty, durability, and value. This includes solid wood cabinets, quartz or granite countertops, hardwood or tile flooring, and energy-efficient appliances. We'll help you choose based on your style and budget.",
      icon: Shield,
    },
    {
      question: "Can you work with my existing appliances?",
      answer: "Yes, we can integrate your existing appliances into the new design, or help you select new ones. We work with all major appliance brands and can provide recommendations for the best value and performance within your budget.",
      icon: Shield,
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we offer flexible financing solutions to make your dream kitchen affordable. We partner with trusted lenders to provide competitive rates and terms. Many of our customers choose 0% interest options for qualified purchases.",
      icon: DollarSign,
    },
  ]

  const quickHelp = [
    {
      title: "Free Consultation",
      description: "Schedule your free in-home consultation and get expert advice",
      action: "Book Now",
      icon: Calendar,
    },
    {
      title: "Get an Estimate",
      description: "Receive a detailed, no-obligation estimate for your project",
      action: "Get Quote",
      icon: DollarSign,
    },
    {
      title: "View Our Work",
      description: "Browse our portfolio of completed kitchen transformations",
      action: "View Gallery",
      icon: Users,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Help Center</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about kitchen remodeling, our process, and what to expect
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-0">
                  <Card className="bg-white border border-gray-200 hover:border-yellow-300 transition-all duration-300 shadow-md hover:shadow-lg">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3 text-left">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                          <faq.icon className="w-5 h-5 text-yellow-600" />
                        </div>
                        <span className="text-navy-900 font-semibold">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed ml-11">{faq.answer}</p>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Quick Help Sidebar */}
          <div className="space-y-6">
            <Card className="bg-white border border-gray-200 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Quick Help</h3>
                <div className="space-y-4">
                  {quickHelp.map((help, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <help.icon className="w-4 h-4 text-yellow-600" />
                        </div>
                        <h4 className="font-semibold text-navy-900">{help.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{help.description}</p>
                      <Button
                        size="sm"
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium"
                      >
                        {help.action}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="bg-navy-900 text-white border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold mb-2">Still Have Questions?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Our expert team is here to help. Contact us for personalized assistance.
                </p>
                <div className="space-y-3">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900 w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Free Consultation CTA */}
            <Card className="bg-yellow-50 border border-yellow-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Free Consultation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ready to start your kitchen transformation? Book your free consultation today!
                </p>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black w-full font-bold">
                  Schedule Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
