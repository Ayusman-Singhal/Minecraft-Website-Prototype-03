import { MinecraftButton } from './MinecraftButton';
import { Copy } from 'lucide-react';
import spaceBackground from '../../assets/space-background.png';
import heroCharacter from '../../assets/hero-character.png';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean background with space theme */}
      <div className="absolute inset-0 z-0">
        {/* Gradient sky background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A90E2] via-[#7B68EE] to-[#1a1a2e]"></div>
        
        
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${spaceBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            imageRendering: 'pixelated'
          }}
        />
        
        {/* Animated stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-sm animate-pulse"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 2 + 's',
                animationDuration: Math.random() * 3 + 2 + 's'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20 pb-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 md:gap-3 bg-black/40 backdrop-blur-sm border-2 md:border-4 border-white/20 px-3 py-2 md:px-6 md:py-3 mb-6 md:mb-8">
              <div 
                className="w-2 h-2 md:w-3 md:h-3 bg-[#7FFF00] animate-pulse" 
                style={{ imageRendering: 'pixelated' }}
              ></div>
              <span 
                className="text-[#7FFF00] text-[8px] md:text-xs uppercase tracking-wider"
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                1,247 Players Online
              </span>
            </div>
            
            {/* Main heading - styled like the reference */}
            <h1 className="mb-4 md:mb-6 leading-tight">
              <div
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white mb-2 md:mb-3"
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  textShadow: '2px 2px 0px rgba(0,0,0,0.85)',
                  WebkitTextStroke: '1px rgba(0,0,0,0.8)'
                }}
              >
                JOIN THE
              </div>
              <div
                className="text-3xl sm:text-4xl md:text-6xl text-white lg:text-7xl mb-3 md:mb-4"
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  WebkitBackgroundClip: 'text',
                  textShadow: '3px 3px 6px rgba(0,0,0,0.6)',
                  WebkitTextStroke: '1px rgba(0,0,0,0.6)'
                }}
              >
                ADVENTURE
              </div>
            </h1>
            
            {/* Description */}
            <p
              className="text-white text-xs sm:text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
                textShadow: '1px 1px 3px rgba(0,0,0,0.6)'
              }}
            >
              Build colonies on distant planets, mine asteroids, and conquer the cosmos —
              team up with friends and explore procedurally generated worlds.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4 mb-8 md:mb-10">
              <a href="#play" onClick={(e) => { e.preventDefault(); navigator.clipboard.writeText('play.spacecraft.net'); alert('Server IP copied to clipboard!'); }}>
                <MinecraftButton size="lg" variant="primary">
                  PLAY
                </MinecraftButton>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <MinecraftButton size="lg" variant="discord">
                  Discord
                </MinecraftButton>
              </a>
            </div>
            
            {/* Server IP */}
            <div className="inline-flex items-center gap-2 md:gap-4 bg-black/60 backdrop-blur-sm border-2 md:border-4 border-white/20 px-3 py-2 md:px-6 md:py-4">
              <span 
                className="text-gray-300 text-[8px] md:text-xs uppercase"
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                Server:
              </span>
              <code 
                className="text-[#FFD700] text-[8px] sm:text-xs md:text-sm"
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                play.spacecraft.net
              </code>
              <button 
                className="text-white hover:text-[#FFD700] transition-colors p-1 md:p-2"
                aria-label="Copy server IP"
              >
                <Copy className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>
          </div>
          
          {/* Right side - Character image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              <img 
                src={heroCharacter}
                alt="SpaceCraft Character"
                className="w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-2xl animate-float"
                style={{ 
                  imageRendering: 'pixelated',
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
