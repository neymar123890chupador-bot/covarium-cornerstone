import { useEffect, useState } from 'react';
import { Users, Wifi, WifiOff, Copy, Check } from 'lucide-react';
import serverLogo from '@/assets/server-logo.png';

interface ServerStatusData {
  online: boolean;
  players: {
    online: number;
    max: number;
  };
  motd: {
    clean: string[];
  };
  version: string;
}

const ServerStatus = () => {
  const [status, setStatus] = useState<ServerStatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  
  const serverIP = 'survivalcovarium.qzz.io';

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
        const data = await response.json();
        setStatus(data);
      } catch (error) {
        console.error('Error fetching server status:', error);
        setStatus(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="glass-card rounded-2xl p-6 md:p-8 glow-blue">
      <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-primary mb-6 glow-text text-center">
        Status do Servidor
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        {/* Server Icon */}
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden glow-blue animate-float">
            <img 
              src={serverLogo} 
              alt="Covarium Server Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div 
            className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full border-4 border-background ${
              loading ? 'bg-yellow-500' : status?.online ? 'bg-green-500 status-online' : 'bg-red-500 status-offline'
            }`}
          />
        </div>

        {/* Server Info */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-2">
            COVARIUM
          </h3>
          
          {/* MOTD */}
          <div className="text-muted-foreground mb-4">
            {loading ? (
              <p className="animate-pulse">Carregando...</p>
            ) : status?.motd?.clean ? (
              status.motd.clean.map((line, i) => (
                <p key={i} className="text-lg">{line}</p>
              ))
            ) : (
              <p className="text-lg">Servidor de Minecraft Survival</p>
            )}
          </div>

          {/* IP Copy */}
          <button 
            onClick={copyIP}
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 px-4 py-2 rounded-lg transition-all duration-300 group"
          >
            <span className="font-mono text-accent">{serverIP}</span>
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            )}
          </button>
        </div>

        {/* Status Cards */}
        <div className="flex flex-row md:flex-col gap-4">
          {/* Online Status */}
          <div className="glass-card rounded-xl p-4 text-center min-w-[120px]">
            <div className="flex items-center justify-center gap-2 mb-2">
              {status?.online ? (
                <Wifi className="w-5 h-5 text-green-500" />
              ) : (
                <WifiOff className="w-5 h-5 text-red-500" />
              )}
            </div>
            <p className={`font-orbitron font-bold text-lg ${status?.online ? 'text-green-500' : 'text-red-500'}`}>
              {loading ? '...' : status?.online ? 'ONLINE' : 'OFFLINE'}
            </p>
          </div>

          {/* Players */}
          <div className="glass-card rounded-xl p-4 text-center min-w-[120px]">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-5 h-5 text-accent" />
            </div>
            <p className="font-orbitron font-bold text-lg text-accent">
              {loading ? '...' : status?.online ? `${status.players.online}/${status.players.max}` : '0/0'}
            </p>
            <p className="text-sm text-muted-foreground">Jogadores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerStatus;
