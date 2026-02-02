import { MinecraftButton } from './MinecraftButton';

const stats = [
  { label: 'Players', value: '50K+', icon: '👥', color: 'from-[#00D9FF] to-[#0099CC]' },
  { label: 'Discord', value: '25K+', icon: '💬', color: 'from-[#5865F2] to-[#4752C4]' },
  { label: 'Events', value: '12+', icon: '📅', color: 'from-[#FFD700] to-[#FFA500]' },
  { label: 'Uptime', value: '99.9%', icon: '📈', color: 'from-[#7FFF00] to-[#5FB300]' }
];

const events = [
  {
    title: 'Asteroid Hunt',
    date: 'Feb 1-3',
    reward: '2x Resources',
    color: 'bg-[#00D9FF]'
  },
  {
    title: 'Tournament',
    date: 'Feb 8',
    reward: 'Ranks',
    color: 'bg-[#FF4444]'
  },
  {
    title: 'Build Contest',
    date: 'Feb 15',
    reward: '$500',
    color: 'bg-[#FFD700]'
  }
];

export function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5">
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
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 md:mb-6">
            <div className="bg-[#FF69B4]/20 backdrop-blur-sm border-2 md:border-4 border-[#FF69B4] px-4 py-1 md:px-6 md:py-2">
              <span 
                className="text-[#FF69B4] text-[8px] md:text-xs uppercase tracking-wider"
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                Community
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
            Join Our
            <br />
            <span className="text-[#00D9FF]">Galaxy</span>
          </h2>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-[#2a2a3e] border-2 md:border-4 border-white/20 shadow-[0_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[0_8px_0_0_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all"
            >
              <div className="p-4 md:p-6 text-center">
                <div 
                  className={`w-12 h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 md:mb-4 border-2 md:border-4 border-black/30`}
                  style={{ imageRendering: 'pixelated' }}
                >
                  <span className="text-2xl md:text-3xl">{stat.icon}</span>
                </div>
                <div 
                  className="text-xl md:text-3xl text-white mb-1 md:mb-2"
                  style={{ 
                    fontFamily: "'Press Start 2P', cursive",
                    textShadow: '2px 2px 0px rgba(0,0,0,0.8)'
                  }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-[10px] md:text-xs text-gray-300 uppercase"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Events and Discord */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 
              className="text-white text-2xl mb-6 uppercase"
              style={{ 
                fontFamily: "'Press Start 2P', cursive",
                textShadow: '2px 2px 0px rgba(0,0,0,0.8)'
              }}
            >
              Events
            </h3>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div 
                  key={index}
                  className="bg-[#2a2a3e] border-4 border-white/20 shadow-[0_4px_0_0_rgba(0,0,0,0.5)]"
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <h4 
                        className="text-white text-sm uppercase flex-1"
                        style={{ 
                          fontFamily: "'Press Start 2P', cursive",
                          textShadow: '1px 1px 0px rgba(0,0,0,0.8)'
                        }}
                      >
                        {event.title}
                      </h4>
                      <div className={`${event.color} px-3 py-1 border-2 border-black/30`}>
                        <span 
                          className="text-black text-xs font-bold"
                          style={{ fontFamily: "'Press Start 2P', cursive" }}
                        >
                          Soon
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-gray-300 text-xs"
                        style={{ fontFamily: "'Press Start 2P', cursive" }}
                      >
                        📅 {event.date}
                      </span>
                      <span 
                        className="text-[#FFD700] text-xs"
                        style={{ fontFamily: "'Press Start 2P', cursive" }}
                      >
                        🏆 {event.reward}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 
              className="text-white text-2xl mb-6 uppercase"
              style={{ 
                fontFamily: "'Press Start 2P', cursive",
                textShadow: '2px 2px 0px rgba(0,0,0,0.8)'
              }}
            >
              Connect
            </h3>
            
            <div className="bg-gradient-to-br from-[#5865F2] to-[#4752C4] border-4 border-[#3C3F99] shadow-[0_8px_0_0_rgba(0,0,0,0.5)] mb-6">
              <div className="p-8 text-center">
                <div className="text-6xl mb-4">💬</div>
                <h4 
                  className="text-white text-xl mb-4 uppercase"
                  style={{ 
                    fontFamily: "'Press Start 2P', cursive",
                    textShadow: '2px 2px 0px rgba(0,0,0,0.8)'
                  }}
                >
                  Join Discord
                </h4>
                <p 
                  className="text-white/90 text-xs leading-relaxed mb-6"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  25,000+ players
                  <br />
                  Share builds & get help!
                </p>
                <MinecraftButton size="md" variant="primary" className="w-full">
                  Join Now
                </MinecraftButton>
              </div>
            </div>
            
            <div className="bg-[#2a2a3e] border-4 border-white/20 shadow-[0_6px_0_0_rgba(0,0,0,0.5)]">
              <div className="p-6">
                <h4 
                  className="text-white text-sm mb-4 uppercase"
                  style={{ 
                    fontFamily: "'Press Start 2P', cursive",
                    textShadow: '1px 1px 0px rgba(0,0,0,0.8)'
                  }}
                >
                  Quick Links
                </h4>
                <div className="space-y-3">
                  {['Rules', 'Vote', 'Support', 'Shop'].map((link, i) => (
                    <a 
                      key={i}
                      href="#" 
                      className="block text-gray-400 hover:text-[#FFD700] transition-colors text-xs uppercase"
                      style={{ fontFamily: "'Press Start 2P', cursive" }}
                    >
                      → {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
