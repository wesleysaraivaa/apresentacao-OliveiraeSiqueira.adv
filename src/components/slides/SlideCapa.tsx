export default function SlideCapa() {
  const sparks = Array.from({ length: 18 });
  return (
    <div className="fade-up relative flex min-h-full flex-1 flex-col justify-center">
      <div className="cover-bg cover-bg-full" aria-hidden>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grain" />
        {sparks.map((_, idx) => {
          const left = (idx * 7.3) % 100;
          const delay = (idx * 1.1) % 12;
          const duration = 10 + ((idx * 3) % 9);
          const dx = ((idx % 5) - 2) * 25;
          return (
            <span
              key={idx}
              className="spark"
              style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                ["--dx" as any]: `${dx}px`,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-10 md:px-16 md:py-0">
        <div className="flex items-center gap-4">
          <div className="h-px w-10 bg-gold md:w-16" />
          <span className="kicker text-[10px] md:text-xs">Direito · Estratégia · Presença</span>
        </div>
        <h1 className="serif mt-6 text-[2.75rem] leading-[1.02] sm:text-6xl md:mt-10 md:text-[7.5rem] md:leading-none">
          Proposta de <br />
          <span className="italic-serif gold-glow text-gold">presença digital</span>
        </h1>
        <div className="cover-shimmer mt-5 h-px w-40 md:mt-8 md:w-64" />
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream-dim md:mt-10 md:text-lg">
          Um site institucional para o escritório <span className="text-cream">Oliveira &amp; Siqueira Advocacia</span> —
          pensado para transmitir a sobriedade da banca e ser encontrado por quem precisa.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-2 text-[9px] tracking-[0.24em] uppercase text-cream-dim md:mt-14 md:gap-4 md:text-[11px] md:tracking-[0.28em]">
          <span className="rounded-full border border-line px-3 py-1.5">Ubajara — Ceará</span>
          <span className="rounded-full border border-gold/40 px-3 py-1.5 text-gold">Apresentação · Sábado</span>
        </div>
      </div>
    </div>
  );
}
