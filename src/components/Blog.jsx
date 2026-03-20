import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const posts = [
    {
      id: 1,
      title: "Basketball",
      description: "Master the art of dribbling, shooting, and team play with our expert basketball training programs.",
      image: "/basketball.jpg",
      buttonText: "Learn more",
      category: "Team Sport",
      duration: "2-3 hours"
    },
    {
      id: 2,
      title: "Cricket",
      description: "From batting techniques to bowling strategies, become a cricket pro with professional coaching.",
      image: "/cricket.jpg",
      buttonText: "Learn more",
      category: "Team Sport",
      duration: "3-4 hours"
    },
    {
      id: 3,
      title: "Gym Swimming",
      description: "Combine strength training with aquatic workouts for full-body fitness and endurance.",
      image: "/gym.jpeg",
      buttonText: "Learn more",
      category: "Fitness",
      duration: "1-2 hours"
    },
    {
      id: 4,
      title: "Football ",
      description: "Develop your footwork, tactical awareness, and teamwork skills on the pitch.",
      image: "/football.jpeg",
      buttonText: "Learn more",
      category: "Team Sport",
      duration: "2-3 hours"
    },
    {
      id: 5,
      title: "Yoga",
      description: "Let you relax all you muscles and mind with the Yoga sessions ",
      image: "/yoga.jpeg",
      buttonText: "Learn more",
      category: "Exercise",
      duration: "1.5-2 hours"
    },
    {
      id: 6,
      title: "Badminton Agility",
      description: "Improve your agility, reflexes, and smashing power on the badminton court.",
      image: "/badminton.avif",
      buttonText: "Learn more",
      category: "Racket Sport",
      duration: "1-2 hours"
    }
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex + 3 >= posts.length ? 0 : prevIndex + 3
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, posts.length]);

  const visiblePosts = posts.slice(currentIndex, currentIndex + 3);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= posts.length ? 0 : prevIndex + 3
    );
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, posts.length - 3) : prevIndex - 3
    );
  };

  return (
 <>
      <div className="bg-[#F8FAF5] rounded-[35px] overflow-hidden">
        
        <section className="relative p-3">
          <div className="relative h-[450px] w-full overflow-hidden rounded-[30px]">
            <img 
              src="/Ground.png" 
              alt="Sports Academy" 
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10" />
            
            <div className="absolute inset-0 flex flex-col justify-center px-10 text-white">
              <div className="flex items-center gap-2 mb-4 bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full border border-white/30 animate-pulse">
                <span className="text-xs font-medium uppercase tracking-wider">Ars Kreedashala Pvt Ltd</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-md animate-slideInLeft">
                Master Your <br /> Sports Journey
              </h1>
              <p className="mt-4 text-sm opacity-90 max-w-xs animate-slideInLeft animation-delay-200">
                Discover expert training programs, professional coaching, and state-of-the-art facilities.
              </p>
              <button className="mt-6 bg-[#6BA358] hover:scale-105 hover:bg-[#5a8f47] text-white px-6 py-2 rounded-full font-medium transition-all duration-300 w-fit text-sm shadow-lg">
                Join KREEDSHALA
              </button>
            </div>
          </div>
        </section>

       

        <section className="px-8 py-16 bg-[#E9F0E4]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2D4A22]"> Browse By Categories</h2>
            <div className="flex justify-center gap-1.5 mt-4">
              <div className="h-1 w-8 rounded-full bg-green-600" />
            </div>
          </div>

          <div className="flex justify-end gap-2 mb-6">
            <button onClick={handlePrev} className="bg-white p-2 rounded-full shadow-md hover:bg-[#6BA358] hover:text-white transition-all">←</button>
            <button onClick={handleNext} className="bg-white p-2 rounded-full shadow-md hover:bg-[#6BA358] hover:text-white transition-all">→</button>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
          {visiblePosts.map((post, idx) => (
  <div 
    key={post.id} 
    className="bg-white p-5 flex flex-col items-center text-center group cursor-pointer transition-all duration-500 hover:shadow-xl animate-fadeIn"
    /* Added a fixed height to prevent vertical stretching on large screens */
    style={{ 
      animationDelay: `${idx * 150}ms`,
      height: '480px', // Forces all cards to be exactly this height
      maxWidth: '380px', // Prevents cards from getting too wide
      margin: '0 auto'   // Centers cards if the container is wider
    }}
  >
    {/* Fixed Aspect Ratio for Image Container */}
    <div className="relative overflow-hidden w-full aspect-[4/3] mb-6 rounded-sm bg-gray-100">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[9px] font-bold tracking-widest uppercase px-2 py-1 text-black">
        {post.category}
      </div>
    </div>

    <h3 className="text-xl font-bold text-[#2D4A22] mb-1 group-hover:text-[#6BA358] transition-colors duration-300">
      {post.title}
    </h3>
    
    <p className="text-xs italic text-gray-400 mb-4">
      Please, step inside!
    </p>

    {/* Line clamping ensures the text doesn't push the "Learn More" button down differently for each card */}
    <p className="text-[11px] leading-relaxed text-gray-500 mb-6 line-clamp-3 px-2">
      {post.description}
    </p>

    <div className="mt-auto pb-4">
      <span className="text-[10px] tracking-[0.2em] font-bold border-b-2 border-black pb-1 group-hover:text-[#6BA358] group-hover:border-[#6BA358] transition-all duration-300">
        LEARN MORE
      </span>
    </div>
  </div>
))}
          </div>

          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: Math.ceil(posts.length / 3) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx * 3)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / 3) === idx ? 'w-8 bg-[#6BA358]' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-slideInLeft { animation: slideInLeft 0.6s ease-out; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
        .animation-delay-200 { animation-delay: 200ms; opacity: 0; animation-fill-mode: forwards; }
      `}</style>
    </>
  );
};

export default Blog;