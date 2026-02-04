import { MinecraftButton } from './MinecraftButton';
import modeSurvival from '../../assets/mode-survival.png';
import modePvp from '../../assets/mode-pvp.png';
import modeMining from '../../assets/mode-mining.png';
import modeRacing from '../../assets/mode-racing.png';

const modes = [
  {
    icon: '🏠',
    title: 'Survival',
    description: 'Build space stations and colonies. Gather asteroid resources.',
    players: '542',
    color: 'from-[#7FFF00] to-[#5FB300]',
    bgColor: 'bg-[#2ECC40]',
    image: modeSurvival
  },
  {
    icon: '⚔️',
    title: 'PvP Wars',
    description: 'Team battles across planets. Capture bases and dominate!',
    players: '324',
    color: 'from-[#FF4444] to-[#CC0000]',
    bgColor: 'bg-[#FF4444]',
    image: modePvp
  },
  {
    icon: '⛏️',
    title: 'Mining',
    description: 'Peaceful mining. Collect rare ores and trade in markets.',
    players: '218',
    color: 'from-[#00D9FF] to-[#0099CC]',
    bgColor: 'bg-[#00BFFF]',
    image: modeMining
  },
  {
    icon: '🏁',
    title: 'Racing',
    description: 'Rocket races through asteroid fields. Climb leaderboards!',
    players: '163',
    color: 'from-[#FFD700] to-[#FFA500]',
    bgColor: 'bg-[#FFD700]',
    image: modeRacing
  }
];

export function GameModesSection() {
  return (
    <section id="modes" className="py-20 bg-gradient-to-b from-[#0f1419] to-[#1a1a2e] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 md:mb-6">
            <div className="bg-[#7FFF00]/20 backdrop-blur-sm border-2 md:border-4 border-[#7FFF00] px-4 py-1 md:px-6 md:py-2">
              <span 
                className="text-[#7FFF00] text-[8px] md:text-xs uppercase tracking-wider"
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                Game Modes
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
            Choose Your
            <br />
            <span className="text-[#FFD700]">Adventure</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {modes.map((mode, index) => (
            <div 
              key={index}
              className="bg-[#2a2a3e] border-4 border-white/20 overflow-hidden shadow-[0_8px_0_0_rgba(0,0,0,0.5)] hover:shadow-[0_12px_0_0_rgba(0,0,0,0.5)] hover:-translate-y-2 transition-all"
            >
              {/* Image header */}
              <div className="relative h-48 overflow-hidden border-b-4 border-black/30">
                <img 
                  src={mode.image} 
                  alt={mode.title}
                  className="w-full h-full object-cover"
                  style={{ 
                    imageRendering: 'pixelated',
                    filter: 'contrast(1.2) brightness(0.8)'
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${mode.color} opacity-30`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Online players badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border-4 border-white/20 px-4 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#7FFF00] animate-pulse" style={{ imageRendering: 'pixelated' }}></div>
                    <span 
                      className="text-white text-xs"
                      style={{ fontFamily: "'Press Start 2P', cursive" }}
                    >
                      {mode.players}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className={`w-16 h-16 bg-gradient-to-br ${mode.color} flex items-center justify-center border-4 border-black/30 shadow-lg`}
                    style={{ imageRendering: 'pixelated' }}
                  >
                    <span className="text-3xl">{mode.icon}</span>
                  </div>
                  <h3 
                    className="text-white text-base md:text-xl uppercase"
                    style={{ 
                      fontFamily: "'Press Start 2P', cursive",
                      textShadow: '2px 2px 0px rgba(0,0,0,0.8)'
                    }}
                  >
                    {mode.title}
                  </h3>
                </div>
                <p 
                  className="text-gray-300 text-[10px] md:text-xs leading-relaxed mb-4 md:mb-6"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  {mode.description}
                </p>
                <MinecraftButton size="sm" variant="primary" className="w-full">
                  Play Mode
                </MinecraftButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
