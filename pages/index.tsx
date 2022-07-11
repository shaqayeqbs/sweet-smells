import type { NextPage } from 'next'
import Head from 'next/head'
import NextJsCarousel from '../modules/carousel/index';
import Summary from '../modules/homeDesign/summary';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sweet Smells</title>
        <meta name="description" content="perfume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NextJsCarousel />
        <Summary/>
     
      </main>


    </div>
  )
}

export default Home
