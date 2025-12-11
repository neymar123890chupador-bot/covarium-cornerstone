-- Create banned_players table
CREATE TABLE public.banned_players (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  player_name TEXT NOT NULL,
  reason TEXT,
  banned_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  banned_by TEXT,
  expires_at TIMESTAMP WITH TIME ZONE
);

-- Enable RLS
ALTER TABLE public.banned_players ENABLE ROW LEVEL SECURITY;

-- Allow public read access (anyone can see banned players)
CREATE POLICY "Anyone can view banned players"
ON public.banned_players
FOR SELECT
USING (true);

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.banned_players;