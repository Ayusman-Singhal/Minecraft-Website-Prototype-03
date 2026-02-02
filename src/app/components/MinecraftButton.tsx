import { ReactNode } from 'react';

interface MinecraftButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'discord';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export function MinecraftButton({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  className = ''
}: MinecraftButtonProps) {
  const variants = {
    primary: 'bg-[#FFD700] hover:bg-[#FFC700] text-black border-[#B8860B] border-b-[#8B6914]',
    secondary: 'bg-[#00D9FF] hover:bg-[#00C3E6] text-white border-[#0099CC] border-b-[#007799]',
    success: 'bg-[#7FFF00] hover:bg-[#6FE000] text-black border-[#5FB300] border-b-[#4F9300]',
    discord: 'bg-[#5865F2] hover:bg-[#4752C4] text-white border-[#4752C4] border-b-[#3C3F99]'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-10 py-4 text-base'
  };
  
  return (
    <button
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        font-bold
        border-4 border-t-4
        shadow-[0_6px_0_0_rgba(0,0,0,0.4)]
        hover:shadow-[0_4px_0_0_rgba(0,0,0,0.4)]
        active:shadow-[0_2px_0_0_rgba(0,0,0,0.4)]
        hover:translate-y-[2px]
        active:translate-y-[4px]
        transition-all
        uppercase
        tracking-wider
        ${className}
      `}
      style={{ 
        fontFamily: "'Press Start 2P', cursive",
        imageRendering: 'pixelated'
      }}
    >
      {children}
    </button>
  );
}
