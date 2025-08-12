import { Star, MapPin, Shield, Award, CheckCircle, Phone, Mail, Clock, ChevronRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function KitchenRemodelingHomepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-navy-900">TacomaKitchens</h1>
              <span className="text-sm text-gray-500 ml-2">Expert Remodelers</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-navy-900 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-navy-900 transition-colors">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-navy-900 transition-colors">Gallery</a>
              <a href="#about" className="text-gray-700 hover:text-navy-900 transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-navy-900 transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-navy-900 transition-colors">Contact</a>
            </nav>
            <Button className="hidden md:inline-flex bg-yellow-500 hover:bg-yellow-600 text-black">
              Get Free Quote
            </Button>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-navy-900/80 to-navy-700/60">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-navy-900/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Tag Menu */}
          <div className="mb-6">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {["Kitchen Renovation", "Cabinets", "Islands", "Countertops", "Tile Backsplashes"].map((item) => (
                <Badge key={item} variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your Dream Kitchen Starts Here in Tacoma
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Beautiful Designs. Professional Craftsmanship. Local Experts You Can Trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg">
              Request Free Estimate
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 text-lg">
              View Gallery
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-sm">4.9 Google Reviews</span>
            </div>
            <Separator orientation="vertical" className="h-6 bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="text-sm">15+ Years in Business</span>
            </div>
            <Separator orientation="vertical" className="h-6 bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Transforming Tacoma Kitchens for Over 15 Years
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At TacomaKitchens, we're passionate about creating beautiful, functional spaces that bring families together. 
                Our experienced team of designers and craftsmen work closely with each client to understand their vision and 
                deliver exceptional results that exceed expectations.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From concept to completion, we handle every aspect of your kitchen remodel with attention to detail and 
                commitment to quality. Over 15 years serving Tacoma homeowners, we've built our reputation on trust, 
                craftsmanship, and outstanding customer service.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team working in kitchen"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Comprehensive Kitchen Remodeling Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From design to installation, we offer complete kitchen transformation services 
              tailored to your style, budget, and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Kitchen Design & Planning",
                description: "Expert 3D design and space planning to optimize your kitchen layout for both beauty and functionality.",
                icon: "🎨"
              },
              {
                title: "Custom Cabinets & Countertops",
                description: "Premium quality custom cabinetry and stunning countertops in granite, quartz, marble, and more.",
                icon: "🏗️"
              },
              {
                title: "Lighting & Fixtures Installation",
                description: "Modern lighting solutions including under-cabinet, pendant, and recessed lighting installations.",
                icon: "💡"
              },
              {
                title: "Flooring & Tiling",
                description: "Beautiful flooring options from hardwood to luxury vinyl, plus professional tile and backsplash work.",
                icon: "🏠"
              },
              {
                title: "Full Kitchen Renovation",
                description: "Complete kitchen makeovers including plumbing, electrical, and structural modifications.",
                icon: "🔧"
              },
              {
                title: "Eco-Friendly Upgrades",
                description: "Sustainable materials and energy-efficient appliances for environmentally conscious homeowners.",
                icon: "🌿"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Stunning Kitchen Transformations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the incredible before and after results of our kitchen remodeling projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                before: "https://images.unsplash.com/photo-1586237315203-5ba2fd1b9f8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Modern Farmhouse Kitchen"
              },
              {
                before: "https://images.unsplash.com/photo-1565540516703-c0cd79aaa237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Contemporary Open Kitchen"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={project.before} alt="Before" className="w-full h-64 object-cover" />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded text-sm font-semibold">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <img src={project.after} alt="After" className="w-full h-64 object-cover" />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded text-sm font-semibold">
                      AFTER
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">Complete kitchen transformation with custom cabinetry, new appliances, and modern finishes.</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white">
              View Full Gallery
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Why Choose TacomaKitchens?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional results and outstanding customer experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-yellow-500" />,
                title: "Licensed & Insured",
                description: "Fully licensed contractors with comprehensive insurance coverage for your peace of mind."
              },
              {
                icon: <div className="flex text-yellow-400">{[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-current" />)}</div>,
                title: "5-Star Rated on Google",
                description: "Consistently high ratings from satisfied customers across the Tacoma area."
              },
              {
                icon: <Award className="h-12 w-12 text-yellow-500" />,
                title: "Premium Quality Materials",
                description: "We use only the finest materials and work with trusted suppliers for lasting results."
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-yellow-500" />,
                title: "Affordable Financing Available",
                description: "Flexible financing options to make your dream kitchen more accessible."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partner Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
              Trusted Certifications & Partners
            </h2>
            <p className="text-lg text-gray-600">
              We work with industry-leading brands and maintain professional certifications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { name: "NKBA", logo: "https://via.placeholder.com/150x80/E5E7EB/6B7280?text=NKBA" },
              { name: "BBB Accredited", logo: "https://via.placeholder.com/150x80/E5E7EB/6B7280?text=BBB+A%2B" },
              { name: "Houzz", logo: "https://via.placeholder.com/150x80/E5E7EB/6B7280?text=Houzz" },
              { name: "Home Depot", logo: "https://via.placeholder.com/150x80/E5E7EB/6B7280?text=Home+Depot" }
            ].map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src={partner.logo} alt={partner.name} className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from satisfied Tacoma homeowners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Tacoma, WA",
                rating: 5,
                text: "TacomaKitchens transformed our dated kitchen into a modern masterpiece! The team was professional, on time, and the quality exceeded our expectations. We absolutely love our new space!",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b02c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              },
              {
                name: "Michael Chen",
                location: "Puyallup, WA",
                rating: 5,
                text: "From design to completion, the entire process was seamless. They listened to our needs and delivered exactly what we wanted. Our kitchen is now the heart of our home!",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              },
              {
                name: "Jennifer Martinez",
                location: "Federal Way, WA",
                rating: 5,
                text: "Outstanding craftsmanship and attention to detail. The team was respectful of our home and timeline. We couldn't be happier with our beautiful new kitchen!",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-navy-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Proudly Serving the Greater Tacoma Area
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide professional kitchen remodeling services throughout Pierce County and surrounding communities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-navy-900 mb-6">Service Areas Include:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Tacoma", "Puyallup", "Lakewood", "Federal Way",
                    "University Place", "Fife", "Sumner", "Bonney Lake",
                    "Auburn", "Kent", "Des Moines", "Burien"
                  ].map((city, index) => (
                    <div key={index} className="flex items-center">
                      <MapPin className="h-4 w-4 text-yellow-500 mr-2" />
                      <span className="text-gray-700">{city}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Don't see your area listed? Contact us - we may service your location!
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-4 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">[Interactive Map Placeholder]</p>
                <p className="text-sm text-gray-400 mt-2">
                  Static or interactive map showing service areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Kitchen Remodeling Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest tips, trends, and expert advice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Top 5 Kitchen Trends for 2025",
                excerpt: "Discover the latest design trends that are shaping modern kitchens this year, from bold colors to smart technology integration.",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                date: "January 15, 2025"
              },
              {
                title: "How to Choose the Perfect Countertops",
                excerpt: "A comprehensive guide to selecting countertop materials that balance beauty, durability, and budget for your kitchen remodel.",
                image: "https://images.unsplash.com/photo-1565540516703-c0cd79aaa237?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                date: "January 8, 2025"
              },
              {
                title: "Budget-Friendly Kitchen Upgrades",
                excerpt: "Transform your kitchen without breaking the bank with these affordable upgrade ideas that deliver maximum impact.",
                image: "https://images.unsplash.com/photo-1586237315203-5ba2fd1b9f8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                date: "December 28, 2024"
              }
            ].map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 text-yellow-600 hover:text-yellow-700">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about kitchen remodeling
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "How long does a kitchen remodel take?",
                answer: "A typical kitchen remodel takes 6-10 weeks from start to finish, depending on the scope of work. Factors that affect timeline include custom orders, permit requirements, and structural changes. We provide a detailed timeline during your consultation."
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes! We provide free in-home consultations where we discuss your vision, assess your space, and provide preliminary design ideas. This allows us to understand your needs and provide an accurate estimate for your project."
              },
              {
                question: "What's the average cost of a kitchen remodel?",
                answer: "Kitchen remodel costs vary widely based on size, materials, and scope of work. Minor updates can start around $15,000, while full renovations typically range from $30,000-$80,000+. We provide detailed, transparent estimates after your consultation."
              },
              {
                question: "Do you handle permits and inspections?",
                answer: "Absolutely! We handle all necessary permits and coordinate inspections with local authorities. Our team is familiar with Tacoma and Pierce County requirements, ensuring your project meets all building codes."
              },
              {
                question: "Can I use my kitchen during the remodel?",
                answer: "We work to minimize disruption to your daily life. Depending on the scope, you may have limited kitchen access during certain phases. We'll discuss temporary solutions and provide a detailed schedule to help you plan accordingly."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                <AccordionTrigger className="text-left font-semibold text-navy-900 hover:text-yellow-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book Your Free Kitchen Design Consultation Today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call (253) 555-0123
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 text-lg">
              <Mail className="mr-2 h-5 w-5" />
              Get Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">TacomaKitchens</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Transforming Tacoma kitchens with professional design and expert craftsmanship for over 15 years.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">ig</span>
                </div>
                <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</a></li>
                <li><a href="#gallery" className="text-gray-300 hover:text-yellow-400 transition-colors">Gallery</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-yellow-400 transition-colors">Reviews</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-300">Kitchen Design</span></li>
                <li><span className="text-gray-300">Custom Cabinets</span></li>
                <li><span className="text-gray-300">Countertops</span></li>
                <li><span className="text-gray-300">Full Renovation</span></li>
                <li><span className="text-gray-300">Eco-Friendly Options</span></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-yellow-400 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-300">(253) 555-0123</p>
                    <p className="text-sm text-gray-400">Mon-Fri 8AM-6PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-yellow-400 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-300">info@tacomakitchens.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-yellow-400 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-300">123 Pacific Ave</p>
                    <p className="text-gray-300">Tacoma, WA 98402</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 TacomaKitchens. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
