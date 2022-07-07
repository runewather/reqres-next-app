import type { NextPage } from "next";
import Head from "next/head";

import CardsWrapper from "../containers/CardsWrapper/CardsWrapper";

import Layout from "../layouts/Layout";

const App: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reqres next js app</title>
        <meta
          name="description"
          content="A NextJS app using the regres.in API"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <CardsWrapper />
        </Layout>
      </main>
    </div>
  );
};

export default App;
