import { useCallback, useEffect, useMemo, useState, type ReactElement } from "react";
import MarcaDourada from "@/components/MarcaDourada";
import {
  SlideCapa,
  SlidePorQue,
  SlideProblema,
  SlideOportunidade,
  SlideSolucao,
  SlideDiferenciais,
  SlideProcesso,
  SlideFoco,
  SlideEncerramento,
} from "@/components/slides";

export default function App() {
  const slides = useMemo(() => SLIDES, []);
  const [i, setI] = useState(0);
  const [isFs, setIsFs] = useState(false);

  const go = useCallback(
    (delta: number) => setI((v) => Math.min(slides.length - 1, Math.max(0, v + delta))),
    [slides.length],
  );

  const toggleFs = useCallback(async () => {
    if (typeof document === "undefined") return;
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen().catch(() => {});
    else await document.exitFullscreen().catch(() => {});
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Home") {
        setI(0);
      } else if (e.key === "End") {
        setI(slides.length - 1);
      } else if (e.key.toLowerCase() === "f") {
        toggleFs();
      } else if (/^[1-9]$/.test(e.key)) {
        const idx = Number(e.key) - 1;
        if (idx < slides.length) setI(idx);
      }
    };
    const onFs = () => setIsFs(!!document.fullscreenElement);
    window.addEventListener("keydown", onKey);
    document.addEventListener("fullscreenchange", onFs);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("fullscreenchange", onFs);
    };
  }, [go, toggleFs, slides.length]);

  const Current = slides[i].component;

  return (
    <main className="stage relative flex h-screen w-screen flex-col overflow-hidden">
      <header className="relative z-20 flex items-center justify-between px-4 py-4 md:px-12 md:py-6">
        <div className="flex items-center gap-3 min-w-0">
          <MarcaDourada />
          <div className="leading-tight min-w-0">
            <div className="serif text-sm md:text-base truncate">
              Oliveira <span className="text-gold">&</span> Siqueira
            </div>
            <div className="text-[9px] md:text-[10px] tracking-[0.24em] md:tracking-[0.28em] uppercase text-cream-dim truncate">
              Proposta · Presença Digital
            </div>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3 md:gap-6">
          <span className="text-[10px] tracking-[0.24em] md:tracking-[0.28em] uppercase text-cream-dim">
            {String(i + 1).padStart(2, "0")} <span className="text-gold">/</span>{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
          <button onClick={toggleFs} className="ghost-btn hidden md:inline-block">
            {isFs ? "Sair" : "Tela cheia"}
          </button>
        </div>
      </header>

      <section
        key={i}
        className={`slide-in relative z-10 flex flex-1 items-stretch justify-center overflow-y-auto overflow-x-hidden ${
          i === 0 ? "px-0 py-0" : "px-5 py-4 md:items-center md:px-16 md:py-0"
        }`}
      >
        <div className={`flex w-full flex-col ${i === 0 ? "" : "max-w-6xl"}`}>
          <Current />
        </div>
      </section>

      <footer className="relative z-20 flex items-center justify-between gap-3 px-4 py-4 md:gap-6 md:px-12 md:py-6">
        <button
          onClick={() => go(-1)}
          disabled={i === 0}
          className="ghost-btn disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Slide anterior"
        >
          <span className="md:hidden">←</span>
          <span className="hidden md:inline">← Anterior</span>
        </button>

        <div className="hidden flex-1 items-center justify-center gap-2 md:flex">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setI(idx)}
              className="group relative h-[2px] flex-1 max-w-[52px] overflow-hidden"
              aria-label={`Ir para slide ${idx + 1}: ${s.id}`}
            >
              <span className="absolute inset-0 bg-cream/15" />
              <span
                className="absolute inset-y-0 left-0 bg-gold transition-all duration-500"
                style={{ width: idx <= i ? "100%" : "0%" }}
              />
            </button>
          ))}
        </div>

        <div className="flex flex-1 items-center gap-1 md:hidden" aria-hidden>
          {slides.map((s, idx) => (
            <span key={s.id} className="relative h-[2px] flex-1 overflow-hidden">
              <span className="absolute inset-0 bg-cream/15" />
              <span
                className="absolute inset-y-0 left-0 bg-gold transition-all duration-500"
                style={{ width: idx <= i ? "100%" : "0%" }}
              />
            </span>
          ))}
        </div>

        <button
          onClick={() => go(1)}
          disabled={i === slides.length - 1}
          className="gold-btn disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Próximo slide"
        >
          <span className="md:hidden">→</span>
          <span className="hidden md:inline">Próximo →</span>
        </button>
      </footer>
    </main>
  );
}

type Slide = { id: string; component: () => ReactElement };

const SLIDES: Slide[] = [
  { id: "capa", component: SlideCapa },
  { id: "porque", component: SlidePorQue },
  { id: "problema", component: SlideProblema },
  { id: "oportunidade", component: SlideOportunidade },
  { id: "solucao", component: SlideSolucao },
  { id: "diferenciais", component: SlideDiferenciais },
  { id: "processo", component: SlideProcesso },
  { id: "proximos", component: SlideFoco },
  { id: "encerramento", component: SlideEncerramento },
];
