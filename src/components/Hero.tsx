import { MessageCircle } from 'lucide-react';
import serverLogo from '@/assets/server-logo.png';

const Hero = () => {
  const navigate = useNavigate();

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
        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => scrollTo('regras')}
            className="px-8 py-3 bg-secondary hover:bg-secondary/80 text-foreground font-orbitron font-bold rounded-xl border border-border hover:border-primary transition-all duration-300"
          >
            VER REGRAS
          </button>
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
<<<<<<< HEAD
            onClick={() => scrollTo('status')}
            className="px-8 py-3 bg-primary hover:bg-primary/80 text-primary-foreground font-orbitron font-bold rounded-xl transition-all duration-300 glow-blue hover:scale-105"
          >
            JOGAR AGORA
          </button>
          <button 
            onClick={() => navigate('/regras')}
=======
            onClick={() => scrollTo('regras')}
>>>>>>> c392326 (Remove botão Jogar Agora)
            className="px-8 py-3 bg-secondary hover:bg-secondary/80 text-foreground font-orbitron font-bold rounded-xl border border-border hover:border-primary transition-all duration-300"
          >
            VER REGRAS
          </button>
          <a 
            href="https://discord.gg/7ybs7H4v"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-orbitron font-bold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            DISCORD
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
