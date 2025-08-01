import React from "react";
import Navbar from "./components/Navbar";
import HeroTitle from "./components/HeroTitle";
import RecentRadios from "./components/RecentRadios";
import RadioList from "./components/RadioList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-blue-100 text-gray-800">
      <Navbar />
      <main className="flex-grow pt-16">
        <HeroTitle />
        <RecentRadios />
        <RadioList />
      </main>
      <Footer />
    </div>
  );
}

export default App;

