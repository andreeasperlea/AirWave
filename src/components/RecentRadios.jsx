import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RecentRadios() {
  const [recentRadios, setRecentRadios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentRadios") || "[]");
    setRecentRadios(stored);
  }, []);

  if (recentRadios.length === 0) return null;

  return (
    <section className="bg-gradient-to-b from-[#dbeafe] to-white py-16 px-6 md:px-20 text-center space-y-10">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800">Posturi Recente</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {recentRadios.map((station, index) => (
          <button
            key={station.id}
            onClick={() => navigate(`/radio/${station.id}`)}
            className={`px-6 py-3 rounded-xl shadow text-white ${
              index === 0
                ? "bg-blue-500 hover:bg-blue-600"
                : index === 1
                ? "bg-blue-400 hover:bg-blue-500"
                : "bg-blue-300 hover:bg-blue-400"
            }`}
          >
            {station.name}
          </button>
        ))}
      </div>
    </section>
  );
}
