import { SITE_URL } from "@/constants";
import logoAsset from "@/assets/LogoUniwersotech.png";

export default function SlideEncerramento() {
  return (
    <div className="fade-up text-center">
      <div className="mx-auto flex items-center justify-center gap-3 md:gap-4">
        <div className="h-px w-10 bg-gold md:w-16" />
        <span className="kicker">Encerramento</span>
        <div className="h-px w-10 bg-gold md:w-16" />
      </div>
      <h2 className="serif mx-auto mt-6 max-w-4xl text-4xl leading-[1.05] sm:text-5xl md:mt-10 md:text-8xl">
        Vamos colocar o <br />
        <span className="italic-serif text-gold">escritório no mapa</span> <br />
        do Google?
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-sm text-cream-dim md:mt-10 md:text-base">
        Fico à disposição para tirar dúvidas, ajustar o que for necessário e dar o próximo passo juntos.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-14 md:gap-4">
        <a href={SITE_URL} target="_blank" rel="noreferrer" className="gold-btn">
          Ver o site →
        </a>
        <a
          href="https://wa.me/5588997130026?text=Ol%C3%A1!%20Vi%20a%20proposta%20de%20presen%C3%A7a%20digital%20para%20o%20Oliveira%20%26%20Siqueira%20Advocacia%20e%20gostaria%20de%20conversar."
          target="_blank"
          rel="noreferrer"
          className="ghost-btn"
        >
          Falar no WhatsApp →
        </a>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 md:mt-16">
        <img src={logoAsset} alt="Uniwersotech" className="h-10 w-auto opacity-90 md:h-12" />
        <div className="text-center">
          <div className="text-sm font-medium tracking-wide text-cream md:text-base">WesleyDev</div>
          <a
            href="https://instagram.com/uniwersotech"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-gold transition-colors hover:text-cream md:text-sm"
          >
            @uniwersotech
          </a>
        </div>
        <div className="text-[9px] tracking-[0.28em] uppercase text-cream-dim md:text-[10px] md:tracking-[0.32em]">
          Desenvolvimento Web · Manutenção · Presença Digital
        </div>
      </div>
    </div>
  );
}
