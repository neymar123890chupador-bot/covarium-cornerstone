import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import ServerRules from '@/components/ServerRules';

const Rules = () => {
  return (
    <>
      <Helmet>
        <title>Regras - Covarium</title>
        <meta name="description" content="Regras do servidor Covarium. Conheça as normas para uma boa convivência em nossa comunidade." />
      </Helmet>

      <Layout>
        <div className="container mx-auto px-4 py-8">
          <ServerRules />
        </div>
      </Layout>
    </>
  );
};

export default Rules;
