export default function RecentRadios() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-center space-y-10">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800">Posturi Recente</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow">Radio România</button>
        <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-xl shadow">Kiss FM</button>
        <button className="bg-blue-300 hover:bg-blue-400 text-white px-6 py-3 rounded-xl shadow">Europa FM</button>
      </div>
    </section>
  );
}