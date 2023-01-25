import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Banner from '../components/Banner';

const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-greadient-to-b from-gray-900/10 to-[#010511] lg:h-[140v]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
      <Banner /> 
      <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
      {/* Modal*/}
    </div>
  );
};

export default Home;
