import React, { Suspense } from 'react';
import type { NextPage } from 'next';
import styles from './index.module.scss';
import dynamic from 'next/dynamic';

//@ts-ignore
const F1Home = dynamic(() => import('f1Home/home'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Suspense fallback={"Error on loading f1home"}>
        <F1Home />
      </Suspense>
    </div>
  );
};

export default Home;
