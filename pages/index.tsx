import React from 'react';
import Head from 'next/head';
import { Typography } from 'antd';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stotles CF preview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography.Title>Stotles ContractsFinder Browser</Typography.Title>
    </div>
  );
}
