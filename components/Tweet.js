import styles from '../styles/Tweet.module.css';
import { useState } from 'react';

function Tweet(props) {

  return (
    <div className={styles.home}>
        <div className={styles.newtweet}>
          <input> What's Up</input> 
          <p className={styles.compter}> .... /230</p>
          <button>Tweet</button>
        </div>
        
        <div className={styles.tweet}>
          <img className={styles.avatar} src="avatar.jpg" alt="avatar"/>
          <span className={styles.name}>{props.name}</span>
          <span className={styles.username}>@ {props.username}</span>
          <span className={styles.time}>  _ temps écoulé {props.time}</span>
          <p className={styles.message}>{props.message}</p>
        </div>
    
        <div className={styles.iconContainer}>
          <span><FontAwesomeIcon icon={faHeart} onClick={() => handleLikeTweet()} style={heartIconStyle} className="like" /> ({likeCount})</span>
          <span><FontAwesomeIcon icon={faTrash} onClick={() => handleRemove()} style={trashIconStyle} className="remove" /></span>
        </div>
      </div>
  );
}

export default Tweet;