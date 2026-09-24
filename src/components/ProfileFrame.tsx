import React, { useState, useRef } from 'react';
import { Sparkles, ShieldCheck, Upload, Camera, Trash2 } from 'lucide-react';

interface ProfileFrameProps {
  displayName: string;
  professionalTitle: string;
  avatarUrl?: string;
  quote?: string;
  signature?: string;
}

export const ProfileFrame: React.FC<ProfileFrameProps> = ({
  displayName,
  professionalTitle,
  avatarUrl = '',
  quote = 'CODE IS MY CRAFT. IMPACT IS MY GOAL.',
  signature = 'Areeba',
}) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(() => {
    return localStorage.getItem('areeba_custom_profile_photo') || null;
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPhotoUrl(result);
        localStorage.setItem('areeba_custom_profile_photo', result);
        window.dispatchEvent(new Event('storage'));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem('areeba_custom_profile_photo');
    setPhotoUrl(null);
    window.dispatchEvent(new Event('storage'));
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
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

      {/* Hidden File Picker */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

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
            {photoUrl ? (
              <>
                {/* Real Exact Portrait of Areeba Munir */}
                <img
                  src={photoUrl}
                  alt={`Areeba Munir - ${professionalTitle}`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Corner controls: Change or Remove photo */}
                <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={triggerUpload}
                    title="Change / Update Photo"
                    className="p-2 rounded-full bg-slate-950/85 hover:bg-[#1a1c24] border border-[rgba(212,175,55,0.4)] text-[#F5D38A] hover:text-white transition-all shadow-md"
                  >
                    <Camera className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleRemovePhoto}
                    title="Remove Photo"
                    className="p-2 rounded-full bg-slate-950/85 hover:bg-rose-950/80 border border-rose-500/40 text-rose-300 hover:text-white transition-all shadow-md"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </>
            ) : (
              /* If photo is not uploaded yet, show sleek 1-click upload card */
              <div
                onClick={triggerUpload}
                className="w-full h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer bg-gradient-to-b from-[#13151f] to-[#07080c] hover:from-[#191b29] hover:to-[#0b0d14] transition-all group/upload"
              >
                <div className="w-20 h-20 rounded-2xl border-2 border-dashed border-[rgba(212,175,55,0.5)] flex items-center justify-center mb-4 group-hover/upload:border-amber-300 group-hover/upload:scale-105 transition-all bg-black/40 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                  <Upload className="w-8 h-8 text-[#F5D38A] group-hover/upload:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1.5 font-mono">
                  Set Your Original Photo
                </h3>
                <p className="text-xs text-slate-300 font-sans max-w-[220px] mb-4 leading-relaxed">
                  Click here to select your real photo directly from your device
                </p>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-[#050508] bg-gradient-to-r from-[#FFF6E5] via-[#F5D38A] to-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover/upload:scale-105 transition-transform">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Choose Photo</span>
                </span>
              </div>
            )}

            {/* Top Status Tag */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-[rgba(212,175,55,0.35)] shadow-lg pointer-events-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#F5D38A] uppercase font-semibold">
                SE · UCP LAHORE
              </span>
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

