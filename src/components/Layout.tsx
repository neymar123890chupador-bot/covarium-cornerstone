import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Navbar />

      <div className="relative z-10 pt-16">
        {children}
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-16 py-8 border-t border-border/30 text-center">
        <p className="text-muted-foreground">
          © 2026 <span className="text-accent font-semibold">Covarium</span>. Todos os direitos reservados.
        </p>
        <p className="text-sm text-muted-foreground/60 mt-2">
          Feito com 💙 pela equipe Covarium
        </p>
      </footer>
    </div>
  );
};

export default Layout;
