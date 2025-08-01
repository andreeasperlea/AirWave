export default function HeroTitle() {
  return (
    
    <div className="relative bg-blue-500 text-white h-[500px] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Titlul principal */}
      <h1 className="text-6xl font-extrabold text-white drop-shadow-lg tracking-wide z-10">
        AirWave
      </h1>
      <p className="mt-4 text-2xl font-semibold z-10">
        Ascultă muzica ta preferată
      </p>

      {/* Val cu gradient corectat */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            {/* Începutul valului = aceeași culoare ca fundalul */}
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          fillOpacity="1"
          d="M0,160L40,170.7C80,181,160,203,240,213.3C320,224,400,224,480,213.3C560,203,640,181,720,181.3C800,181,880,203,960,213.3C1040,224,1120,224,1200,208C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </svg>
    </div>
  );
}
