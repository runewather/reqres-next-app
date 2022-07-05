import type { NextPage } from 'next'
import Head from 'next/head'

import AppBar from '../components/Appbar/AppBar'
import Avatar from '../components/Avatar/Avatar'

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
      <main>
        <Layout>
          <Avatar src='https://reqres.in/img/faces/7-image.jpg'/>
        </Layout>
      </main>
    </div>
  )
}

export default App
