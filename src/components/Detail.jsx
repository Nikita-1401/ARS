import React, { useEffect } from 'react'; // Added useEffect for debugging
import { Github, Twitter, Linkedin, Instagram, ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Extract the post data passed from the Blog Card
  const post = location.state?.post;

  // DEBUGGING LOG: Check your browser console (F12) to see if the paragraphs are actually there
  useEffect(() => {
    if (post) {
      console.log("Post received in Detail Page:", post);
      console.log("Number of body blocks:", post.body?.length);
    }
  }, [post]);

  // 2. Fallback check
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <button onClick={() => navigate('/')} className="text-[#747c27] underline">Return Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Header Background Section */}
      <div className="bg-[#747c27] h-[400px] w-full relative flex flex-col items-center">
        <nav className="w-full max-w-7xl flex justify-between items-center p-6 text-white/90">
          <div className="text-xl font-bold flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-xs text-white">K</div>
            KREEDASHALA
          </div>
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors text-white"
          >
            <ArrowLeft size={18} /> Back
          </button>
        </nav>

        {/* 3. DYNAMIC MEDIA CONTAINER */}
        <div className="absolute top-[120px] w-[90%] max-w-5xl h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-black">
          {post.mediaType === 'video' && post.videoUrl ? (
            <iframe
              src={post.videoUrl}
              title={post.title}
              className="w-full h-full object-cover"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 pt-[280px] pb-20 flex flex-col md:flex-row gap-12">
        
        {/* LEFT SIDEBAR */}
        <div className="hidden md:flex flex-col gap-6 pt-10 sticky top-10 h-fit">
          <Github size={20} className="text-gray-400 hover:text-[#4A5D45] cursor-pointer" />
          <Twitter size={20} className="text-gray-400 hover:text-[#4A5D45] cursor-pointer" />
          <Linkedin size={20} className="text-gray-400 hover:text-[#4A5D45] cursor-pointer" />
          <Instagram size={20} className="text-gray-400 hover:text-[#4A5D45] cursor-pointer" />
        </div>

        {/* CENTER COLUMN: Main Article */}
        <div className="flex-1 max-w-3xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-[#747c27] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1">
              {post.category}
            </span>
            <span className="text-xs text-gray-400 uppercase">Latest Insight • {post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#747c27] leading-tight mb-6">
            Know how <span className="text-[#D4AF37]">{post.title}</span> can transform your game this time
          </h1>

          {/* DYNAMIC BODY CONTENT - This handles multiple paragraphs */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            {post.body && post.body.length > 0 ? (
              post.body.map((block, index) => {
                if (block.type === 'text') {
                  // Rendering each paragraph as a unique element
                  return <p key={`text-${index}`} className="mb-4">{block.value}</p>;
                }
                if (block.type === 'image') {
                  return <img key={`img-${index}`} src={block.src} className="rounded-xl w-full my-4 shadow-md" alt="content" />;
                }
                return null;
              })
            ) : (
              <p>No content available for this post.</p>
            )}
          </div>

          {/* Author Section */}
          <div className="mt-16 flex items-center gap-6 p-8 bg-[#E9F0E4]/50 rounded-2xl border border-green-100">
            <img src="https://i.pravatar.cc/150?u=steven" className="w-20 h-20 rounded-full object-cover border-2 border-[#D4AF37]" alt="Coach" />
            <div>
              <h4 className="text-xl font-bold text-[#747c27]">{post.author || "Ars Coach Steven"}</h4>
              <p className="text-sm text-[#D4AF37] font-medium mb-2">Founder & Head Tactics Coach</p>
              <p className="text-xs text-gray-500">Professional coach helping you master elite training insights.</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden lg:flex flex-col gap-8 w-64 pt-10 sticky top-10 h-fit">
          <h4 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-2">Visual Analysis</h4>
          
          {post.sidebarImages && post.sidebarImages.length > 0 ? (
            post.sidebarImages.map((imgObj, idx) => (
              <div key={idx} className="group">
                <div className="overflow-hidden rounded-xl border-b-4 border-[#D4AF37] shadow-lg bg-gray-100">
                  <img 
                    src={imgObj.src} 
                    alt={imgObj.caption} 
                    className="w-full h-44 object-cover transition-all duration-500 hover:scale-110" 
                  />
                </div>
                <p className="text-[10px] mt-3 font-bold text-[#747c27] tracking-widest uppercase">
                  {imgObj.caption}
                </p>
              </div>
            ))
          ) : (
            <p className="text-xs text-gray-400 italic">No additional visuals for this post.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Detail;