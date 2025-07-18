import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets';
import InputTweet from './InputTweet';


function Home() {
  
  return (

		<div className={styles.main}>
        <InputTweet/>
        <LastTweets />
        <div className={styles.right}></div>
    </div>
  );
}

export default Home;
