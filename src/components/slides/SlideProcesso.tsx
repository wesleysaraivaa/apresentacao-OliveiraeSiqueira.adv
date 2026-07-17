export default function SlideProcesso() {
  const steps = [
    { n: "I", t: "Ajustes finais", d: "Refinamos textos, fotos da equipe e áreas de atuação com base no feedback de vocês." },
    { n: "II", t: "Domínio e hospedagem", d: "O cliente escolhe e registra o domínio e a hospedagem. Eu oriento e faço toda a configuração técnica." },
    { n: "III", t: "Site no ar", d: "Publicação, indexação no Google e orientação para aparecer nas buscas locais." },
  ];
  return (
    <div className="fade-up">
      <span className="kicker">06 · Próximos passos</span>
      <h2 className="serif mt-4 text-3xl leading-tight sm:text-4xl md:mt-6 md:text-6xl">
        Como <span className="italic-serif text-gold">seguimos</span> daqui
      </h2>
      <div className="rule mt-6 w-20 md:mt-10 md:w-24" />
      <div className="mt-8 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
        {steps.map((s, idx) => (
          <div key={s.n} className="relative">
            {idx < steps.length - 1 && (
              <div className="absolute -right-7 top-3 hidden h-px w-14 bg-line md:block" />
            )}
            <div className="serif text-3xl text-gold md:text-4xl">{s.n}</div>
            <div className="mt-3 serif text-lg md:mt-4 md:text-xl">{s.t}</div>
            <p className="mt-2 text-sm leading-relaxed text-cream-dim md:mt-3">{s.d}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-sm italic-serif text-cream-dim md:mt-14 md:text-base">
        O domínio e a hospedagem ficam no nome do escritório, com total transparência. Futuras atualizações, relatórios de visitas e acompanhamento podem ser combinados depois, se vocês quiserem.
      </p>
    </div>
  );
}
