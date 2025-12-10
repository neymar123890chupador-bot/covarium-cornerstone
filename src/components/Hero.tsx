import serverLogo from '@/assets/server-logo.png';

const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="relative py-12 md:py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-6 relative">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden glow-blue animate-float">
            <img 
              src={serverLogo} 
              alt="Covarium" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl -z-10" />
        </div>

        {/* Title */}
        <h1 className="font-orbitron text-5xl md:text-7xl font-black text-foreground mb-4 tracking-wider">
          <span className="text-primary glow-text">COVA</span>
          <span className="text-accent">RIUM</span>
        </h1>

        {/* Subtitle */}
        <p className="font-rajdhani text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
          Servidor de Minecraft Survival • Comunidade amigável • Diversão garantida
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => scrollTo('status')}
            className="px-8 py-3 bg-primary hover:bg-primary/80 text-primary-foreground font-orbitron font-bold rounded-xl transition-all duration-300 glow-blue hover:scale-105"
          >
            JOGAR AGORA
          </button>
          <button 
            onClick={() => scrollTo('regras')}
            className="px-8 py-3 bg-secondary hover:bg-secondary/80 text-foreground font-orbitron font-bold rounded-xl border border-border hover:border-primary transition-all duration-300"
          >
            VER REGRAS
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
