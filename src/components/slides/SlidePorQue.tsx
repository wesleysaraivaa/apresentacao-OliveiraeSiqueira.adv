export default function SlidePorQue() {
  const stats = [
    { n: "97%", t: "dos consumidores pesquisam serviços locais na internet antes de contratar." },
    { n: "3×", t: "mais chances de fechar quando o profissional aparece no topo do Google." },
    { n: "75%", t: "não passam da primeira página de resultados de busca." },
  ];
  return (
    <div className="fade-up">
      <span className="kicker">01 · Contexto</span>
      <h2 className="serif mt-4 text-3xl leading-tight sm:text-4xl md:mt-6 md:text-7xl">
        Por que um site <span className="italic-serif text-gold">ainda importa</span>?
      </h2>
      <div className="rule mt-6 w-20 md:mt-10 md:w-24" />
      <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-3 md:gap-8">
        {stats.map((s) => (
          <div key={s.n} className="border-l border-line pl-4 md:pl-6">
            <div className="serif text-4xl text-gold md:text-6xl">{s.n}</div>
            <p className="mt-3 text-sm leading-relaxed text-cream-dim md:mt-4">{s.t}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-sm italic-serif text-cream-dim md:mt-12 md:text-base">
        “O Instagram mostra quem vocês são para quem já conhece. O site apresenta o escritório para quem ainda vai conhecer.”
      </p>
    </div>
  );
}
