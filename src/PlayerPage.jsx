import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Hls from "hls.js";
import { STATIONS } from "./stations";

export default function PlayerPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { station, index } = useMemo(() => {
    const i = STATIONS.findIndex((s) => s.id === id);
    return { station: STATIONS[i], index: i };
  }, [id]);

  const goToIndex = useCallback((i) => {
    const len = STATIONS.length;
    const next = (i + len) % len;
    navigate(`/radio/${STATIONS[next].id}`);
  }, [navigate]);

  const goPrev = useCallback(() => goToIndex(index - 1), [goToIndex, index]);
  const goNext = useCallback(() => goToIndex(index + 1), [goToIndex, index]);

  const audioRef = useRef(null);
  const hlsRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const a = audioRef.current;
    if (!a || !station) return;

    setErr("");

    const wasPlaying = !a.paused;

    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    a.pause();
    setPlaying(false);
    a.removeAttribute("src");
    const srcEl = a.querySelector("source");
    if (srcEl) srcEl.src = "";

    const tryAutoplay = () => {
      if (wasPlaying) {
        a.play().then(() => setPlaying(true)).catch(() => {});
      }
    };

    if (station.streamUrl.endsWith(".m3u8")) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hlsRef.current = hls;
        hls.loadSource(station.streamUrl);
        hls.attachMedia(a);
        hls.on(Hls.Events.MANIFEST_PARSED, tryAutoplay);
        hls.on(Hls.Events.ERROR, (_, d) => setErr(d?.details || "Playback error"));
      } else if (a.canPlayType("application/vnd.apple.mpegurl")) {
        a.src = station.streamUrl;
        a.addEventListener("loadedmetadata", tryAutoplay, { once: true });
      } else {
        setErr("HLS not supported in this browser.");
      }
    } else {
      if (srcEl) {
        srcEl.src = station.streamUrl;
        srcEl.setAttribute(
          "type",
          station.streamUrl.includes(".aac") || station.streamUrl.includes(".aacp")
            ? "audio/aac"
            : "audio/mpeg"
        );
      }
      a.load();
      a.addEventListener("canplay", tryAutoplay, { once: true });
    }

    return () => {
      a.pause();
    };
  }, [station]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    const log = (e) => console.log(`[audio] ${e.type}`, a.src, a.error || "");
    const onError = () => {
      const map = { 1: "ABORTED", 2: "NETWORK", 3: "DECODE", 4: "SRC_NOT_SUPPORTED" };
      const code = a.error?.code;
      setErr(`Media error: ${map[code] || "UNKNOWN"}`);
    };

    const evs = ["loadstart","loadedmetadata","canplay","playing","pause","stalled","waiting"];
    evs.forEach((ev) => a.addEventListener(ev, log));
    a.addEventListener("error", onError);

    return () => {
      evs.forEach((ev) => a.removeEventListener(ev, log));
      a.removeEventListener("error", onError);
    };
  }, []);

  const toggle = useCallback(async () => {
    const a = audioRef.current;
    if (!a) return;
    setErr("");
    try {
      if (a.paused) {
        await a.play();
        setPlaying(true);
      } else {
        a.pause();
        setPlaying(false);
      }
    } catch (e) {
      console.error("play() rejected:", e);
      setErr(`Playback failed: ${e?.name || e?.message || "unknown error"}`);
    }
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
      if (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
      if (e.code === "Space") { e.preventDefault(); toggle(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext, toggle]);

  return (
    <div
      className="
        min-h-[calc(100vh-9rem)]
        bg-gradient-to-b from-[#dbeafe] to-white
        flex items-start justify-center
        pt-64 pb-16 px-6
      "
    >
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center box-content ">
        <Link to="/" className="mb-4 inline-block text-blue-600 hover:underline">← Înapoi</Link>

        {station ? (
          <>
            <h1 className="text-2xl md:text-3xl font-bold mb-1 text-slate-900">{station.name}</h1>
            <p className="text-gray-500 mb-6">{station.genres?.join(" • ")}</p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <button onClick={goPrev} className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
                ◀ Anterior
              </button>
              <select
                className="px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200"
                value={station.id}
                onChange={(e) => navigate(`/radio/${e.target.value}`)}
              >
                {STATIONS.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
              <button onClick={goNext} className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
                Următor ▶
              </button>
            </div>

            <audio ref={audioRef} preload="auto">
              <source src={station.streamUrl} type="audio/mpeg" />
            </audio>

            <div className="flex items-center gap-3">
              <button
                onClick={toggle}
                className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg hover:from-blue-700 hover:to-blue-500 transition"
              >
                {playing ? "Pauză" : "Redă"}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                defaultValue="1"
                onChange={(e) => (audioRef.current.volume = Number(e.target.value))}
                className="w-40"
                aria-label="Volum"
              />
            </div>

            {err && <p className="mt-4 text-red-600 text-sm">{err}</p>}
          </>
        ) : (
          <div className="p-8 text-center">Postul nu a fost găsit.</div>
        )}
      </div>
    </div>
  );
}
