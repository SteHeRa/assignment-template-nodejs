import React from "react";
import Head from "next/head";
import { Typography } from "antd";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography.Title>Stotles ContractsFinder Browser</Typography.Title>
      {/* See https://ant.design/components/overview/ for list of available components */}
    </div>
  );
}
