import Layout from "../components/layout/layout";
import "../styles/globals.scss";

import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress color="#f68a1f" height={1.5}/>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
