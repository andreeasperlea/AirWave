import React from "react";

export default function RadioList() {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Toate posturile</h2>

      {/* Search bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Caută un post de radio..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Lista posturilor */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Magic FM</h3>
          <p>Hituri fără întreruperi.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Radio Guerrilla</h3>
          <p>Vocea alternativă a orașului.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Digi FM</h3>
          <p>Informație și muzică de calitate.</p>
        </div>
      </div>
    </section>
  );
}
