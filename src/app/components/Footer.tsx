import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t-4 border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <div 
                className="w-10 h-10 bg-[#FFD700] flex items-center justify-center"
                style={{ imageRendering: 'pixelated' }}
              >
                <span className="text-black text-xl">🚀</span>
              </div>
              <span 
                className="text-white text-sm tracking-wider"
                style={{ 
                  fontFamily: "'Press Start 2P', cursive",
                  textShadow: '2px 2px 0px rgba(0,0,0,0.8)'
                }}
              >
                SPACECRAFT
              </span>
            </Link>
            <p 
              className="text-gray-400 text-xs leading-relaxed"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              Space Minecraft
              <br />
              Server
            </p>
          </div>
          
          <div>
            <h4 
              className="text-white text-xs mb-4 uppercase"
              style={{ 
                fontFamily: "'Press Start 2P', cursive",
                textShadow: '1px 1px 0px rgba(0,0,0,0.8)'
              }}
            >
              Pages
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-[#FFD700] transition-colors text-xs"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/features" 
                  className="text-gray-400 hover:text-[#FFD700] transition-colors text-xs"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="/modes" 
                  className="text-gray-400 hover:text-[#FFD700] transition-colors text-xs"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  Modes
                </Link>
              </li>
              <li>
                <Link 
                  to="/community" 
                  className="text-gray-400 hover:text-[#FFD700] transition-colors text-xs"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 
              className="text-white text-xs mb-4 uppercase"
              style={{ 
                fontFamily: "'Press Start 2P', cursive",
                textShadow: '1px 1px 0px rgba(0,0,0,0.8)'
              }}
            >
              Community
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://discord.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#FFD700] transition-colors text-xs"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 
              className="text-white text-xs mb-4 uppercase"
              style={{ 
                fontFamily: "'Press Start 2P', cursive",
                textShadow: '1px 1px 0px rgba(0,0,0,0.8)'
              }}
            >
              Server
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => { navigator.clipboard.writeText('play.spacecraft.net'); alert('Server IP copied!'); }}
                  className="text-gray-400 hover:text-[#FFD700] transition-colors text-xs text-left"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  Copy IP
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-white/10 pt-8">
          <div className="text-center">
            <p 
              className="text-gray-400 text-xs"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              © 2026 SPACECRAFT - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
