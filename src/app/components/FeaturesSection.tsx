
const features = [
  {
    icon: '🚀',
    title: 'Space Travel',
    description: 'Visit planets and moons across galaxies',
    color: 'bg-gradient-to-br from-[#00D9FF] to-[#0099CC]'
  },
  {
    icon: '🛡️',
    title: 'Land Claims',
    description: 'Protect your builds from griefers',
    color: 'bg-gradient-to-br from-[#7FFF00] to-[#5FB300]'
  },
  {
    icon: '⚡',
    title: 'Tech Mods',
    description: 'Rockets, lasers, and space suits',
    color: 'bg-gradient-to-br from-[#FFD700] to-[#FFA500]'
  },
  {
    icon: '⭐',
    title: 'Rank Up',
    description: 'Progress from Cadet to Commander',
    color: 'bg-gradient-to-br from-[#FF69B4] to-[#FF1493]'
  },
  {
    icon: '🌍',
    title: 'Global Play',
    description: 'Join players from around the world',
    color: 'bg-gradient-to-br from-[#5865F2] to-[#4752C4]'
  },
  {
    icon: '⚙️',
    title: 'No Lag',
    description: '99.9% uptime, ultra-fast servers',
    color: 'bg-gradient-to-br from-[#FF4444] to-[#CC0000]'
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f1419] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 2px, transparent 2px),
              linear-gradient(to bottom, white 2px, transparent 2px)
            `,
            backgroundSize: '64px 64px'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 md:mb-6">
            <div className="bg-[#FFD700]/20 backdrop-blur-sm border-2 md:border-4 border-[#FFD700] px-4 py-1 md:px-6 md:py-2">
              <span 
                className="text-[#FFD700] text-[8px] md:text-xs uppercase tracking-wider"
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                Features
              </span>
            </div>
          </div>
          
          <h2 
            className="text-2xl sm:text-3xl md:text-5xl text-white mb-4 md:mb-6 leading-tight px-4"
            style={{ 
              fontFamily: "'Press Start 2P', cursive",
              textShadow: `
                3px 3px 0px rgba(0,0,0,1),
                -2px -2px 0px rgba(0,0,0,0.8)
              `,
              WebkitTextStroke: '2px black'
            }}
          >
            Why Choose
            <br />
            <span className="text-[#00D9FF]">SPACECRAFT?</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#2a2a3e] border-4 border-white/20 hover:border-white/40 transition-all hover:-translate-y-2 shadow-[0_8px_0_0_rgba(0,0,0,0.5)] hover:shadow-[0_12px_0_0_rgba(0,0,0,0.5)]"
            >
              <div className="p-6">
                <div 
                  className={`w-20 h-20 ${feature.color} flex items-center justify-center mb-4 border-4 border-black/30 shadow-lg`}
                  style={{ imageRendering: 'pixelated' }}
                >
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                <h3 
                  className="text-white text-sm md:text-base mb-2 md:mb-3 uppercase"
                  style={{ 
                    fontFamily: "'Press Start 2P', cursive",
                    textShadow: '2px 2px 0px rgba(0,0,0,0.8)'
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-gray-300 text-[10px] md:text-xs leading-relaxed"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
