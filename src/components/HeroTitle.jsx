import { useNavigate } from "react-router-dom";

export default function HeroTitle() {
  const navigate = useNavigate();
  return (
    <div className="relative bg-blue-500 text-white h-[500px] flex flex-col items-center justify-center text-center overflow-hidden">
      <h1 className="text-6xl font-extrabold text-white drop-shadow-lg tracking-wide z-10">
        AirWave
      </h1>

      <button
        onClick={() => navigate("/radio/radio-romania")}
        className="mt-10 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-blue-500 hover:scale-105 transform transition-all duration-300 z-10"
      >
        Ascultă muzica ta preferată
      </button>

      <svg
        className="absolute bottom-0 left-0 w-full h-[225px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#dbeafe" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,160L40,170.7C80,181,160,203,240,213.3C320,224,400,224,480,213.3C560,203,640,181,720,181.3C800,181,880,203,960,213.3C1040,224,1120,224,1200,208C1280,192,1360,160,1400,144L1440,128L1440,320L0,320Z"
        />
      </svg>
    </div>
  );
}
