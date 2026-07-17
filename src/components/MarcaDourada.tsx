import logoOs from "@/assets/logo-os.jpg";

export default function MarcaDourada() {
  return (
    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gold/40">
      <img src={logoOs} alt="Oliveira & Siqueira Logo" className="h-full w-full object-cover" />
    </div>
  );
}

