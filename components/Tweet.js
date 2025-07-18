import { useState } from "react";
import styles from "../styles/Tweet.module.css";
import Image from 'next/image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
//import { removeTweet,addTweet } from '../reducers/tweet';





function Tweet(props) {
  const [likeTweet, setLikeTweet] = useState(0);
  const [remove, setRemove] = useState();

  


  const tweet = '';
  const count = 10;

  return (
    <div className={styles.main}>
      <div className={styles.bloc}>
        	<Image src='/Logo Twitter.png' alt='logo' width={50} height={50} className={styles.image}/>
          <span className={styles.name}>{props.firstname}</span>
          <span className={styles.username}>{props.username}</span>
          <span className={styles.time}>{props.time}</span>
      </div>
      <div className={styles.tweet}>
          <p>{tweet}</p>
      </div>
      <div className={styles.bloc}>
          <FontAwesomeIcon icon={faHeart} className={styles.icone} />
          <span className={styles.count}>{count}</span>
          <FontAwesomeIcon icon={faTrash}  style={{color:'white'}} className={styles.icone}/>
      </div>
    </div>
  );
}

export default Tweet;
