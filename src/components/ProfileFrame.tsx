import React, { useState, useRef } from 'react';
import { Camera, Sparkles, ShieldCheck, RefreshCw } from 'lucide-react';

interface ProfileFrameProps {
  displayName: string;
  professionalTitle: string;
  avatarUrl?: string;
  quote?: string;
  signature?: string;
  brandSealUrl?: string;
}

export const ProfileFrame: React.FC<ProfileFrameProps> = ({
  displayName,
  professionalTitle,
  avatarUrl = '/assets/profile/areeba-profile.jpg',
  quote = 'CODE IS MY CRAFT. IMPACT IS MY GOAL.',
  signature = 'Areeba',
  brandSealUrl = '/assets/brand/gold-code-emblem.jpg',
}) => {
  // Check for uploaded or stored photo in localStorage, default to provided avatarUrl
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    const saved = localStorage.getItem('areeba_profile_photo');
    if (saved && saved.startsWith('data:image')) {
      return saved;
    }
    return avatarUrl || '/assets/profile/areeba-profile.jpg';
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPhotoUrl(result);
        localStorage.setItem('areeba_profile_photo', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetToOriginal = () => {
    localStorage.removeItem('areeba_profile_photo');
    setPhotoUrl('/assets/profile/areeba-profile.jpg');
  };

  return (
    <div
      id="profile-frame-container"
      className="relative flex flex-col items-center justify-center p-2 sm:p-4 select-none w-full max-w-md mx-auto"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px' }}
    >
      {/* Outer Studio Atmospheric Smoke & Warm Golden Haze */}
      <div className="absolute -inset-8 bg-gradient-to-tr from-amber-500/10 via-cyan-500/10 to-amber-700/15 rounded-3xl blur-3xl opacity-75 pointer-events-none" />
      <div className="absolute -top-12 -right-8 w-48 h-48 bg-[#D4AF37]/15 rounded-full blur-[90px] pointer-events-none" />

      {/* Main 3D Tilting Studio Container */}
      <div
        className="relative w-full transition-transform duration-300 ease-out"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${isHovered ? 1.015 : 1})`,
        }}
      >
        {/* Frame Structure - Dark Luxury Studio Aesthetics */}
        <div
          id="profile-studio-card"
          className="relative rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-[#1b1c24] via-[#0d0e14] to-[#050508] border border-[rgba(212,175,55,0.35)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.12)] overflow-hidden group"
        >
          {/* Subtle Top-Down Rim Light Specular Flare */}
          <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-[#FFF2D0] to-transparent opacity-80" />

          {/* Main Portrait Canvas - Aspect Square for Exact 1:1 Photo Render */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#07080c] flex items-center justify-center border border-[rgba(212,175,55,0.2)]">
            {/* Real Exact Portrait of Areeba Munir */}
            <img
              src={photoUrl}
              alt={`Areeba Munir - ${professionalTitle}`}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />

            {/* Top Status Tag */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-[rgba(212,175,55,0.35)] shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#F5D38A] uppercase font-semibold">
                SE · UCP LAHORE
              </span>
            </div>

            {/* Camera / Photo Upload Controls */}
            <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
              {localStorage.getItem('areeba_profile_photo') && (
                <button
                  onClick={handleResetToOriginal}
                  title="Reset to Original Photo"
                  className="p-2 rounded-full bg-slate-950/85 hover:bg-[#1a1c24] border border-[rgba(212,175,55,0.4)] text-[#F5D38A] hover:text-white transition-all shadow-md"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              )}
              <label
                htmlFor="profile-image-upload"
                title="Update profile picture"
                className="cursor-pointer p-2 rounded-full bg-slate-950/85 hover:bg-[#1a1c24] border border-[rgba(212,175,55,0.4)] text-[#F5D38A] hover:text-white transition-all shadow-md"
              >
                <Camera className="w-3.5 h-3.5" />
                <input
                  ref={fileInputRef}
                  id="profile-image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
              </label>
            </div>
          </div>

          {/* Floating Quote Card Cleanly Positioned Below Portrait (Not covering her face) */}
          <div className="mt-2.5 p-3 rounded-xl bg-[#090b12]/90 border border-[rgba(212,175,55,0.25)] shadow-md">
            <p className="text-[11px] font-mono tracking-wider uppercase text-slate-200 text-center font-medium">
              “ {quote} ”
            </p>
            <div className="mt-1 flex items-center justify-between pt-1.5 border-t border-[rgba(212,175,55,0.15)]">
              <span className="text-[10px] font-mono tracking-widest text-[#F5D38A] uppercase font-semibold">
                4.00 GPA · ENGINEER
              </span>
              <span className="font-script-signature text-xl text-[#F5D38A] pr-1">
                {signature}
              </span>
            </div>
          </div>
        </div>

        {/* Floating Glowing Metallic Bronze-Gold Code Seal Emblem */}
        <div
          id="hero-gold-code-emblem"
          className="absolute -bottom-5 -right-4 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-[#664b15] via-[#D4AF37] to-[#FFF6E5] shadow-gold-emblem flex items-center justify-center animate-float z-30"
          title="Engineered with Code & Purpose"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
            <img
              src={brandSealUrl}
              alt="Code Seal Emblem"
              className="w-full h-full object-cover filter brightness-110"
              referrerPolicy="no-referrer"
            />
            {/* Subtle overlay shimmer */}
            <div className="absolute inset-0 bg-radial from-transparent via-amber-500/10 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Floating Academic Badge */}
        <div className="absolute -top-3 -left-3 sm:-left-5 px-3 py-1.5 rounded-full bg-[#0a0c14]/90 backdrop-blur-md border border-[rgba(212,175,55,0.4)] shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center gap-2 text-xs font-mono text-[#F5D38A] z-30">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="font-bold">4.00 GPA</span>
          <span className="text-slate-400 text-[10px]">Academic</span>
        </div>
      </div>

      {/* Verified Profile Signature Bar */}
      <div className="mt-5 flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">
        <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
        <span>Verified Engineering Portfolio</span>
      </div>
    </div>
  );
};

