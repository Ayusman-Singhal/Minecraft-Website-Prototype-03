import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MinecraftButton } from './MinecraftButton';

import logoImage from '../../assets/logo.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <img 
            src={logoImage} 
            alt="SpaceCraft Logo" 
            className="w-10 h-10 md:w-12 md:h-12"
            style={{ imageRendering: 'pixelated' }}
          />
          <span 
            className="text-white text-sm md:text-xl tracking-wider drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
            style={{ 
              fontFamily: "'Press Start 2P', cursive",
              WebkitTextStroke: '1.5px rgba(0,0,0,0.5)'
            }}
          >
            SPACECRAFT
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/"
            className="text-white hover:text-[#FFD700] transition-colors text-xs uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            style={{ 
              fontFamily: "'Press Start 2P', cursive",
              WebkitTextStroke: '1px rgba(0,0,0,0.5)'
            }}
          >
            Home
          </Link>
          <Link 
            to="/features"
            className="text-white hover:text-[#FFD700] transition-colors text-xs uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            style={{ 
              fontFamily: "'Press Start 2P', cursive",
              WebkitTextStroke: '1px rgba(0,0,0,0.5)'
            }}
          >
            Features
          </Link>
          <Link 
            to="/modes"
            className="text-white hover:text-[#FFD700] transition-colors text-xs uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            style={{ 
              fontFamily: "'Press Start 2P', cursive",
              WebkitTextStroke: '1px rgba(0,0,0,0.5)'
            }}
          >
            Modes
          </Link>
          <Link 
            to="/community"
            className="text-white hover:text-[#FFD700] transition-colors text-xs uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            style={{ 
              fontFamily: "'Press Start 2P', cursive",
              WebkitTextStroke: '1px rgba(0,0,0,0.5)'
            }}
          >
            Community
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <MinecraftButton size="sm" className="hidden sm:block" variant="success">
            Play Now
          </MinecraftButton>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:text-[#FFD700] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed top-[72px] left-0 right-0 bg-black/95 backdrop-blur-md border-t-4 border-white/10 transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          <Link 
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#FFD700] transition-colors text-sm uppercase tracking-wider py-3 border-b border-white/10"
            style={{ 
              fontFamily: "'Press Start 2P', cursive",
            }}
          >
            Home
          </Link>
          <Link 
            to="/features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#FFD700] transition-colors text-sm uppercase tracking-wider py-3 border-b border-white/10"
            style={{ 
              fontFamily: "'Press Start 2P', cursive",
            }}
          >
            Features
          </Link>
          <Link 
            to="/modes"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#FFD700] transition-colors text-sm uppercase tracking-wider py-3 border-b border-white/10"
            style={{ 
              fontFamily: "'Press Start 2P', cursive",
            }}
          >
            Modes
          </Link>
          <Link 
            to="/community"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#FFD700] transition-colors text-sm uppercase tracking-wider py-3 border-b border-white/10"
            style={{ 
              fontFamily: "'Press Start 2P', cursive",
            }}
          >
            Community
          </Link>
          <div className="pt-2">
            <MinecraftButton size="sm" variant="success" className="w-full">
              Play Now
            </MinecraftButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
