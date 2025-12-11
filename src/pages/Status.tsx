import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import ServerStatus from '@/components/ServerStatus';

const Status = () => {
  return (
    <>
      <Helmet>
        <title>Status do Servidor - Covarium</title>
        <meta name="description" content="Veja o status atual do servidor Covarium, jogadores online e informações de conexão." />
      </Helmet>

      <Layout>
        <div className="container mx-auto px-4 py-8">
          <ServerStatus />
        </div>
      </Layout>
    </>
  );
};

export default Status;
