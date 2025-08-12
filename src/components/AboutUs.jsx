import React from "react";
import {Link, useNavigate} from "react-router-dom";
import PlayerPage from "../PlayerPage";


export default function AboutUs() {
    const navigate=useNavigate();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#dbeafe] via-white to-white">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200 blur-3xl" />
        <div className="absolute top-10 right-10 h-56 w-56 rounded-full bg-indigo-200 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-48">
        <div className="rounded-3xl bg-white/80 backdrop-blur shadow-xl ring-1 ring-black/5 p-8 md:p-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M3 14c2 0 2-4 4-4s2 4 4 4 2-4 4-4 2 4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            Despre Noi
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            AirWave — radioul tău, oriunde și oricând
          </h1>

          <p className="mt-4 text-slate-600 leading-relaxed">
            AirWave adună posturile tale preferate într-o singură aplicație simplă. Apasă play și
            bucură-te de muzică, știri și emisiuni live – fără cont, fără bătăi de cap.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Feature
              title="Peste 10.000 posturi"
              desc="Stații locale și internaționale."
              icon={
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M4 8h16M7 12h10M9 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              }
            />
            <Feature
              title="Pornire instant"
              desc="Play imediat, fără buffering mare."
              icon={
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7-11-7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
            <Feature
              title="Fără cont"
              desc="Deschizi, alegi postul, asculți."
              icon={
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M12 7a4 4 0 110 8 4 4 0 010-8z" stroke="currentColor" strokeWidth="1.6"/>
                  <path d="M4 19a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              }
            />
          </div>

         <div className="mt-10 flex justify-center">
            <Link
              to="/radio/radio-romania"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 font-semibold text-white shadow-lg hover:from-blue-700 hover:to-blue-500 transition"
            >
              Începe să asculți
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, desc, icon }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-white/70 backdrop-blur p-4 ring-1 ring-black/5">
      <div className="mt-1 text-blue-600">{icon}</div>
      <div>
        <p className="font-semibold text-slate-900">{title}</p>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}
