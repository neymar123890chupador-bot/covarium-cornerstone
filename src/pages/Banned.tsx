import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { supabase } from '@/integrations/supabase/client';
import { Ban, Calendar, User, AlertTriangle } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface BannedPlayer {
  id: string;
  player_name: string;
  reason: string | null;
  banned_at: string;
  banned_by: string | null;
  expires_at: string | null;
}

const Banned = () => {
  const [bannedPlayers, setBannedPlayers] = useState<BannedPlayer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBannedPlayers = async () => {
      const { data, error } = await supabase
        .from('banned_players')
        .select('*')
        .order('banned_at', { ascending: false });

      if (!error && data) {
        setBannedPlayers(data);
      }
      setLoading(false);
    };

    fetchBannedPlayers();

    // Subscribe to realtime updates
    const channel = supabase
      .channel('banned_players_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'banned_players'
        },
        () => {
          fetchBannedPlayers();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Jogadores Banidos - Covarium</title>
        <meta name="description" content="Lista de jogadores banidos do servidor Covarium." />
      </Helmet>

      <Layout>
        <div className="container mx-auto px-4 py-8">
          <section className="glass-card p-6 md:p-8 rounded-2xl animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-red-500/20 rounded-xl">
                <Ban className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground">
                  Jogadores Banidos
                </h1>
                <p className="text-muted-foreground text-sm">
                  Lista atualizada em tempo real
                </p>
              </div>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              </div>
            ) : bannedPlayers.length === 0 ? (
              <div className="text-center py-12">
                <AlertTriangle className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">Nenhum jogador banido no momento.</p>
                <p className="text-sm text-muted-foreground/60 mt-2">
                  Nossa comunidade está seguindo as regras! 🎉
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {bannedPlayers.map((player) => (
                  <div
                    key={player.id}
                    className="bg-background/50 border border-border/30 rounded-xl p-4 hover:border-red-500/30 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                          <User className="w-5 h-5 text-red-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{player.player_name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {player.reason || 'Sem motivo especificado'}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {format(new Date(player.banned_at), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                          </span>
                        </div>
                        {player.banned_by && (
                          <span className="text-xs text-muted-foreground/60">
                            Banido por: {player.banned_by}
                          </span>
                        )}
                        {player.expires_at && (
                          <span className="text-xs text-yellow-400">
                            Expira em: {format(new Date(player.expires_at), "dd/MM/yyyy", { locale: ptBR })}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 p-4 bg-accent/5 rounded-xl border border-accent/20">
              <p className="text-sm text-muted-foreground text-center">
                💡 <span className="text-accent">Dica:</span> Se você acredita que foi banido injustamente, 
                entre em contato com a equipe do servidor para apelar.
              </p>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Banned;
