export default function RadioList() {
  return (
    <section className="bg-gradient-to-b from-white to-[#dbeafe] py-20 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">Toate posturile</h2>

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
