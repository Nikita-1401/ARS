import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// 1. IMPORT YOUR NEW JSON DATA
import blogPosts from '../data/blog.json'; 

const BlogCard = ({ post, onCardClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-xl overflow-hidden cursor-pointer flex flex-col h-full border border-gray-100 transition-all group"
      onClick={() => onCardClick?.(post)} // Added click to the whole card for better UX
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#747c27] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-[#747c27] mb-3 group-hover:text-[#6BA358] transition-colors leading-tight">
          {post.title}
        </h3>
        
        {/* 2. DYNAMIC DESCRIPTION: Pulls the first text block from the body array */}
        <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
          {post.body.find(block => block.type === 'text')?.value || "No description available."}
        </p>

        {/* Footer with Read More Button */}
        <div className="mt-auto flex justify-end items-center pt-4 border-t border-gray-50">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation(); 
              onCardClick?.(post);
            }}
            className="bg-[#747c27] hover:bg-[#D4AF37] text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-colors duration-300 shadow-sm"
          >
            Read More
            <span className="text-base">→</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Blog = () => {
  const navigate = useNavigate();

  const handleCardClick = (post) => {
    // 3. UPDATED NAVIGATION: Uses the slug for the URL but still passes full post object
    navigate(`/blog/${post.slug || post.id}`, { state: { post } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-[#6BA358] pl-6">
          <h1 className="text-5xl font-black text-[#747c27] mb-2 tracking-tight">Our Blog</h1>
          <p className="text-gray-400 font-medium">
            Home <span className="mx-2 text-[#D4AF37]">/</span> <span className="text-gray-300">Latest Insights</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Blog List */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 4. LOOPING through imported JSON */}
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} onCardClick={handleCardClick} />
            ))}
          </div>

          {/* Sidebar (Remains Static as per your original design) */}
          <aside className="lg:col-span-1 space-y-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#D4AF37]"></div>
                <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img src="https://i.pravatar.cc/150?u=steven" alt="Steven" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-2xl font-bold text-[#747c27] mb-2">Hello, I'm Steven</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Professional coach and fitness enthusiast helping you master your journey through elite training insights.
                </p>
                <div className="flex justify-center gap-4 text-[#6BA358]">
                    <span className="font-black text-xs tracking-widest cursor-pointer hover:text-[#D4AF37] transition-colors">FOLLOW: FB • TW • IG</span>
                </div>
            </div>

            {/* Popular Posts Section (Design Kept) */}
            <div>
              <h4 className="font-black uppercase tracking-[0.2em] text-[#747c27] text-xs mb-8 flex items-center gap-4">
                Most Popular <span className="flex-grow h-px bg-gray-100"></span>
              </h4>
              <div className="space-y-6">
                {[
                  { title: "Elite Dribbling Drills for Basketball", date: "JAN 30, 2026", img: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=150" },
                  { title: "Yoga: Relaxing the Modern Mind", date: "FEB 12, 2026", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=150" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-20 h-20 shrink-0 overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                      <img src={item.img} alt="thumb" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-[#747c27] leading-snug group-hover:text-[#6BA358] transition-colors mb-1">{item.title}</h5>
                      <span className="text-[10px] font-bold text-gray-300 tracking-wider uppercase">{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;