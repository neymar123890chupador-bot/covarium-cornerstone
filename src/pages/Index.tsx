import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Covarium - Servidor de Minecraft Survival</title>
        <meta name="description" content="Covarium é um servidor de Minecraft Survival com uma comunidade amigável. Junte-se a nós e viva aventuras incríveis!" />
      </Helmet>

      <Layout>
        <div className="container mx-auto px-4 py-8">
          <Hero />
        </div>
      </Layout>
    </>
  );
};

export default Index;
