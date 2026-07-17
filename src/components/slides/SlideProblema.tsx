export default function SlideProblema() {
  return (
    <div className="fade-up grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-14">
      <div>
        <span className="kicker">02 · Diagnóstico</span>
        <h2 className="serif mt-4 text-3xl leading-tight sm:text-4xl md:mt-6 md:text-6xl">
          Hoje, quem busca <br />
          <span className="italic-serif text-gold">“advogado em Ubajara”</span>
          <br />no Google…
        </h2>
        <p className="mt-6 max-w-lg text-sm text-cream-dim md:mt-8 md:text-lg">
          …dificilmente encontra vocês. A presença fica limitada ao Instagram — ótimo para relacionamento,
          insuficiente para captação de novos clientes que ainda não seguem o perfil.
        </p>
      </div>
      <div className="relative rounded-sm border border-line bg-ink-soft p-5 md:p-8">
        <div className="mb-5 flex items-center gap-2 md:mb-6">
          <span className="h-2 w-2 rounded-full bg-gold/70" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-cream-dim">Google · Resultados</span>
        </div>
        <div className="space-y-3 md:space-y-4">
          <div className="border-l-2 border-gold pl-3 md:pl-4">
            <div className="text-xs text-cream-dim">jusbrasil.com.br</div>
            <div className="serif text-base md:text-lg">Escritórios de advocacia — CE</div>
          </div>
          <div className="border-l-2 border-line pl-3 opacity-70 md:pl-4">
            <div className="text-xs text-cream-dim">oab-ce.org.br</div>
            <div className="serif text-base md:text-lg">Consulta de advogados</div>
          </div>
          <div className="border-l-2 border-line pl-3 opacity-40 md:pl-4">
            <div className="text-xs text-cream-dim">outros concorrentes…</div>
            <div className="serif text-base md:text-lg">—</div>
          </div>
          <div className="mt-5 rounded-sm border border-dashed border-gold/50 p-3 md:mt-6 md:p-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Espaço vago</div>
            <div className="serif mt-1 text-sm italic md:text-base">Oliveira &amp; Siqueira Advocacia</div>
          </div>
        </div>
      </div>
    </div>
  );
}
