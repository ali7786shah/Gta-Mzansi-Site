import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Kitchen Trends for 2025",
    excerpt: "Discover the latest kitchen design trends that will dominate 2025, from smart appliances to sustainable materials and innovative storage solutions.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Design Trends",
    readTime: "5 min read",
    publishDate: "Dec 15, 2024",
    slug: "kitchen-trends-2025"
  },
  {
    id: 2,
    title: "How to Choose the Perfect Countertop Material",
    excerpt: "A comprehensive guide to selecting the right countertop material for your kitchen, including granite, quartz, marble, and more options.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Materials Guide",
    readTime: "7 min read",
    publishDate: "Dec 10, 2024",
    slug: "choosing-countertop-materials"
  },
  {
    id: 3,
    title: "Budget-Friendly Kitchen Upgrades That Add Value",
    excerpt: "Smart kitchen upgrades that won't break the bank but will significantly increase your home's value and functionality.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Budget Tips",
    readTime: "6 min read",
    publishDate: "Dec 5, 2024",
    slug: "budget-friendly-kitchen-upgrades"
  }
]

export function BlogPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Kitchen Remodeling Insights & Inspiration
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest trends, tips, and expert advice for your kitchen remodeling project.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.publishDate}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                {/* Read More Button */}
                <Button 
                  variant="outline" 
                  className="w-full border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white group-hover:border-yellow-500 group-hover:text-yellow-600 transition-all duration-300"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 text-lg">
            Read Our Blog
          </Button>
          <p className="text-gray-600 mt-4">
            Get weekly updates on kitchen remodeling trends, tips, and inspiration
          </p>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-navy-900 mb-2 text-center">
            Stay Updated with Kitchen Trends
          </h3>
          <p className="text-gray-600 mb-4 text-center">
            Subscribe to our newsletter for exclusive tips, trends, and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}