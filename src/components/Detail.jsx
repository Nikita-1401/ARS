import React from 'react';
import { Github, Twitter, Linkedin, Instagram, ArrowLeft } from 'lucide-react';
// 1. Import hooks for navigation and data retrieval
import { useLocation, useNavigate } from 'react-router-dom';

const Detail = () => {
  // 2. Initialize hooks
  const location = useLocation();
  const navigate = useNavigate();

  // 3. Extract the post data from the router state
  const post = location.state?.post;

  // 4. Fallback data if page is refreshed or accessed directly
  const data = post || {
    title: "Football Tactics",
    category: "Team Sport",
    description: "Develop your footwork, tactical awareness, and teamwork skills on the pitch. Mastering football tactics is not just about formations; it's about decision-making under pressure and understanding the broader flow of the game.",
    image: "/football.jpg",
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* 1. Header Background Section */}
      <div className="bg-[#4A5D45] h-[400px] w-full relative flex flex-col items-center">
        <nav className="w-full max-w-7xl flex justify-between items-center p-6 text-white/90">
          <div className="text-xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-xs">K</div>
            KREEDASHALA
          </div>
          
          {/* 5. Updated Back Button using navigate() */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft size={18} /> Back to Blog
          </button>
        </nav>

        {/* 2. Large Image */}
        <div className="absolute top-[120px] w-[90%] max-w-5xl h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3. Content Section */}
      <div className="max-w-7xl mx-auto px-6 pt-[280px] pb-20 flex flex-col md:flex-row gap-12">
        
        {/* Left Sidebar: Socials */}
        <div className="hidden md:flex flex-col gap-6 pt-10 sticky top-10 h-fit">
          <Github size={20} className="text-gray-400 hover:text-[#4A5D45] cursor-pointer" />
          <Twitter size={20} className="text-gray-400 hover:text-[#4A5D45] cursor-pointer" />
          <Linkedin size={20} className="text-gray-400 hover:text-[#4A5D45] cursor-pointer" />
          <Instagram size={20} className="text-gray-400 hover:text-[#4A5D45] cursor-pointer" />
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-3xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-[#4A5D45] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1">
              {data.category}
            </span>
            <span className="text-xs text-gray-400 uppercase">Latest Insight • 8 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#2D4A22] leading-tight mb-6">
            Know how <span className="text-[#D4AF37]">{data.title}</span> can transform your game this time
          </h1>

          <p className="text-lg text-gray-600 italic mb-8 border-l-4 border-[#D4AF37] pl-4">
            Strategies for on-field domination and tactical brilliance designed for elite athletes.
          </p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <ul className="space-y-3 bg-[#F8FAF5] p-6 rounded-lg border border-green-100">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" /> 10+ Tactical Drills included
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" /> Video Analysis of Pro Matches
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" /> Position-Specific Coaching
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" /> Advanced Team Formations
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2D4A22] pt-6">The Transformative Power of Training</h2>
            <p>
              {data.description} Our program uses expert coaching, real-time data analysis, 
              and immersive drills to build your tactical intelligence. You'll learn to read defenses, 
              exploit space, and coordinate attacks with a new level of sophistication.
            </p>
          </div>

          {/* Author Section */}
          <div className="mt-16 flex items-center gap-6 p-8 bg-[#E9F0E4]/50 rounded-2xl border border-green-100">
            <img 
              src="https://i.pravatar.cc/150?u=steven" 
              className="w-20 h-20 rounded-full object-cover border-2 border-[#D4AF37]" 
              alt="Coach" 
            />
            <div>
              <h4 className="text-xl font-bold text-[#2D4A22]">Ars Coach Steven</h4>
              <p className="text-sm text-[#D4AF37] font-medium mb-2">Founder & Head Tactics Coach</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Professional coach and fitness enthusiast helping you master your journey through elite training insights.
              </p>
              <div className="flex gap-3 mt-3 opacity-60">
                <Github size={14} /> <Twitter size={14} /> <Instagram size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;