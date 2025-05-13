import { Moon, Minus, Minimize2, X } from 'lucide-react';

export default function Header() {
  return (
    <div className="h-12 bg-[#1A1A40] flex items-center justify-between px-4">
      <div className="text-[#A0A0A0] cursor-pointer" style={{ marginLeft: '4px' }}>
        <Moon size={24} strokeWidth={2} />
      </div>

      <div className="flex items-center text-[#A0A0A0]" style={{ gap: '12px' }}>
        <Minus size={24} strokeWidth={2} />
        <Minimize2 size={24} strokeWidth={2} />
        <X size={24} strokeWidth={2} />
      </div>
    </div>
  );
}
