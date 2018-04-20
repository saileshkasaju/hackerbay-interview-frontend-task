import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <title>Maze Problem</title>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
    </Head>
    {props.children}
  </div>
);

export default Layout;
