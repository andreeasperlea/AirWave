import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      if (y > lastY + 8 && y > 100) setHidden(true);
      else if (y < lastY - 8) setHidden(false);

      setAtTop(y < 40);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const barClasses = atTop
    ? "text-white bg-white/10 border-white/20"
    : "text-blue-700 bg-white/95 border-gray-200 shadow-md";

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg transition-transform duration-300">
      <div
        className={`mx-auto max-w-6xl px-6 py-3 backdrop-blur border-b rounded-b-xl
                    transition-colors duration-300 ${barClasses}`}
      >
        <div className="flex items-center justify-between">
          {/* Clickable title */}
          <h1
            className="text-xl font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            AirWave
          </h1>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Open Menu"
            className="p-1"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {open && (
          <div
            className={`mt-2 w-48 ml-auto rounded-md border shadow-lg p-3
                        ${
                          atTop
                            ? "bg-white/90 text-blue-700 border-white/30"
                            : "bg-white text-blue-700 border-gray-200"
                        }`}
          >
            <a
              className="block py-1 cursor-pointer"
              onClick={() => {
                setOpen(false);
                navigate("/about");
              }}
            >
              About Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
