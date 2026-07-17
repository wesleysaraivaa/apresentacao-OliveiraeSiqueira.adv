import { SITE_URL } from "@/constants";

export default function SlideSolucao() {
  return (
    <div className="fade-up">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
        <div>
          <span className="kicker">04 · Solução</span>
          <h2 className="serif mt-4 text-3xl leading-tight sm:text-4xl md:mt-6 md:text-6xl">
            O site já está <span className="italic-serif text-gold">de pé</span>.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-cream-dim md:mt-4 md:text-base">
            Estética sóbria, tipografia clássica e uma leitura pausada — como convém a uma banca de advocacia.
          </p>
        </div>
        <a
          href={SITE_URL}
          target="_blank"
          rel="noreferrer"
          className="gold-btn hidden shrink-0 md:inline-block"
        >
          Abrir site →
        </a>
      </div>

      <div className="mt-6 overflow-hidden rounded-sm border border-line bg-black/40 shadow-[0_30px_80px_-30px_oklch(0_0_0/0.8)] md:mt-10">
        <div className="flex items-center gap-2 border-b border-line bg-ink-soft px-3 py-2 md:px-4 md:py-3">
          <span className="h-2 w-2 rounded-full bg-cream/20 md:h-2.5 md:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-cream/20 md:h-2.5 md:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-cream/20 md:h-2.5 md:w-2.5" />
          <span className="ml-3 truncate text-[9px] tracking-[0.2em] uppercase text-cream-dim md:ml-4 md:text-[10px]">
            oliveiraesiqueira-adv.vercel.app
          </span>
        </div>
        <div className="relative aspect-9/14 w-full bg-black sm:aspect-4/3 md:aspect-video">
          <iframe
            src={SITE_URL}
            title="Prévia do site Oliveira & Siqueira Advocacia"
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
        </div>
      </div>
      <p className="mt-3 text-center text-[10px] tracking-[0.3em] uppercase text-cream-dim md:hidden">
        <a href={SITE_URL} target="_blank" rel="noreferrer" className="text-gold">
          Abrir site em nova aba →
        </a>
      </p>
    </div>
  );
}
