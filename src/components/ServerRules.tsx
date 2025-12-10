import { 
  MessageCircle, 
  Package, 
  Hammer, 
  Shield, 
  Ban, 
  Swords, 
  Heart, 
  MessageSquare, 
  Users, 
  Crown 
} from 'lucide-react';

const rules = [
  {
    icon: MessageCircle,
    title: 'Sempre utilize o respeito nas suas conversas',
    description: 'Nada de xingamentos, brigas ou ofensas.'
  },
  {
    icon: Package,
    title: 'Sem roubo',
    description: 'Não pegue itens, recursos, etc de outros jogadores sem permissão do mesmo.'
  },
  {
    icon: Hammer,
    title: 'Sem grief',
    description: 'Não destrua construções de outros jogadores e evite trollagens pesadas.'
  },
  {
    icon: Shield,
    title: 'Proteja suas áreas',
    description: 'Use claims e respeite as áreas dos outros jogadores.'
  },
  {
    icon: Ban,
    title: 'Sem hacks',
    description: 'Proibido o uso de cheats, x-ray, macros, auto-click ou qualquer vantagem injusta.'
  },
  {
    icon: Swords,
    title: 'PvP apenas com consentimento',
    description: 'Apenas lute com outro jogador caso ambos concordarem.'
  },
  {
    icon: Heart,
    title: 'Ambiente amigável',
    description: 'Evite discussões pesadas, sobre política, brigas e qualquer outro assunto polêmico.'
  },
  {
    icon: MessageSquare,
    title: 'Sem spam',
    description: 'Não envie mensagens repetitivas ou várias mensagens sem sentido.'
  },
  {
    icon: Users,
    title: 'Ajude quem for novo',
    description: 'O servidor é uma família — sempre que puder, dê uma força para quem está começando.'
  },
  {
    icon: Crown,
    title: 'Admins têm a palavra final',
    description: 'Se a staff pedir algo, siga. Em caso de dúvidas ou abuso, chame um administrador.'
  }
];

const ServerRules = () => {
  return (
    <section className="glass-card rounded-2xl p-6 md:p-8">
      <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-primary mb-8 glow-text text-center">
        Regras do Servidor
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rules.map((rule, index) => (
          <div 
            key={index}
            className="group flex items-start gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 border border-border/30 hover:border-primary/50 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <rule.icon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-rajdhani font-bold text-lg text-foreground mb-1">
                {rule.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {rule.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-muted-foreground mt-8 text-sm">
        Atenciosamente, equipe staff do <span className="text-accent font-semibold">Covarium</span>.
      </p>
    </section>
  );
};

export default ServerRules;
