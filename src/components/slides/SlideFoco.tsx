export default function SlideFoco() {
  return (
    <div className="fade-up grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
      <div>
        <span className="kicker">07 · Foco</span>
        <h2 className="serif mt-4 text-3xl leading-tight sm:text-4xl md:mt-6 md:text-6xl">
          O objetivo é simples: <br />
          <span className="italic-serif text-gold">ser encontrado</span> no Google.
        </h2>
        <p className="mt-5 max-w-md text-sm text-cream-dim md:mt-8 md:text-base">
          O site é a porta de entrada. Quem pesquisar por advocacia em Ubajara e região vai ver o escritório com clareza, credibilidade e um caminho direto para conversar.
        </p>
      </div>
      <div className="space-y-3 md:space-y-5">
        {[
          "Aparecer nas buscas por quem precisa de advogado",
          "Transmitir autoridade e segurança em poucos segundos",
          "Canal direto de contato via WhatsApp e e-mail",
          "Estrutura pronta para crescer com o escritório",
        ].map((line) => (
          <div key={line} className="flex items-start gap-3 border-b border-line pb-3 md:gap-4 md:pb-4">
            <span className="serif mt-1 text-gold">✦</span>
            <span className="text-sm text-cream md:text-base">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
