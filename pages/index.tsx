import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Typography } from 'antd';
import styles from '../styles/Home.module.css';
import SearchForm from '../components/SearchForm';
import NoticesList from '../components/NoticesList';

export default function Home() {
  const [notices, setNotices] = useState([]);
  const [from, setFrom] = useState(new Date().getTime());
  const [to, setTo] = useState(new Date().getTime());
  const [filter, setFilter] = useState('');

  const getNotices = async (from: number, to: number) => {
    const notices: notice[] = await fetch(
      `http://localhost:1234/notices?from=${from}&to=${to}`
    ).then((res) => res.json());
    setNotices(notices);
  };

  useEffect(() => {
    getNotices(new Date().getTime() - 604800000000, new Date().getTime()); //get notices from the past week on page load
  }, []);

  useEffect(() => {
    setFilter('');
    getNotices(from, to);
  }, [from, to]);

  useEffect(() => {
    console.log(filter);
    if (filter.length > 0) {
      setNotices(
        notices.filter((notice) => {
          const regExp = new RegExp(filter);
          if (notice.description.match(regExp)) return true;
          else return false;
        })
      );
    }
  }, [filter]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Stotles CF preview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography.Title>Stotles ContractsFinder Browser</Typography.Title>
      <SearchForm setFrom={setFrom} setTo={setTo} />
      <NoticesList notices={notices} filter={filter} setFilter={setFilter} />
    </div>
  );
}
