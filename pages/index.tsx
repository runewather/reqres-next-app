import type { NextPage } from 'next'
import Head from 'next/head'

import AppBar from '../components/Navbar/AppBar'

import Layout from '../layouts/Layout'

const App: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Regres next js app</title>
        <meta name="description" content="A NextJS app using the regres.in API" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <Layout>
        <h1>Test</h1>
      </Layout>
    </div>
  )
}

export default App
