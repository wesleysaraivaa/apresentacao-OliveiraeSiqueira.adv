export default function SlideOportunidade() {
  const items = [
    { k: "Autoridade", d: "Um site próprio comunica solidez — banca estabelecida, não apenas perfil social." },
    { k: "SEO Local", d: "Aparecer nas buscas por “advogado em Ubajara”, “previdenciário Ceará” e afins." },
    { k: "Captação passiva", d: "Cliente chega até vocês pesquisando — sem depender de indicação ou anúncio pago." },
    { k: "Confiança", d: "Áreas de atuação, equipe, contato — tudo no mesmo lugar, no seu tom." },
  ];
  return (
    <div className="fade-up">
      <span className="kicker">03 · Oportunidade</span>
      <h2 className="serif mt-4 text-3xl leading-tight sm:text-4xl md:mt-6 md:text-6xl">
        O que muda <span className="italic-serif text-gold">com um site</span>
      </h2>
      <div className="rule mt-6 w-20 md:mt-10 md:w-24" />
      <div className="mt-8 grid gap-x-8 gap-y-6 md:mt-12 md:grid-cols-2 md:gap-x-14 md:gap-y-10">
        {items.map((it, idx) => (
          <div key={it.k} className="flex gap-4 md:gap-6">
            <div className="serif text-xl text-gold md:text-2xl">0{idx + 1}</div>
            <div className="min-w-0">
              <div className="serif text-lg md:text-2xl">{it.k}</div>
              <p className="mt-1 text-sm leading-relaxed text-cream-dim md:mt-2">{it.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
