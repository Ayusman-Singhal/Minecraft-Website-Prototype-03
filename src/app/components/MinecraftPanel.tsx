import { ReactNode } from 'react';

interface MinecraftPanelProps {
  children: ReactNode;
  className?: string;
  variant?: 'stone' | 'dark' | 'wood';
}

export function MinecraftPanel({ children, className = '', variant = 'stone' }: MinecraftPanelProps) {
  const variants = {
    stone: 'bg-[#8B8B8B] border-[#545454] border-b-[#C6C6C6] border-r-[#C6C6C6]',
    dark: 'bg-[#313338] border-[#1E1F22] border-b-[#404249] border-r-[#404249]',
    wood: 'bg-[#9C6926] border-[#7A4E1A] border-b-[#C17E2E] border-r-[#C17E2E]'
  };
  
  return (
    <div 
      className={`
        ${variants[variant]}
        border-4
        shadow-[0_4px_0_0_rgba(0,0,0,0.25)]
        ${className}
      `}
      style={{ imageRendering: 'pixelated' }}
    >
      {children}
    </div>
  );
}
