import React, { useState } from 'react';
import { motion } from 'framer-motion';

const instagramPosts = [
  {
    id: 1,
    col: 'left',
    type: 'video',
    src: '/assets/videos/insta_reel_1.mp4',
    poster: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=800&q=80',
    likes: '8.4k',
    comments: '412',
    caption: 'Mesmerizing Rajasthani folk artists welcoming baraat guests with the royal Chari fire dance ✨🔥🏰 #RajasthaniWedding #SurajLightHouse'
  },
  {
    id: 2,
    col: 'center-top',
    type: 'video',
    src: '/assets/videos/insta_reel_2.mp4',
    poster: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
    likes: '9.8k',
    comments: '643',
    caption: 'Traditional royal folk beats & spirited wedding performances lighting up the sangeet night 👑🌸 #RoyalHeritage #SurajLightHouse'
  },
  {
    id: 3,
    col: 'center-bottom',
    type: 'video',
    src: '/assets/videos/insta_reel_3.mp4',
    poster: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80',
    likes: '11.5k',
    comments: '893',
    caption: 'Joyful celebrations, authentic mehendi rituals & colorful royal wedding vibes 🏰💫 #RanthamboreWeddings #SurajLightHouse'
  },
  {
    id: 4,
    col: 'right-top',
    type: 'video',
    src: '/assets/videos/insta_reel_4.mp4',
    poster: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    likes: '14.8k',
    comments: '1.2k',
    caption: 'Majestic palace court illuminations & royal wedding celebrations under starry skies ✨🦚 #RoyalRajasthani #WeddingLighting'
  },
  {
    id: 5,
    col: 'right-bottom',
    type: 'video',
    src: '/assets/videos/insta_reel_5.mp4',
    poster: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80',
    likes: '15.6k',
    comments: '924',
    caption: 'Grand royal sangeet stage, festive dhol & vibrant celebrations lighting up the night 🌸✨ #SurajLightHouse #BespokeWeddings'
  }
];

function VideoReelCard({ post, index, ease }) {
  const [videoFailed, setVideoFailed] = useState(false);
  const INSTAGRAM_URL = "https://www.instagram.com/suraj_light_house_ranthmbhor?utm_source=qr";

  return (
    <motion.a 
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease }}
      className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-rose-100/80 bg-black block cursor-pointer select-none"
    >
      {!videoFailed ? (
        <video 
          src={post.src} 
          poster={post.poster}
          autoPlay 
          loop 
          muted 
          playsInline
          webkit-playsinline="true"
          preload="auto"
          onTimeUpdate={(e) => {
            // Smoothly loops the 15-second clip
            if (e.target.currentTime >= 15) {
              e.target.currentTime = 0;
            }
          }}
          onError={() => setVideoFailed(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <img 
          src={post.poster} 
          alt={post.caption}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      )}

      {/* Reel Play Badge */}
      <div className="absolute top-3 right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white text-xs z-10 pointer-events-none group-hover:opacity-0 transition-opacity">
        <i className="fa-solid fa-play text-[9px] sm:text-[10px] ml-0.5"></i>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5 text-white">
        <div className="flex justify-end">
          <i className="fa-brands fa-instagram text-xl sm:text-2xl text-white/90"></i>
        </div>
        <div>
          <p className="text-[11px] sm:text-xs font-light line-clamp-2 mb-2 sm:mb-3 leading-relaxed text-white/90">
            {post.caption}
          </p>
          <div className="flex items-center gap-3 text-[10px] sm:text-xs font-medium text-rose-200">
            <span className="flex items-center gap-1"><i className="fa-solid fa-heart text-red-500"></i> {post.likes}</span>
            <span className="flex items-center gap-1"><i className="fa-solid fa-comment"></i> {post.comments}</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function InstagramSection() {
  const LUXURY_EASE = [0.25, 1, 0.5, 1];
  const INSTAGRAM_URL = "https://www.instagram.com/suraj_light_house_ranthmbhor?utm_source=qr";

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-rose-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Asymmetrical 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
          
          {/* ================= COLUMN 1 (LEFT) ================= */}
          <div className="flex flex-col gap-6 sm:gap-8">
            
            {/* Top Text & Instagram Brand Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: LUXURY_EASE }}
              className="pt-2 sm:pt-4"
            >
              <div className="mb-3 sm:mb-4">
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-charcoal hover:text-[#E63956] transition-colors"
                  aria-label="Instagram Profile"
                >
                  <i className="fa-brands fa-instagram text-3xl sm:text-5xl text-[#E63956]"></i>
                </a>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-bold leading-tight tracking-wide mb-3">
                Follow Us On <br /> Instagram
              </h2>

              <p className="font-sans text-xs text-gray-500 font-light mb-4 leading-relaxed">
                <a 
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E63956] font-semibold hover:underline transition"
                >
                  @suraj_light_house_ranthmbhor
                </a> • Daily inspiration, royal Rajasthani decor & live wedding moments
              </p>

              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E63956] hover:text-[#CF203E] transition group"
              >
                <span>Explore Feed</span>
                <i className="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
              </a>
            </motion.div>

            {/* Video Reel 1 */}
            <VideoReelCard post={instagramPosts[0]} index={1} ease={LUXURY_EASE} />

          </div>

          {/* ================= COLUMN 2 (CENTER) ================= */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <VideoReelCard post={instagramPosts[1]} index={2} ease={LUXURY_EASE} />
            <VideoReelCard post={instagramPosts[2]} index={3} ease={LUXURY_EASE} />
          </div>

          {/* ================= COLUMN 3 (RIGHT) ================= */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <VideoReelCard post={instagramPosts[3]} index={4} ease={LUXURY_EASE} />
            <VideoReelCard post={instagramPosts[4]} index={5} ease={LUXURY_EASE} />
          </div>

        </div>

      </div>
    </section>
  );
}
