import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Hero';
import ServerStatus from '@/components/ServerStatus';
import ServerRules from '@/components/ServerRules';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Covarium - Servidor de Minecraft Survival</title>
        <meta name="description" content="Covarium é um servidor de Minecraft Survival com uma comunidade amigável. Junte-se a nós e viva aventuras incríveis!" />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="fixed inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8">
          <Hero />
          
          <main className="space-y-8 md:space-y-12">
            <div id="status">
              <ServerStatus />
            </div>
            
            <div id="regras">
              <ServerRules />
            </div>
          </main>

          {/* Footer */}
          <footer className="mt-16 py-8 border-t border-border/30 text-center">
            <p className="text-muted-foreground">
              © 2024 <span className="text-accent font-semibold">Covarium</span>. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground/60 mt-2">
              Feito com 💙 pela equipe Covarium
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Index;
