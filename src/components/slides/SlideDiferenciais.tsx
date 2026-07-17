export default function SlideDiferenciais() {
  const feats = [
    { t: "Design sob medida", d: "Paleta e tipografia pensadas para o Direito — nada de template genérico." },
    { t: "100% responsivo", d: "Funciona perfeito em celular, tablet e desktop." },
    { t: "Rápido e leve", d: "Carrega em segundos, o que ajuda também no ranqueamento do Google." },
    { t: "Integração WhatsApp", d: "Botão direto para conversar com o escritório em um clique." },
    { t: "Pronto para SEO", d: "Estrutura, títulos e descrições preparados para as buscas locais." },
    { t: "Fácil de atualizar", d: "Novas áreas de atuação, membros da equipe e notícias sem complicação." },
  ];
  return (
    <div className="fade-up">
      <span className="kicker">05 · Diferenciais</span>
      <h2 className="serif mt-4 text-3xl leading-tight sm:text-4xl md:mt-6 md:text-6xl">
        O que está <span className="italic-serif text-gold">incluído</span>
      </h2>
      <div className="rule mt-6 w-20 md:mt-10 md:w-24" />
      <div className="mt-8 grid gap-px bg-line sm:grid-cols-2 md:mt-12 md:grid-cols-3">
        {feats.map((f) => (
          <div key={f.t} className="bg-ink p-5 md:p-7">
            <div className="mb-2 h-[2px] w-8 bg-gold md:mb-3" />
            <div className="serif text-lg md:text-xl">{f.t}</div>
            <p className="mt-2 text-sm leading-relaxed text-cream-dim">{f.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
