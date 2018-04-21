import Layout from '../components/Layout';
import GameWrapper from '../components/GameWrapper';

const App = () => (
  <Layout>
    <style jsx>
      {`
      body {
        text-align: center;
      }
    `}
    </style>
    <GameWrapper />
  </Layout>
);

export default App;
