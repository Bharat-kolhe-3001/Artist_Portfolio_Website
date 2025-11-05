import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { Link } from "react-router-dom"

const defaultBlogs = [
  {
    id: 1,
    title: "The Journey of an Artist",
    image: "/artist1.jpg",
    shortDesc: "Every artist has a story to tell — filled with struggles, colors, and dreams.",
    fullDesc: "Every artist has a story to tell — filled with struggles, colors, and dreams. In this blog, we explore how creativity shapes identity and inspires others to follow their passion despite challenges.",
  },
  {
    id: 2,
    title: "Exploring Digital Art Trends",
    image: "/digitalart.jpg",
    shortDesc: "From AI-generated art to NFTs, the digital world is redefining creativity.",
    fullDesc: "Digital art has evolved into a new dimension where technology meets imagination. Artists now use tools like AI, AR, and blockchain to express themselves and reach a global audience.",
  }, {
    id: 3,
    title: "Inspiration Behind Masterpieces",
    image: "/inspiration.jpg",
    shortDesc: "What drives an artist to create something extraordinary?",
    fullDesc: "Inspiration can come from nature, emotions, or even silence. Each brushstroke or musical note reflects an artist's soul, telling stories beyond words.",
  },
  {
    id: 4,
    title: "The Power of Color Theory",
    image: "/colortheory.jpg",
    shortDesc: "Understanding how colors influence emotions and perceptions in art.",
    fullDesc: "Color theory is fundamental to visual arts. Different color combinations can evoke specific emotions, create harmony, or convey powerful messages. Mastering color relationships helps artists communicate more effectively with their audience.",
  },
  {
    id: 5,
    title: "Traditional vs Modern Art Forms",
    image: "/traditionalmodern.jpg",
    shortDesc: "How contemporary art builds upon and breaks from traditional techniques.",
    fullDesc: "While traditional art forms like oil painting and sculpture continue to inspire, modern artists are pushing boundaries with mixed media, installation art, and digital platforms. This evolution reflects our changing society and technological advancements.",
  },
  {
    id: 6,
    title: "Building an Artist Portfolio",
    image: "/portfolio.jpg",
    shortDesc: "Essential tips for creating a compelling portfolio that stands out.",
    fullDesc: "A strong portfolio is crucial for any artist seeking opportunities. Learn how to curate your best work, present it professionally, and tell your unique artistic story through careful selection and organization of your pieces.",
  },
]

const Blog = () => {
  const [expanded, setExpanded] = useState(null)
  const [blogs, setBlogs] = useState(defaultBlogs)

  // ✅ Load new blogs from localStorage
  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || []
    setBlogs([...storedBlogs, ...defaultBlogs])
  }, [])

  const handleToggle = (id) => {
    setExpanded(expanded === id ? null : id)
  }

  return (
    <Layout>
      <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">🎨 Artist Blog</h1>

        {/* Upload Button */}
        <div className="text-center mb-10">
          <Link
            to="/blogupload"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md shadow-indigo-700/30 transition-all duration-300"
          >
            <i className="ri-upload-cloud-2-line mr-2"></i> Upload Your Blog
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-4 border border-gray-200">
              <img src={blog.image} alt={blog.title} className="rounded-xl w-full h-48 object-cover mb-4 hover:scale-105 transition-transform duration-300" />
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{blog.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {expanded === blog.id ? blog.fullDesc : blog.shortDesc}
              </p>
              <button
                onClick={() => handleToggle(blog.id)}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all text-sm"
              >
                {expanded === blog.id ? "Show Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
