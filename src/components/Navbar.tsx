import { NavLink } from '@/components/NavLink';
import { Home, ScrollText, Server, Users } from 'lucide-react';
import serverLogo from '@/assets/server-logo.png';

const navItems = [
  { to: '/', label: 'Início', icon: Home },
  { to: '/regras', label: 'Regras', icon: ScrollText },
  { to: '/status', label: 'Status', icon: Server },
  { to: '/banidos', label: 'Banidos', icon: Users },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={serverLogo} alt="Covarium" className="w-8 h-8 rounded-lg" />
            <span className="font-orbitron text-xl font-bold text-accent">Covarium</span>
          </NavLink>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors text-sm md:text-base"
                activeClassName="text-accent bg-accent/10"
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
