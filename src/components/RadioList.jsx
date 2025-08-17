import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { STATIONS } from "../stations";

export default function RadioList() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results = STATIONS.filter((station) =>
    station.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelectStation = (station) => {
    navigate(`/radio/${station.id}`);

    // Preluăm lista din localStorage
    const stored = JSON.parse(localStorage.getItem("recentRadios") || "[]");
    // Eliminăm dublurile
    const filtered = stored.filter((s) => s.id !== station.id);
    // Adăugăm radio-ul selectat în față și păstrăm max 3
    const updated = [station, ...filtered].slice(0, 3);
    localStorage.setItem("recentRadios", JSON.stringify(updated));

    setQuery(""); // reset input
  };

  return (
    <section className="bg-gradient-to-b from-white to-[#dbeafe] py-20 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
        Caută radioul tău preferat
      </h2>

      <div className="max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Tastează numele postului..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {query && (
          <ul className="mt-4 bg-white shadow rounded-lg text-left">
            {results.length > 0 ? (
              results.map((station) => (
                <li
                  key={station.id}
                  onClick={() => handleSelectStation(station)}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {station.name}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">Niciun rezultat găsit</li>
            )}
          </ul>
        )}
      </div>
    </section>
  );
}
